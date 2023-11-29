<script>
import {onMount} from 'svelte'
import {goToLocation} from '../../dataStores/locationStore.js'
import Classroom3 from '../../../assets/Jonatan/classroom.jpg'
import OpenLocker from '../../../assets/Jonatan/openLocker.png'
import ClosedLocker from '../../../assets/Jonatan/closedLocker.png'
import {changeFreezeRate} from '../../dataStores/stateStore'

export let location 

let newBtnName = 'Go to locker'
let mainElement

  onMount(() => {
    mainElement.style.background = `url('${Classroom3}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    changeFreezeRate(1.5)
  })

let lockerVisible = false;

function handleLocker(){

  newBtnName = "Go Back"
  lockerVisible = !lockerVisible;
    if (lockerVisible) {
      mainElement.style.background = `url('${ClosedLocker}') no-repeat center center`; // Added this line
      mainElement.style.backgroundSize = 'cover';
    } else {
      mainElement.style.background = `url('${Classroom3}') no-repeat center center`;
      mainElement.style.backgroundSize = 'cover';
    }
}
</script>

<main>
  <h1>{location.title}</h1>
  <div class="classroom" bind:this={mainElement}>
    {#if lockerVisible}
      <div class="locker"></div>
    {/if}
    <button class="lockerBtn" on:click={handleLocker}>{newBtnName}</button>
  </div>
</main>

<style>
    .locker {
        visibility: visible;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
    }

    .classroom {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
    }

    .lockerBtn {
      margin-left: 780px;
      margin-top: 300px;
    }

    .newButton {
    margin-top: 20px; /* Adjust the margin as needed */
    position: relative;
  }
</style>