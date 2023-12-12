<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {onMount} from 'svelte'
  import toiletsImageSrc from '../../../assets/teodororjansen/toilets.png'
  import door1Handle from '../../../assets/teodororjansen/doorHandle.png'
<<<<<<< Updated upstream
  import sink from '../../../assets/teodororjansen/sink.png'
=======
  import sinkRoom from '../../../assets/teodororjansen/sinkRoom.png'
>>>>>>> Stashed changes
  export let location
  let mainElement
  
  onMount(() => {
    mainElement.style.background = `url('${toiletsImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>
<<<<<<< Updated upstream

<div class="toilets" bind:this={mainElement}>
  <div class="readableText">Toilets</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
  <img src="{door1Handle}" alt="doorHandle" width="4.5%" height="" style="position: absolute; top: 48.9%; left: 26.2%;" on:click= {() => goToLocation('toi1')} >
  <img src="{sink}" alt="sink" width="10%" height="15%" style="position: absolute; top: 58.8%; left: 0.08%;" on:click= {() => goToLocation('sink')} >
=======
<div class="toiletBackground"> 
  <div class="toilets" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <div>Toilets</div>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
      <img src="{door1Handle}" alt="doorHandle" width="4.5%" height="" style="position: absolute; top: 49.2%; left: 26%;" on:click= {() => goToLocation('toi1')} >
      <img src="{sinkRoom}" alt="sink" width="10%" height="10" style="position: absolute; top: 49.2%; left: 50%;" on:click= {() => goToLocation('sink')} >
  </div>
>>>>>>> Stashed changes
</div>



<style>
  .toilets{
    color: red;
    height: 80vh;
    width: 55vw;
    position: relative;
    margin: auto;
  }
</style>