<script>
    export let parentName;
    export let myChildren;

    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";
        
    import Child from "../Child/Child.svelte";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName} veeeeery much.`);
    }

    let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

    function handleTakeFromTreasureChest() {
        treasureChest.pop();
        treasureChest = treasureChest;
    }

    function wipeFridge() {
        fridgeMessages.set([{ message: "Svelte Family Fridge" }]);
    }

    // assignment give parents the power to wipe the fridge
</script>

<h1>{parentName}</h1>

<button on:click={wipeFridge}>Wipe the fridge</button>

<p>
{#each treasureChest as treasure}
    {treasure + " "}
{/each}
</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} 
        onTakeFromTreasureChest={handleTakeFromTreasureChest} />
{/each}
