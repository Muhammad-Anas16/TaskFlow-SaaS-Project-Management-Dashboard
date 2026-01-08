import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: { type: String, required: true, unique: true },
        image: String,
        friends: [{ type: String, default: [] }],           // accepted friends
        friendRequests: [{ type: String, default: [] }],    // pending requests
        notifications: [{
            type: { type: String, default: "info" },          // info, success, friend_request
            message: String,
            senderEmail: String,                              // optional, for friend requests
            createdAt: { type: Date, default: Date.now }
        }]

    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
