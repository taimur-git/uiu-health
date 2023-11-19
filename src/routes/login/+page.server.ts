import { auth } from "$lib/server/lucia";
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, '/home')
    }  
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get("username");
		const password = form.get("password");
		// check for empty values
		if (typeof username !== "string" || typeof password !== "string")
			return fail(400);
		try {
			const key = await auth.useKey("username", username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
            //userauthentication
            await prisma.user.update({
                where: { id: key.userId },
                data: { 
                    lastLogin: new Date(),
                    online: true,
                 }
                 
            })
            //userinfo
            let user = await prisma.user.findUnique({
                where: { id: key.userId },

            });
            console.log(user?.name + " logged in at " + user?.lastLogin);
		} catch {
			// invalid username/password
            return fail(400, { message: 'Could not login user' });
		}
	}
};