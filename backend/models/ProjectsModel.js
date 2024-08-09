import mongoose from "mongoose";

const projectsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isCompleted: {
          type: Boolean,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }
);

export const Projects = mongoose.model('projects', projectsSchema);