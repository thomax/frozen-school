<script>
  import {onMount, onDestroy} from 'svelte'
  import {changeFreezeRate} from '../../../dataStores/stateStore.js'
  import classroomImageSrc from '../../../../assets/thomax/frozenClassroom.png'

  import Minigame from './Minigame.svelte'
  export let location

  let thisElement
  let gameCanvas

  onMount(() => {
    thisElement.style.background = `linear-gradient(to bottom, rgba(18,42, 66, .85), rgba(18,42, 66, .85)), url('${classroomImageSrc}') no-repeat center center`
    thisElement.style.backgroundSize = 'cover'

    // Move canvas to inside the game container
    gameCanvas = document.getElementsByTagName('canvas')[0]
    thisElement.appendChild(gameCanvas)
    gameCanvas.focus()
    changeFreezeRate(0.5)
  })
  onDestroy(() => {
    // Get rid of canvas
    thisElement.removeChild(gameCanvas)
    changeFreezeRate(1)
  })
</script>

<div bind:this={thisElement} class="snowballArenaContainer">
  <h1>{location.title}</h1>
  <Minigame />
</div>

<style>
  .snowballArenaContainer {
    opacity: 1;
  }
</style>
