import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

// Send Friend Request
export const POST = async (req) => {
    try {
        await connectDB();

        const { senderEmail, receiverEmail } = await req.json();

        const sender = await User.findOne({ email: senderEmail });
        const receiver = await User.findOne({ email: receiverEmail });

        if (!sender) return Response.json({ message: "Sender Not Found" }, { status: 404 });
        if (!receiver) return Response.json({ message: "Receiver Not Found" }, { status: 404 });

        if (receiver.friendRequests.includes(senderEmail)) {
            return Response.json({ message: "Request already sent" }, { status: 400 });
        }

        if (receiver.friends.includes(senderEmail)) {
            return Response.json({ message: "Already a Friend" }, { status: 400 });
        }

        receiver.friendRequests.push(senderEmail);
        await receiver.save();

        return Response.json({ message: "Friend Request Sent" }, { status: 200 });

    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

// Accept Friend Request
export const PUT = async (req) => {
    try {
        await connectDB();

        const { userEmail, friendEmail } = await req.json(); // userEmail = person accepting request

        const user = await User.findOne({ email: userEmail });
        const friend = await User.findOne({ email: friendEmail });

        if (!user) return Response.json({ message: "User Not Found" }, { status: 404 });
        if (!friend) return Response.json({ message: "Friend Not Found" }, { status: 404 });

        if (!user.friendRequests.includes(friendEmail)) {
            return Response.json({ message: "No request from this user" }, { status: 400 });
        }

        // Add each other as friends
        user.friends.push(friendEmail);
        friend.friends.push(userEmail);

        // Remove request
        user.friendRequests = user.friendRequests.filter(email => email !== friendEmail);

        await user.save();
        await friend.save();

        return Response.json({ message: "Friend request accepted" }, { status: 200 });

    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
