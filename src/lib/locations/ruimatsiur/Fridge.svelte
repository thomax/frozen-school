
<script>
    import {goToLocation} from '../../dataStores/locationStore.js'
    import {onMount} from 'svelte'
    import insideFridge from '../../../assets/ruimatsiur/insideFridge.png';
    import Apple from '../../../assets/ruimatsiur/apple.webp';
    import banana from '../../../assets/ruimatsiur/banana.png';

    export let location
    let mainElement

    onMount(() => {
        mainElement.style.background = `url('${insideFridge}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    })

</script>



<div class = "Fridge" bind:this={mainElement}>
    <h1>{location.title}</h1>

    <img src="{Apple}" class="Apple" on:click={() => goToLocation('ap')}>  
    <img src="{banana}" class="banana" on:click={() => goToLocation('ba')}>  


    <button on:click={() => goToLocation('ki')}>Exit fridge</button>  
</div>


<style>
.Fridge{
    width: 1200px;
    height: 500px;
       
}

.Apple{
    width: 100px;
    height: 100px;
    top: 10px;
    left: 100px;
}
.banana{
    width: 100px;
    height: 100px;
}
</style>