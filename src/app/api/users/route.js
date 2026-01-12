import { connectDB } from "@/lib/mongoose";
import SocialUser from "@/models/SocialUser";

export const GET = async (request) => {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");

        // Get single user
        if (email) {
            const user = await SocialUser.findOne({ email });
            if (!user) {
                return Response.json(
                    { message: "User not found" },
                    { status: 404 }
                );
            }
            return Response.json(user, { status: 200 });
        }

        // Get all users
        const users = await SocialUser.find();
        return Response.json(users, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

export const POST = async (request) => {
    try {
        await connectDB();

        const { username, email, image } = await request.json();

        if (!email) {
            return Response.json(
                { message: "Email is required" },
                { status: 400 }
            );
        }

        let user = await SocialUser.findOne({ email });

        if (!user) {
            user = await SocialUser.create({
                username,
                email,
                image,
            });
        }

        return Response.json(user, { status: 200 });
    } catch (error) {
        // duplicate key safe fallback
        if (error.code === 11000) {
            const user = await SocialUser.findOne({
                email: error.keyValue.email,
            });
            return Response.json(user, { status: 200 });
        }

        return Response.json({ message: error.message }, { status: 500 });
    }
};
