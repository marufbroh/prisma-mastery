import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {

    // const posts = await prisma.$queryRaw`SELECT * FROM "posts"`
    // console.log(posts);


    await prisma.$queryRaw`Truncate table "users" CASCADE`
    await prisma.$queryRaw`Truncate table "categories" CASCADE`
};

rawQuery();