import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // create single data into db
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title 5",
    //         content: "This is content...5",
    //         authorName: "Tamim Iqbal Maruf",
    //     }
    // });


    // create many
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "This is title 6",
                content: "This is content...5",
                authorName: "Tamim Iqfdfbal Maruf",
            },
            {
                title: "This is dfdsf 5",
                content: "This is contdfdsfent...5",
                authorName: "Tamim Iqbafdsdfffl Maruf",
            },
            {
                title: "This is tfffitle 5",
                content: "This is contfffent...5",
                authorName: "Tamim Iqbfffal Maruf",
            },
        ]
    })


    console.log({ createMany });

}

main();