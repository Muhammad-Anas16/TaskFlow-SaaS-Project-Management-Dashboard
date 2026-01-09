import { connectDB } from "@/lib/mongoose";
import SocialUser from "@/models/SocialUser";

export const GET = async (req) => {
  try {
    await connectDB();

    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return Response.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const user = await SocialUser.findOne({ email }).select("notifications");

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user.notifications, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
};
