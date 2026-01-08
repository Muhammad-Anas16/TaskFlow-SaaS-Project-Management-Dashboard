import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

export const GET = async (req) => {
    try {
        await connectDB();

        const email = req.nextUrl.searchParams.get("email");
        if (!email)
            return Response.json({ message: "Email required" }, { status: 400 });

        const user = await User.findOne({ email }).select("notifications");
        if (!user)
            return Response.json({ message: "User not found" }, { status: 404 });

        return Response.json(user.notifications, { status: 200 });
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
};