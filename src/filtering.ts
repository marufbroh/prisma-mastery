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

    console.log(orFiltering);
}




filtering()