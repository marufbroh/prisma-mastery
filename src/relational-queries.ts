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
    // const result2 = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     },
    //     include: {
    //         post: true
    //     }
    // });



    // relational filters
    const publishedPostUsers = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    published: true
                }
            }
        }
    })

    console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();