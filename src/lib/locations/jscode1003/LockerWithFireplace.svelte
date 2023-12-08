<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import DefaultLocker from '../../../assets/jscode1003/LockerWithoutFire.png'
  import Button from '../../../assets/jscode1003/button.jpg'
  let mainElement
  import {removeFromInventory} from '../../dataStores/characterStore.js'
  let message = ""
  
  onMount(() => {
    mainElement.style.background = `url('${DefaultLocker}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
  
  function handleClickFire(){
    const paperOK = removeFromInventory("paper")
    if (paperOK) {
      goToLocation('fire')
      message = "Papir ble tent på"
      return
    }
    
    message = "Det var synd, du trenger papir for å tenne i peisen"
  }
</script>



<div class="img" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>Locker with fireplace</div>

  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
  <img class=button src="{Button}" alt="fireplace" on:click={handleClickFire}>
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
</style>

