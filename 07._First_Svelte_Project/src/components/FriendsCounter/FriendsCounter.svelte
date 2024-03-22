<script>
    export let friendsCounter = 0;

    function alienateFriend() {
        friendsCounter--;
    }
</script>

<div>Friends Counter:</div>
<h1>{friendsCounter}</h1>
<button on:click={alienateFriend}>Alienate A Friend</button>