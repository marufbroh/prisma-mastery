import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany();

    // find first and find first or throw error
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 7
    //     }
    // });

    // find unique or findUniqueOrThrow error

    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 10
        },
        select: {
            title: true,
            content: true,
            authorName: true
        }
    })



    console.log({ findUnique });
}

main();