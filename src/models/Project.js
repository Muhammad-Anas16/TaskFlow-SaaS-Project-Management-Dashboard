import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        userEmail: { type: String, required: true },
        projectName: { type: String, required: true },
        client: { type: String, required: true },
        duration: { type: Date, required: true },
        tasks: [
            {
                title: { type: String, required: true },
                isCompleted: { type: Boolean, default: false },
            },
        ],

        teammates: [{ type: String }],
    },
    { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
