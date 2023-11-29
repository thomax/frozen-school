
<script>
    import {goToLocation} from '../../dataStores/locationStore.js'
    import {onMount} from 'svelte'
    import insideFridge from '../../../assets/ruimatsiur/insideFridge.png';

    export let location
    let mainElement

    onMount(() => {
        mainElement.style.background = `url('${insideFridge}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    })

</script>



<div class = "Fridge" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <button on:click={() => goToLocation('ki')}>Exit fridge</button>  
</div>


<style>
.fridge{
    width: 1000px;
    height: 1000px;

}
</style>