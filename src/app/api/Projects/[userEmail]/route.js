import { connectDB } from "@/lib/mongoose";
import Project from "@/models/Project";

export const GET = async (req, { params }) => {
    try {
        await connectDB();

        const { userEmail } = params;
        if (!userEmail) {
            return Response.json({ message: "User email is required" }, { status: 400 });
        }

        const projects = await Project.find({ userEmail });
        return Response.json(projects, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};
