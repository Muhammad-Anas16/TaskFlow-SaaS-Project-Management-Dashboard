import { connectDB } from "@/lib/mongoose";
import Project from "@/models/Project";

export const POST = async (req) => {
    try {
        await connectDB();

        const { userEmail, owner, projectName, client, duration, tasks, teammates } = await req.json();

        if (!userEmail || !projectName || !client || !duration) {
            return Response.json(
                { message: "All required fields are missing" },
                { status: 400 }
            );
        }

        // prevent duplicate project for same user
        const existingProject = await Project.findOne({ userEmail, projectName });
        if (existingProject) {
            return Response.json(
                { message: "Project already exists" },
                { status: 409 }
            );
        }

        const newProject = await Project.create({
            userEmail,
            owner: owner !== undefined ? owner : true,
            projectName,
            client,
            duration,
            tasks: tasks ?? [],
            teammates: teammates ?? [],
        });

        return Response.json(newProject, { status: 201 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};
