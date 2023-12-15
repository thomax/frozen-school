<script>
    import {onMount} from 'svelte'
    import {goToLocation} from '../../dataStores/locationStore.js'
    export let location
    import LockerWithFire from '../../../assets/jscode1003/WithFire.png'
    let mainElement
    import Nisse from './Nisse.svelte';
    let message = "30+ in temprature! Paper was set on fire and removed from your inventory."
  
  
    onMount(() => {
      mainElement.style.background = `url('${LockerWithFire}')  no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
    })

  </script>

  <div class="img" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
    <Nisse message= {message}></Nisse>
  </div>
  
  <style>
    .img {
      height: 100vh;
      width: 80vw;
      position: relative;
      margin: auto;
    }

  </style>
  
  