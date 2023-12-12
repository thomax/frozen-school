<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import classroomImageSrc from '../../../assets/thomax/frozenClassroom.webp'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${classroomImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="fc307" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div class="readableText">
    What a chilly place to start this journey. You see a door which opens into a dark hallway.
  </div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

<style>
  .fc307 {
    height: 100%;
    width: 100%;
  }
</style>
