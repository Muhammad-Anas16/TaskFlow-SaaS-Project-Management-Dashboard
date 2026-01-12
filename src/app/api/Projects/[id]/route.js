import { connectDB } from "@/lib/mongoose";
import mongoose from "mongoose";
import Project from "@/models/Project";

// UPDATE PROJECT
export const PUT = async (req, { params }) => {
    try {
        await connectDB();
        const { id } = params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Response.json({ message: "Invalid project ID" }, { status: 400 });
        }

        const { userEmail, projectName, client, duration, tasks, teammates } = await req.json();

        if (!userEmail) {
            return Response.json({ message: "User email is required" }, { status: 400 });
        }

        const updatedProject = await Project.findOneAndUpdate(
            { _id: id, userEmail, owner: true },
            {
                projectName,
                client,
                duration,
                tasks: tasks ?? [],
                teammates: teammates ?? [],
            },
            { new: true }
        );

        if (!updatedProject) {
            return Response.json(
                { message: "Project not found or unauthorized" },
                { status: 403 }
            );
        }

        return Response.json(updatedProject, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

// DELETE PROJECT
export const DELETE = async (req, { params }) => {
    try {
        await connectDB();
        const { id } = params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Response.json({ message: "Invalid project ID" }, { status: 400 });
        }

        const { searchParams } = new URL(req.url);
        const userEmail = searchParams.get("userEmail");

        if (!userEmail) {
            return Response.json({ message: "User email is required" }, { status: 400 });
        }

        const deletedProject = await Project.findOneAndDelete({
            _id: id,
            userEmail,
            owner: true,
        });

        if (!deletedProject) {
            return Response.json(
                { message: "Project not found or unauthorized" },
                { status: 403 }
            );
        }

        return Response.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};
