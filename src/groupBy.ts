import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {

    const group = await prisma.post.groupBy({
        by: 'published',
        _count: {
            published: true
        },
        having: {
            authorId: {
                _sum: {
                    gt: 2 // dekhanor jonno use kora hoise
                }
            }
        }

    });

    console.log(group);
};

groupBy();