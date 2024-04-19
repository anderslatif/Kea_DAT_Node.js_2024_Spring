<script>
    import { navigate } from "svelte-navigator";

    function completeCheckout() {
        navigate('/');
    }
</script>

<h1>Sunglasses Shop</h1>

<button on:click={completeCheckout}>Checkout</button>