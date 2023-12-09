<script lang="ts">
	import PrescriptionTable from '$lib/components/PrescriptionTable.svelte';
import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { on } from 'events';

let arr: any[] = [{
	drug: 'Paracetamol',
	dosage: '500mg',
	frequency: '4 times a day'
}];


</script>


<form>
	<span>Student ID</span>
	<input
		type="text"
		class="select variant-form-material"
		name="studentID"
		placeholder="Enter Student ID"
	/>
	<input type="hidden" name="age" />
	<input type="hidden" name="prescriptionDate" />

	<!-- PrescriptionTable /-->

		
	<textarea class="textarea" rows="4" placeholder="Add any additional notes here..." />
	<button class="btn btn-sm variant-filled-secondary" type="submit">Create Prescription</button>
</form>