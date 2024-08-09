import mongoose from "mongoose";

const issuesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        assignedTo: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }
);

export const Issue = mongoose.model('issue', issuesSchema);