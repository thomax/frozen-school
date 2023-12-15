<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {onMount} from 'svelte'
  import toiletsImageSrc from '../../../assets/teodororjansen/toilets.png'
  import door1Handle from '../../../assets/teodororjansen/doorHandle.png'
  import sink from '../../../assets/teodororjansen/Sink.png'
  import Nisse from '../jscode1003/Nisse.svelte'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${toiletsImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="toilets" bind:this={mainElement}>
  <div class="readableText">Toilets</div>
  <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
  <img src="{door1Handle}" alt="doorHandle" width="4.5%" height="" style="position: absolute; top: 49%; left: 26.2%;" on:click= {() => goToLocation('toi1')} >
  <img src="{sink}" alt="sink" width="10%" height="15%" style="position: absolute; top: 58.8%; left: 0.08%;" on:click= {() => goToLocation('sink')} >
</div>

<style>
  .toilets {
    color: red;
    height: 80vh;
    width: 55vw;
    position: relative;
    margin: auto;
  }
</style>
