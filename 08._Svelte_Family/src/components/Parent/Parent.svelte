<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName} veeeeery much.`);
    }

    let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

    function handleTakeFromTreasureChest(childName) {
        treasureChest.pop();
        treasureChest = treasureChest;
    }

    // assignment give parents the power to wipe the fridge
</script>

<h1>{parentName}</h1>

<p>
{#each treasureChest as treasure}
    {treasure + " "}
{/each}
</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} 
        onTakeFromTreasureChest={handleTakeFromTreasureChest} />
{/each}
