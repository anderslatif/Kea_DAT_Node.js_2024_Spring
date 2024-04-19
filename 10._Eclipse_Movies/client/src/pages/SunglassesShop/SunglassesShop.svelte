<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-navigator";
    import { BASE_URL } from "../../stores/generalStore.js";
    import { fetchGet, fetchPost } from "../../util/api.js";
    
    onMount(async () => {
        const customer = {
            name: "Gleb"
        };
        await fetchPost($BASE_URL+"/api/customers", customer);

        const result = await fetchGet($BASE_URL+"/api/customers");
        console.log(result);
    });

    function completeCheckout() {
        navigate('/');
    }


</script>

<h1>Sunglasses Shop</h1>

<button on:click={completeCheckout}>Checkout</button>