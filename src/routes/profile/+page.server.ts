import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, "/login");
    console.log(session.user);
    const userInfo = await prisma.user.findUnique({
        where: { id: session.user.userId },
    })
    const appointments = await prisma.appointment.findMany({
        where: { userId: session.user.userId },
    })
    console.log(appointments);
    return {
        userInfo: userInfo,
        appointments: appointments,
    };
};