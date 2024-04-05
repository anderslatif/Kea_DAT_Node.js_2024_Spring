<script>
    export let child;
    export let onShowLove;
    export let onTakeFromTreasureChest;
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
    <h2>{child.name}</h2>

    <button on:click={() => onShowLove(child.name)}>Show Love 💚</button>
    <br>
    <button on:click={() => onTakeFromTreasureChest(child.name)}>Take from treasure chest</button>
</div>


<style>
    .is-girl {
        background-color: blue;
    }

    .is-boy {
        background-color: pink;
    }

    .not-a-sheep {
        border: 0.5em solid goldenrod;
    }

    .grey-sheep {
        border: 0.5em solid grey;
    }

    .black-sheep {
        border: 0.5em solid darkkhaki;
    }
</style>