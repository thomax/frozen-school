<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import classroomImageSrc from '../../../assets/thomax/frozenClassroom.webp'
  import Nisse from '../jscode1003/Nisse.svelte'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${classroomImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="fc307" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <Nisse
    message="You fell asleep during class, and suddenly wake up. It's night and it's freezing! You see a door which opens into a dark hallway"
  ></Nisse>
  <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
</div>

<style>
  .fc307 {
    height: 100%;
    width: 100%;
  }
</style>
