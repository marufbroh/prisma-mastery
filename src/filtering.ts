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
    });



    const endsWith = await prisma.user.findMany({
        where: {
            email: {
                endsWith: ".com"
            }
        }
    });


    const equals = await prisma.user.findMany({
        where: {
            email: {
                equals: "user1@ph.com"
            }
        }
    });


    const userNameArray = ['user1', 'user2', 'user5'];

    const userNamesByArray = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray
            }
        }
    });



    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })

    console.dir(inDepthData, { depth: Infinity });
}




filtering()