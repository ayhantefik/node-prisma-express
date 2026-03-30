import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/userLanguages", async (req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(500).send("Unknown error");
    }
})

app.get("/userLanguages/:language", async (req, res) => {
    try{
        const language = req.params.language.toLowerCase().trim();

        const users = await prisma.user.findMany();

        const filteredUsers = users.filter(user => {
            if (!user.languages) return false;

            const userLanguages = user.languages
                .split(",")
                .map(lang => lang.trim().toLowerCase());

            return userLanguages.includes(language);
        });

        res.status(200).json(filteredUsers);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(500).send("Unknown error");
    }
})

app.post("/userLanguages", async (req, res) => {
    try{
        const { name, email, age, languages } = req.body;

        if (!name || !email || !age || !languages) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                languages: languages,
                age: age
            }
        })
        return res.status(201).json({message: "User added successfully!", user: newUser });
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(500).send("Unknown error");
    }
})

app.put("/userLanguages/:email", async (req, res) => {
    try{
        const userEmail = req.params.email;

        const { languages } = req.body;

        if (!languages) {
            return res.status(400).json({ message: "Invalid languages" });
        }

        const updateUser = await prisma.user.update({
            where: { email: userEmail },
            data: {
                languages: {
                    set: languages
                }
            }
        })
        res.status(200).json({message: "Users updated successfully!", userLanguage: updateUser });
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(500).send("Unknown error");
    }
})

app.delete("/userLanguages", async (req, res) => {
    try{
        const deleteUnder18 = await prisma.user.deleteMany({
            where: { 
                age: {
                    lte: 18
                }}
        })
        return res.status(200).json({message: "Users under 18 deleted successfully!", userLanguage: deleteUnder18 });
    } catch (error) {
        if(error instanceof Error) {
            res.status(500).send(error.message);
        }
        return res.status(500).send("Unknown error");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});