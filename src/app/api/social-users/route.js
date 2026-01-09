import { connectDB } from "@/lib/mongoose";
import SocialUser from "@/models/SocialUser";

export const GET = async () => {
    try {
        await connectDB();
        const users = await SocialUser.find();
        return Response.json(users, { status: 200 });
    } catch (error) {
        return Response.json(
            { message: error.message },
            { status: 500 }
        );
    }
};
