import { connectDB } from "@/lib/mongoose";
import Project from "@/models/Project";

/* =========================
   CREATE PROJECT (OWNER ONLY)
========================= */
export const POST = async (req) => {
    try {
        await connectDB();

        const {
            userEmail,
            projectName,
            client,
            duration,
            tasks = [],
            teammates = [],
        } = await req.json();

        if (!userEmail || !projectName || !client || !duration) {
            return Response.json(
                { message: "Required fields are missing" },
                { status: 400 }
            );
        }

        const exists = await Project.findOne({ userEmail, projectName });
        if (exists) {
            return Response.json(
                { message: "Project already exists" },
                { status: 409 }
            );
        }

        const formattedTasks = tasks.map((task) => ({
            title: task.title ?? task,
            isCompleted: task.isCompleted ?? false,
        }));

        const project = await Project.create({
            userEmail,
            projectName,
            client,
            duration,
            tasks: formattedTasks,
            teammates,
        });

        return Response.json(project, { status: 201 });
    } catch (error) {
        return Response.json(
            { message: "Failed to create project" },
            { status: 500 }
        );
    }
};

/* =========================
   GET PROJECTS (OWNER + FRIENDS)
========================= */
export const GET = async (req) => {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const currentUserEmail = searchParams.get("currentUserEmail");

        if (!currentUserEmail) {
            return Response.json(
                { message: "currentUserEmail is required" },
                { status: 400 }
            );
        }

        const projects = await Project.find({
            $or: [
                { userEmail: currentUserEmail },        // owner
                { teammates: currentUserEmail },        // friend
            ],
        }).sort({ createdAt: -1 });

        return Response.json(projects, { status: 200 });
    } catch (error) {
        return Response.json(
            { message: "Failed to fetch projects" },
            { status: 500 }
        );
    }
};

/* =========================
   UPDATE TASKS (OWNER + FRIENDS)
========================= */
export const PATCH = async (req) => {
    try {
        await connectDB();

        const {
            projectId,
            currentUserEmail,
            tasks,
        } = await req.json();

        if (!projectId || !currentUserEmail || !tasks) {
            return Response.json(
                { message: "projectId, currentUserEmail, and tasks are required" },
                { status: 400 }
            );
        }

        const project = await Project.findById(projectId);
        if (!project) {
            return Response.json(
                { message: "Project not found" },
                { status: 404 }
            );
        }

        // Permission check
        const isOwner = project.userEmail === currentUserEmail;
        const isFriend = project.teammates.includes(currentUserEmail);

        if (!isOwner && !isFriend) {
            return Response.json(
                { message: "Not authorized" },
                { status: 403 }
            );
        }

        project.tasks = tasks.map((task) => ({
            title: task.title,
            isCompleted: task.isCompleted ?? false,
        }));

        await project.save();

        return Response.json(project, { status: 200 });
    } catch (error) {
        return Response.json(
            { message: "Failed to update tasks" },
            { status: 500 }
        );
    }
};
