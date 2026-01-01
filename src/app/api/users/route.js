import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

// GET single user (latest or any)
export const GET = async () => {
    try {
        await connectDB();

        const users = await User.find();
        return Response.json(users, { status: 200 });

    } catch (error) {
        return Response.json(
            { message: error.message },
            { status: 500 }
        );
    }
};

// CREATE or RETURN user
export const POST = async (request) => {
    try {
        await connectDB();

        const { username, email, image } = await request.json();

        // find existing user
        let user = await User.findOne({ email });

        // create if not exists
        if (!user) {
            user = await User.create({
                username,
                email,
                image,
            });
        }

        // always return user
        return Response.json(user, { status: 200 });

    } catch (error) {
        // handle duplicate key error safely
        if (error.code === 11000) {
            const user = await User.findOne({ email: error.keyValue.email });
            return Response.json(user, { status: 200 });
        }

        return Response.json(
            { message: error.message },
            { status: 500 }
        );
    }
};