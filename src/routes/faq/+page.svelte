<script lang='ts'>
    import type { PageData } from './$types';
    export let data: PageData;
    let faq = data.faq;
</script>

{#each faq as qa}
    <h2>{qa.question}</h2>
    <p>{qa.answer}</p>
{/each}