<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {onMount} from 'svelte'
  import toiletsImageSrc from '../../../assets/teodororjansen/toilets.png'
  import door1Handle from '../../../assets/teodororjansen/doorHandle.png'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${toiletsImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>
<div class="toiletBackground"> 
  <div class="toilets" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <div>Toilets</div>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
      <img src="{door1Handle}" alt="doorHandle" width="4.5%" height="" style="position: absolute; top: 49.2%; left: 26%;" on:click= {() => goToLocation('toi1')} >
  </div>
</div>


<style>
  .toilets{
    color: red;
    height: 80vh;
    width: 55vw;
    position: relative;
    margin: auto;
  }

  .toiletBackground{
    background-color: black;
  }
</style>