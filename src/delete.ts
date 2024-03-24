import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // delete
    // const deleteData = await prisma.post.delete({
    //     where: {
    //         id: 8
    //     }
    // })

    // delete Many
    const deleteManyData = await prisma.post.deleteMany({
        // where: {
        //     title: "This is title 2"
        // }
    })

    console.log(deleteManyData);
}

main();