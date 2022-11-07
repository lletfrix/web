import { error } from "@sveltejs/kit"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const load = async ({ params }) => {
    try {
        return {
            users: (await prisma.user.findMany()).map(({ name, email }) => ({ name, email }))
        }

    } catch (error) {
        throw error(404, 'Something went wrong')
    }
    
}

export const actions = {
    default: async (event) => {
        try {
            const data = await event.request.formData();
            const user = await prisma.user.create({
                data: {
                    name: data.get('name'),
                    email: data.get('email'),
                }
            });
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    },

}