import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {

    // AND filtering
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    }

                },
                {
                    published: true
                }
            ]
        }
    });


    // OR filtering
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    }

                },
                {
                    published: true
                }
            ]
        }
    });


    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "5"
                    }
                }
            ]
        }
    });



    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: "u"
            }
        }
    })

    console.log(startsWith);
}




filtering()