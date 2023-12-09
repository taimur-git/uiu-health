import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";
export const DELETE = async ({ request, locals , params }) => {
    const id = parseInt(params.id);
    try {
        const appointment = await prisma.appointment.delete({
            where: {
                id: id
            }

        });
        console.log(appointment + "deleted");

    } catch (err) {
        console.error(err);
        return json({ message: 'Cannot delete appointment' }, { status: 500 });
    }
    return json({ message: 'something' }, { status: 201 });
}
//update
/*
const res = await fetch('/api/appointment/' + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({start: start})
			});

*/
//i only have to change the start time for a given appointment
// i get the id from the params
// i get the start time from the body
// i update the appointment with the id with the start time
export const PUT = async ({ request, locals , params }) => {
    const id = parseInt(params.id);
    const form = await request.json();
    const start = form.start;
    console.log(
        "Here's the information I got: " + id + " " + start + "\n"

    );
    try {
        const appointment = await prisma.appointment.update({
            where: {
                id: id
            },
            data: {
                time: start
            }

        });
        console.log(appointment + "updated");

    } catch (err) {
        console.error(err);
        return json({ message: 'Cannot update appointment' }, { status: 500 });
    }
    return json({ message: 'something' }, { status: 201 });
}