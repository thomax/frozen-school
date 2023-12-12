<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import DefaultLocker from '../../../assets/jscode1003/LockerWithoutFire.png'
  import Button from '../../../assets/jscode1003/button.jpg'
  let mainElement
  import {removeFromInventory} from '../../dataStores/characterStore.js'
  import {changeTemperature} from '../../dataStores/characterStore.js'
  let message = ""
  import Nisse from './Nisse.svelte'

  
  onMount(() => {
    mainElement.style.background = `url('${DefaultLocker}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
  
  function handleClickFire(){
    const paperOK = removeFromInventory("paper")
    if (paperOK) {
      goToLocation('fire')
      message = "Paper was set on fire"
      changeTemperature(30);
      return
    }
    
    message = "You need paper to light the fireplace. Clue: Library"
  }


</script>



<div class="img" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
  <img class=button src="{Button}" alt="fireplace" on:click={handleClickFire}>
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
    background-color: #7dffffef;
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

