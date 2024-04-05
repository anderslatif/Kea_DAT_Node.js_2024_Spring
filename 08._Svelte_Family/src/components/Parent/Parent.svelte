<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";
</script>

<h1>{parentName}</h1>

{#each myChildren as child}
    <Child child={child} />
{/each}
