import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: { type: String, required: true, unique: true },
        image: String,
        friends: { type: [String], default: [] },
        friendRequests: { type: [String], default: [] }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
