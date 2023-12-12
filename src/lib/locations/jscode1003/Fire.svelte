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
  
    .button {
      width: 150px;
      position: absolute; 
      top: 65%; 
      left: 45%;
    }

    .nisse {
    width: 90px;
    position: absolute; 
    top: 60%; 
    left: 0.001%;
    }

    .message {
    color: black;
    background-color: #ff7d7df0;
    border: 3px solid black;
    padding: 15px;
    width: 150px;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: absolute; 
    top: 55%; 
    left: 9%;
  }
  </style>
  
  