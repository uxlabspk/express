import express, {request, response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { Issue } from "./models/IssuesModel.js";
import {Projects} from "./models/ProjectsModel.js";
import {User} from "./models/UsersModel.js";

// initialize
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
const PORT = process.env.PORT | 4000;
const MongoUrl = process.env.MONGO_URL;

// routes
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).json({message: "Server is live"});
});

// login user route
app.post('/signin', async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        let user = await User.findOne({ email });
        if (!user) return response.status(201).json({ message: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return response.status(201).json({ message: 'Invalid Credentials' });

        return response.status(200).json({ user, message: 'Successfully login' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send('Server Error');
    }
})

// register user route
app.post('/signup', async (request, response) => {
    try {
        const username = request.body.username
        const email = request.body.email
        const pass = request.body.password

        let user = await User.findOne({ email });
        if (user) return response.status(201).json({ msg: 'User already exists' });

        let salt = await bcrypt.genSalt(10);
        let password = await bcrypt.hash(pass, salt);

        const newUser = {
            username, email, password
        }

        await User.create(newUser);

        return response.status(200).json({ usr: 'Successfully Registered' });

    } catch (error) {
        console.error(error.message);
        response.status(500).send('Server error');
    }
});

// getting all projects
app.get('/:user/projects', async (req, res) => {
    try {
        const projects = await Projects.find({ user: req.params.user });
        res.status(200).json({
            // count: issues.length,
            data: projects
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message": error.message});
    }
})

// posting all projects
app.post('/:user/projects', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.createdAt
        ) {
            return res.status(400).send("request send");
        }

        const newProject = {
            title: req.body.title,
            description: req.body.description,
            isCompleted: false,
            createdAt: req.body.createdAt,
            user: req.body.usr
        };

        const project = await Projects.create(newProject);

        return res.status(200).json({ msg: "Successfully Created" });

    } catch (error) {
        console.error(error)
        res.status(500).json({"message": error.message});
    }
})


// posting an issue
app.post('/:user/project/:projectid/issues', async (req, res) => {
   try {
       if (
           !req.body.title ||
           !req.body.description ||
           !req.body.assignedTo ||
           !req.body.status ||
            !req.body.createdAt
       ) {
           return res.status(400).send("request send");
       }

       const newIssue = {
           title: req.body.title,
           description: req.body.description,
           assignedTo: req.body.assignedTo,
           status: req.body.status,
           createdAt: req.body.createdAt,
           project: req.body.projectId
       };

       const issue = await Issue.create(newIssue);

       return res.status(401).send(issue);

   } catch (error) {
       console.error(error)
       res.status(500).json({"message": error.message});
   }
});

// getting an issue
app.get('/:user/project/:projectId/issues', async (req, res) => {
    try {
        const issues = await Issue.find({project: req.params.projectId});
        res.status(200).json({
            // count: issues.length,
            data: issues
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message": error.message});
    }
});

// getting an issue by id
app.get('/:user/project/:projectid/issues/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const issue = await Issue.findById(id);
        res.status(200).json({issue});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message": error.message});
    }
});

// update an issue by id
app.put('/:user/project/:projectid/issues/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.assignedTo ||
            !req.body.status ||
            !req.body.createdAt
        ) {
            return res.status(400).send("request send");
        }

        const { id } = req.params;

        const result = await Issue.findByIdAndUpdate(id, req.body);

        if (!result)
            return res.status(404).json("Issue not found");

        return res.status(200).json({"message": "Issue Updated Successfully!"});

    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message});
    }
});

// delete an issue by id
app.delete('/:user/project/:projectid/issues/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Issue.findByIdAndDelete(id);

        if (!result)
            return res.status(404).json("Issue not found");

        return res.status(200).json({"message": "Deleted Successfully!"});

    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message});
    }
});

// Connect the mongo db
mongoose.connect(MongoUrl).then(() => {
    console.log('Connected');
    app.listen(PORT, (req, res) => {
        console.log(`Listening to port ${PORT}`);
    })
}).catch((error) => {
    console.log('Failed ', error);
});

