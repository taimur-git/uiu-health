<script lang="ts">
	import { enhance } from '$app/forms';
	import Calendar from '$lib/components/Calendar.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let appointments = data.appointments;
	let serviceNames = {
		Ck: 'Checkup',
		Rx: 'Prescription',
		Bp: 'Blood Pressure',
		Wt: 'Weight Measure',
		Fw: 'Follow Up',
		C: 'Consultation',
		E: 'Emergency',
		S: 'Seasonal (asthma)',
		Tp: 'Temperature'
	};

	let classEvents = appointments.map((appointment) => {
		// Convert date and time to ISO 8601 format
		let startTime = new Date(`${appointment.date} ${appointment.time}`).toISOString();

		// Calculate the end time by adding 30 minutes to the start time
		let endTime = new Date(new Date(startTime).getTime() + 30 * 60000).toISOString(); // 30 minutes in milliseconds
		let serviceName = serviceNames[appointment.service];
		let studentName = appointment.user.name;
		let studentID = appointment.user.studentId;
		let title = studentID + ' ' + studentName + ' - ' + serviceName || appointment.service;
		return {
			id: appointment.id,
			title: title,
			start: startTime,
			end: endTime
		};
	});
</script>

<h1 class="text-2xl font-bold mb-2.5">Appointments</h1>

<Calendar classevents={classEvents} />
