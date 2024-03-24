import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

const main = async () => {
    // update
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 8
    //     },
    //     data: {
    //         title: "Title 8",
    //         content: "content 8",
    //         authorName: "author8"
    //     }
    // })


    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         title: "This is title 2"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    // console.log(updateMany);

    const upsertData = await prisma.post.upsert({
        where: {
            id: 10
        },
        update: {
            authorName: "Tamim"
        },
        create: {
            title: "Title 1",
            content: "Content 1"
        }
    })

    console.log(upsertData);
}

main();