<script>
    import {onMount} from 'svelte'
    import {goToLocation} from '../../dataStores/locationStore.js'
    export let location
    import DefaultLocker from '../../../assets/jscode1003/LockerWithoutFire.png'
    import LockerWithFire from '../../../assets/jscode1003/WithFire.png'
    import Button from '../../../assets/jscode1003/button.jpg'
    let mainElement
  
  
    onMount(() => {
      mainElement.style.background = `url('${LockerWithFire}')  no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
    })
  </script>
  <div class="img" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <div>Locker with fireplace</div>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
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
  
  