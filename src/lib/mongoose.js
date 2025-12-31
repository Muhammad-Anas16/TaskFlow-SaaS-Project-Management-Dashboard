import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.CRUD_DATABASE);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB error", error);
    }
}