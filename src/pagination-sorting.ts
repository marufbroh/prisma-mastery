import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;


const paginationSorting = async () => {
    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    });



    // cursor based pagination
    const cursorData = await prisma.post.findMany({

        skip: 5,
        take: 2,
        cursor: {
            id: 15
        }
    });


    const sortedData = await prisma.post.findMany({
        orderBy: {
            // title: 'asc'
            id: 'desc'
        },
        skip: 5,
        take: 3,
        where: {
            title: "This is title 6"
        }
    })

    console.log({ sortedData });
};

paginationSorting();