<script lang="ts">
	import { enhance } from "$app/forms";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Profile</h1>
<p>Student ID: {data.userInfo.studentId}</p>
<p>Username: {data.userInfo.username}</p>
<p>Email: {data.userInfo.email}</p>
<p>Phone: {data.userInfo.phone}</p>

<a class="btn btn-sm variant-filled-secondary" href='profile/edit'>Edit</a>