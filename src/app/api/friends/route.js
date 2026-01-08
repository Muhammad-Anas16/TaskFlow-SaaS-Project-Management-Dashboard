import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

// Send Friend Request
export const POST = async (req) => {
    try {
        await connectDB();
        const { senderEmail, receiverEmail } = await req.json();

        const sender = await User.findOne({ email: senderEmail });
        const receiver = await User.findOne({ email: receiverEmail });

        if (!sender || !receiver)
            return Response.json({ message: "User not found" }, { status: 404 });

        if (receiver.friendRequests.includes(senderEmail))
            return Response.json({ message: "Request already sent" }, { status: 400 });

        if (receiver.friends.includes(senderEmail))
            return Response.json({ message: "Already friends" }, { status: 400 });

        // Add friend request
        receiver.friendRequests.push(senderEmail);

        // Add notification for receiver
        receiver.notifications.push({
            type: "friend_request",
            message: `${sender.username} sent you a friend request`,
            senderEmail: senderEmail
        });

        await receiver.save();

        return Response.json({ message: "Friend request sent" }, { status: 200 });
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
};


// Accept Friend Request
export const PUT = async (req) => {
    try {
        await connectDB();
        const { userEmail, friendEmail } = await req.json();

        const user = await User.findOne({ email: userEmail }); // person accepting
        const friend = await User.findOne({ email: friendEmail }); // sender

        if (!user || !friend)
            return Response.json({ message: "User not found" }, { status: 404 });

        if (!user.friendRequests.includes(friendEmail))
            return Response.json({ message: "No request from this user" }, { status: 400 });

        // Add each other as friends
        user.friends.push(friendEmail);
        friend.friends.push(userEmail);

        // Remove friend request
        user.friendRequests = user.friendRequests.filter(email => email !== friendEmail);

        // Remove friend request notification
        user.notifications = user.notifications.filter(
            (n) => !(n.type === "friend_request" && n.senderEmail === friendEmail)
        );

        // Add accepted notification for sender
        friend.notifications.push({
            type: "success",
            message: `${user.username} accepted your friend request`
        });

        await user.save();
        await friend.save();

        return Response.json({ message: "Friend request accepted" }, { status: 200 });
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
};
