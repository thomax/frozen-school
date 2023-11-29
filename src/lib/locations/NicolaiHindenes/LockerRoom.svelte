<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import LockerRoom from '../../../assets/NicolaiHindenes/LockerRoom.png'
  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${LockerRoom}')  no-repeat center center fixed`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>Locker Room</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>
