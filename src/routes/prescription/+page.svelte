<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const sourceData = [
		{
			position: 1,
			drug: 'Paracetamol',
			dosage: 100,
			frequency: 'every sunday',
			action: 'dry swallow'
		},
		{
			position: 2,
			drug: 'Ritalin',
			dosage: 40,
			frequency: '2 per week',
			action: 'drink with water'
		}
	];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Drug', 'Dosage (mg)', 'Frequency', 'Action'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['drug', 'dosage', 'frequency', 'action']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['position', 'drug', 'dosage', 'frequency', 'action'])
		// Optional: A list of footer labels.
	};

	function mySelectionHandler(e: CustomEvent<string[]>): void {
		console.log(e.detail);
	}
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

	<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />
	<textarea class="textarea" rows="4" placeholder="Add any additional notes here..." />
	<button class="btn btn-sm variant-filled-secondary" type="submit">Create Prescription</button>
</form>
