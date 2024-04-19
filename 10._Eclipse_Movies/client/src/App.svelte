<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Movies from "./pages/Movies/Movies.svelte";
    import Home from "./pages/Home/Home.svelte";
    import SunglassesShop from "./pages/SunglassesShop/SunglassesShop.svelte";
</script>


<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Eclipse Movies</Link>
        <Link to='/shop'>Sunglasses Shop</Link>
    </nav>

    <div>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/movies" component={Movies} />
        <Route path="/shop"><SunglassesShop /></Route>
    </div>

</Router>