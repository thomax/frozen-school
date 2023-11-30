<script>

//TODO
//Endre på hvor knappens posisjon etter å ha klikket på den
//Legge til en kode for å åpne skapet
//Legge til et sted hvor koden er

import {onMount} from 'svelte'
import {goToLocation} from '../../dataStores/locationStore.js'
import Classroom3 from '../../../assets/Jonatan/classroom.jpg'
import OpenLocker from '../../../assets/Jonatan/openLocker.png'
import ClosedLocker from '../../../assets/Jonatan/closedLocker.png'
import {changeFreezeRate} from '../../dataStores/stateStore'
import PostitLapp from '../../../assets/Jonatan/postit_lapp.jpg'

export let location 

let newBtnName = 'Go to locker'
let mainElement

let position = {x:960, y:650}

onMount(() => {
  mainElement.style.background = `url('${Classroom3}')  no-repeat center center`
  mainElement.style.backgroundSize = 'cover'
  changeFreezeRate(1.5)
})

let lockerVisible = false;

function handleLocker(){

  
  lockerVisible = !lockerVisible;
    if (lockerVisible) {
      mainElement.style.background = `url('${ClosedLocker}') no-repeat center center`; // Added this line
      mainElement.style.backgroundSize = 'cover';
      newBtnName = "Go back"
      position = {x:600, y:800}
    } else {
      mainElement.style.background = `url('${Classroom3}') no-repeat center center`;
      mainElement.style.backgroundSize = 'cover';
      newBtnName = "Go to locker"
      position = {x:960, y:650}
    }
}
</script>

<main>
  <h1>{location.title}</h1>
  <div class="classroom" bind:this={mainElement}>
    <div class="postitCode">
      <h2>Kode</h2>
      <button><img src={PostitLapp} class="postitFar"></button>
    </div>
      <div class="codeInput">
        <label>Kodelås</label><input> 
      </div>
    {#if lockerVisible}
      <div class="locker"></div>
    {/if}
    <button class="lockerBtn" on:click={handleLocker} style="left: {position.x}px; top: {position.y}px;"><b>{newBtnName}</b></button>
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

    .lockerBtn{
      position: absolute;
    }

    button {
      width: 80px;
      height: 50px;
      border-color: rgb(255, 255, 255);
      background-color: aqua;
      color: rgb(255, 255, 255);
      font-size: medium;
      border: solid 4px;
      border-radius: 15px;
      transition: background-color 0.5s ease;
      
    }

    button:hover {
      background-color: rgb(45, 176, 176);
    }

    .codeInput {
      visibility: hidden;
    }

    .postitFar {
      size: 20px;
    }

    
</style>