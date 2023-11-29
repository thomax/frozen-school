<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {onMount} from 'svelte'
  import toiletsImageSrc from '../../../assets/teodororjansen/toilets.png'
  import door1Handle from '../../../assets/teodororjansen/doorHandle.png'
  const door1Url = 'https://vika.vgs.no/'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${toiletsImageSrc}')  no-repeat center center fixed`
    mainElement.style.backgroundSize = 'cover'
  })
</script>
<div class="toilets" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>Toilets</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

<a href="{door1Url}" target="_blank">
  <img src="{door1Handle}" alt="doorHandle" width="" height="" style="position: absolute; top: 50%; left: 50%;">
</a>

<style>
  .toilets{
    color: red;
  }
</style>