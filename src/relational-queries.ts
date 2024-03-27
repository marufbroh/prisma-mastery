import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const relationalQueries = async () => {

    // fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // }).post()

    // populate api
    const result2 = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include: {
            post: true
        }
    });

    console.log(result2);
};

relationalQueries();