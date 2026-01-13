import { connectDB } from "@/lib/mongoose";
import mongoose from "mongoose";
import Project from "@/models/Project";

/* =========================
   UPDATE PROJECT / TASKS
   OWNER + FRIENDS (TASKS ONLY)
========================= */
export const PUT = async (req, { params }) => {
    try {
        await connectDB();

        const { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Response.json({ message: "Invalid project ID" }, { status: 400 });
        }

        const {
            currentUserEmail,
            projectName,
            client,
            duration,
            tasks,
            teammates,
        } = await req.json();

        if (!currentUserEmail) {
            return Response.json(
                { message: "currentUserEmail is required" },
                { status: 400 }
            );
        }

        const project = await Project.findById(id);
        if (!project) {
            return Response.json(
                { message: "Project not found" },
                { status: 404 }
            );
        }

        const isOwner = project.userEmail === currentUserEmail;
        const isFriend = project.teammates.includes(currentUserEmail);

        if (!isOwner && !isFriend) {
            return Response.json(
                { message: "Not authorized" },
                { status: 403 }
            );
        }

        /* ---- OWNER can update everything ---- */
        if (isOwner) {
            if (projectName !== undefined) project.projectName = projectName;
            if (client !== undefined) project.client = client;
            if (duration !== undefined) project.duration = duration;
            if (Array.isArray(teammates)) project.teammates = teammates;
        }

        /* ---- OWNER + FRIENDS can update TASKS ---- */
        if (Array.isArray(tasks)) {
            project.tasks = tasks.map((task) => ({
                title: task.title ?? task,
                isCompleted: task.isCompleted ?? false,
            }));
        }

        await project.save();

        return Response.json(project, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json(
            { message: "Failed to update project" },
            { status: 500 }
        );
    }
};

/* =========================
   DELETE PROJECT (OWNER ONLY)
========================= */
export const DELETE = async (req, { params }) => {
    try {
        await connectDB();

        const { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Response.json({ message: "Invalid project ID" }, { status: 400 });
        }

        const { searchParams } = new URL(req.url);
        const currentUserEmail = searchParams.get("currentUserEmail");

        if (!currentUserEmail) {
            return Response.json(
                { message: "currentUserEmail is required" },
                { status: 400 }
            );
        }

        const deleted = await Project.findOneAndDelete({
            _id: id,
            userEmail: currentUserEmail,
        });

        if (!deleted) {
            return Response.json(
                { message: "Project not found or unauthorized" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "Project deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { message: "Failed to delete project" },
            { status: 500 }
        );
    }
};
