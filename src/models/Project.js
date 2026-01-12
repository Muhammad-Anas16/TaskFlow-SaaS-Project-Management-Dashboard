import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        userEmail: { type: String, required: true },
        projectName: { type: String, required: true },
        client: { type: String, required: true },
        duration: { type: String, required: true },
        tasks: [{ type: String }],
        teammates: [{ type: String }],
    },
    { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
