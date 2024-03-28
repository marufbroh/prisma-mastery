import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {

    const createUser = prisma.user.create({
        data: {
            username: "moye",
            email: "moye@moye.com"
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 2
        },
        data: {
            age: 30
        }
    });

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);


    console.log(userData, updateData);


};

batchTransaction();