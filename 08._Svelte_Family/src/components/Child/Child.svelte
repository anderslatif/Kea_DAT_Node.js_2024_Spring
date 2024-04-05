<script>
    export let child;
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
    <h2>{child.name}</h2>
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