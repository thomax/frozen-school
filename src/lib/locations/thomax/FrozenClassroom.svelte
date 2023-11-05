<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import classroomImageSrc from '../../../assets/thomax/frozenClassroom.webp'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.backgroundImage = `url('${classroomImageSrc}')`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div id="location" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>
    What a chilly place to start this journey. You see a door which appears to exit to a dark
    hallway.
  </div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

<style>
  #location {
    background-color: none;
  }
</style>
