import { connectDB } from "@/lib/mongoose";
import Project from "@/models/Project";

export const POST = async (req) => {
    try {
        await connectDB();

        const { userEmail, projectName, client, duration, tasks, teammates } =
            await req.json();

        if (!userEmail || !projectName || !client || !duration) {
            return Response.json(
                { message: "All required fields are missing" },
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

        const project = await Project.create({
            userEmail,
            projectName,
            client,
            duration,
            tasks: tasks ?? [],
            teammates: teammates ?? [],
        });

        return Response.json(project, { status: 201 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

export const GET = async (req) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const userEmail = searchParams.get("userEmail");

        if (!userEmail) {
            return Response.json({ message: "User email is required" }, { status: 400 });
        }

        const projects = await Project.find({ userEmail });
        return Response.json(projects, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};
