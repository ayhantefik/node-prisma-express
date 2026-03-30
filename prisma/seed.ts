import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
         data: [
    {
        id: 6,
        name: "Ibram Demir",
        email: "ibram.demi2r@example.com",
        languages: "Swedish, English, Turkish",
        age: 26
    },
    {
        id: 7,
        name: "Emma Svensson",
        email: "emma.svensson2@example.com",
        languages: "Swedish, English",
        age: 31
    },
    {
        id: 8,
        name: "Liam Andersson",
        email: "liam.andersson2@example.com",
        languages: "Swedish",
        age: 22
    },
    {
        id: 9,
        name: "Sara Nilsson",
        email: "sara.nilsson2@example.com",
        languages: "Swedish, English, German",
        age: 29
    },
    {
        id: 10,
        name: "Oskar Johansson",
        email: "oskar.johansson2@example.com",
        languages: "Swedish, English",
        age: 35
    },
    {
        id: 11,
        name: "Maja Karlsson",
        email: "maja.karlsson2@example.com",
        languages: "Swedish, English, French",
        age: 28
    },
    {
        id: 12,
        name: "Noah Eriksson",
        email: "noah.eriksson2@example.com",
        languages: "Swedish, English",
        age: 24
    },
    {
        id: 13,
        name: "Alice Lindberg",
        email: "alice.lindberg@example.com",
        languages: "Swedish, English, Spanish",
        age: 30
    },
    {
        id: 14,
        name: "Hugo Bergström",
        email: "hugo.bergstrom@example.com",
        languages: "Swedish",
        age: 21
    },
    {
        id: 15,
        name: "Elin Holm",
        email: "elin.holm@example.com",
        languages: "Swedish, English, Danish",
        age: 33
    },
    {
        id: 16,
        name: "Viktor Nyström",
        email: "viktor.nystrom@example.com",
        languages: "Swedish, English",
        age: 27
    },
    {
        id: 17,
        name: "Sofia Åberg",
        email: "sofia.aberg@example.com",
        languages: "Swedish, English, Italian",
        age: 29
    },
    {
        id: 18,
        name: "Anton Dahl",
        email: "anton.dahl@example.com",
        languages: "Swedish",
        age: 23
    },
    {
        id: 19,
        name: "Clara Falk",
        email: "clara.falk@example.com",
        languages: "Swedish, English, Norwegian",
        age: 32
    },
    {
        id: 20,
        name: "Isak Lundqvist",
        email: "isak.lundqvist@example.com",
        languages: "Swedish, English",
        age: 26
    }
]
    })
}

seed().then(() => prisma.$disconnect);