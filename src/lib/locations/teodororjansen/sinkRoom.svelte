<script>
    import {onMount} from 'svelte'
    import {goToLocation} from '../../dataStores/locationStore.js'
    export let location
    import SinkRoom from  '../../../assets/teodororjansen/SinkRoom.png'
    let mainElement
    
    
    onMount(() => {
        mainElement.style.background = `url('${SinkRoom}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    }) 
</script>

<div class="SinkRoomBackground">
    <div class = "SinkRoom" bind:this={mainElement}>
        <h1>{location.title}</h1>
        <button on:click={() => goToLocation('toi')}>Go back</button>
    </div>
</div>

<style>
    .SinkRoom{
        height: 90vh;
        width: 40vw;
        margin: auto;
        color: red;
    }
    .SinkRoomBackground{
        background-color: black;
    }
</style>  