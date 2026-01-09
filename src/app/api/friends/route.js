import { connectDB } from "@/lib/mongoose";
import SocialUser from "@/models/SocialUser";

/* =======================
   SEND FRIEND REQUEST
======================= */
export const POST = async (req) => {
    try {
        await connectDB();

        const { senderEmail, receiverEmail } = await req.json();

        if (!senderEmail || !receiverEmail) {
            return Response.json(
                { message: "Both emails are required" },
                { status: 400 }
            );
        }

        if (senderEmail === receiverEmail) {
            return Response.json(
                { message: "You cannot send a request to yourself" },
                { status: 400 }
            );
        }

        const sender = await SocialUser.findOne({ email: senderEmail });
        const receiver = await SocialUser.findOne({ email: receiverEmail });

        if (!sender || !receiver) {
            return Response.json({ message: "User not found" }, { status: 404 });
        }

        if (receiver.friendRequests.includes(senderEmail)) {
            return Response.json(
                { message: "Friend request already sent" },
                { status: 400 }
            );
        }

        if (receiver.friends.includes(senderEmail)) {
            return Response.json(
                { message: "You are already friends" },
                { status: 400 }
            );
        }

        // Add friend request
        receiver.friendRequests.push(senderEmail);

        // Notification
        receiver.notifications.push({
            type: "friend_request",
            message: `${sender.username} sent you a friend request`,
            senderEmail,
        });

        await receiver.save();

        return Response.json(
            { message: "Friend request sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

/* =======================
   ACCEPT FRIEND REQUEST
======================= */
export const PUT = async (req) => {
    try {
        await connectDB();

        const { userEmail, friendEmail } = await req.json();

        const user = await SocialUser.findOne({ email: userEmail });
        const friend = await SocialUser.findOne({ email: friendEmail });

        if (!user || !friend) {
            return Response.json({ message: "User not found" }, { status: 404 });
        }

        if (!user.friendRequests.includes(friendEmail)) {
            return Response.json(
                { message: "No friend request from this user" },
                { status: 400 }
            );
        }

        // Add each other as friends
        user.friends.push(friendEmail);
        friend.friends.push(userEmail);

        // Remove request
        user.friendRequests = user.friendRequests.filter(
            (email) => email !== friendEmail
        );

        // Remove request notification
        user.notifications = user.notifications.filter(
            (n) => !(n.type === "friend_request" && n.senderEmail === friendEmail)
        );

        // Notify sender
        friend.notifications.push({
            type: "success",
            message: `${user.username} accepted your friend request`,
        });

        await user.save();
        await friend.save();

        return Response.json(
            { message: "Friend request accepted" },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};
