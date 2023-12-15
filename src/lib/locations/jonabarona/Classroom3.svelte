<script>
  // My imported variables
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {changeTemperature} from '../../dataStores/characterStore'
  import classroom3 from '../../../assets/Jonatan/classroom.jpg'
  import openLocker from '../../../assets/Jonatan/openLocker.png'
  import closedLocker from '../../../assets/Jonatan/closedLocker.png'
  import {changeFreezeRate} from '../../dataStores/stateStore'
  import postitLapp1 from '../../../assets/Jonatan/postit_lapp1.png'
  import kakao from '../../../assets/Jonatan/kakao_1.png'
  import kodelås from '../../../assets/Jonatan/kodelås.png'

  export let location

// My variables
  let randomPosY;
  let randomPosX = Math.floor(Math.random() * 900) + 100; // Generate a random 3-didgit X coordinate
  let randomCode = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit code
  let inputCode = "";
  let mainElement;
  let position = {x: 960, y: 650};
  let lockerOpenVisible = false;
  let lockerVisible = false;
  let postitVisible = false;
  let roomVisible = true;
  let roomPostitButtonVisible = true;
  let postitBackToRoom = false;

  // Classroom image is the standard background. The freezerate is different here
  onMount(() => {
    mainElement.style.background = `url('${classroom3}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    changeFreezeRate(1.5)
    console.log("NOW SHOWING: Classroom3")
  })

  // Runs the random Y coordinate for the postit
  onMount(() => {
    generateRandomNumber();
  });

  // Makes a random number between x1 and x2
  function generateRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomFraction = Math.random();
    randomPosY = Math.round(240 + randomFraction * (600 - 240));
    console.log("POSTIT POSITION: X:",randomPosX, "Y:",randomPosY); //Check if postit position
  }

  //The room becomes the background
  function handleRoom() {
    //back to class
    mainElement.style.background = `url('${classroom3}') no-repeat center center`;
    mainElement.style.backgroundSize = 'cover';
    postitVisible = false;
    lockerVisible = false;
    roomVisible = true;
    roomPostitButtonVisible = true;
    postitBackToRoom = false;
    console.log("NOW SHOWING: Classroom3")
  }

  //Postit becomes the background
  function handlePostit() {
    postitVisible = true
    lockerVisible = false
    postitBackToRoom = true

    if (lockerVisible == false) {
      // in to poster
      mainElement.style.background = `url('${postitLapp1}') no-repeat center center` // Added this line
      mainElement.style.backgroundSize = 'cover'
      position = {x: 600, y: 800}
      roomVisible = false
      console.log("NOW SHOWING: Postit")
    }
  }

  // locker becomes the background
  function handleLocker() {
    lockerVisible = true
    if (lockerVisible) {
      mainElement.style.background = `url('${closedLocker}') no-repeat center center` // Added this line
      mainElement.style.backgroundSize = 'cover'
      position = {x: 600, y: 800}
      roomPostitButtonVisible = false
      window.scrollTo({ top: 0, behavior: 'auto' });
      console.log("NOW SHOWING: Open Locker")
      
      
    } else {
      mainElement.style.background = `url('${classroom3}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      roomPostitButtonVisible = true
      position = {x: 960, y: 650}
    }
  }

  //Checks if code worked
  function handleCheckCode() {
    if (inputCode === randomCode.toString()) {
      mainElement.style.background = `url('${openLocker}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      lockerOpenVisible = true
      console.log("NOW SHOWING: Open Locker")
    } else {
      console.log("ENTERED: Incorrect code");

    }
  }

  //Adds x number to the temperature
  function handleAddTemp() {
    changeTemperature(20)
    lockerOpenVisible = false; // Set showButton to false when the button is clicked
    console.log("PICKED UP: Warm drink")
  }

  // Gives a tip
  function handleTip() {
    alert("Click around to see if there are something useful.")
    changeTemperature(-5)
    console.log("CHECKED: Tips")
  }
</script>

<!--Classroom-->
<div class="classroom" bind:this={mainElement}>
  <!--When you go to postit-->
  {#if postitVisible}
    <div class="postitCode">
      <p class="readableText">Maybe this number can come in handy..?</p>
      <h1 class="randomCode">{randomCode}</h1>
      {#if postitBackToRoom == true}
        <button class="goBackBtn" on:click={handleRoom}>Go Back</button>
      {/if}
    </div>
  {/if}

  <!--When you go to locker-->
  {#if lockerVisible}
    <div class="locker">
    <p class="readableText">Ugh.. this locker won't open..</p>
      <div class="codeInputBox">
        <label for="codeInput"><img class="codePic" src={kodelås}></label>
        <input type="text" id="codeInput" bind:value={inputCode} on:input={handleCheckCode} maxlength="4"/>
      </div>
      <button class="goBackBtn" on:click={handleRoom}>Go Back</button>
    </div>
  {/if}

  <!--What you see first/When you press goBackBtn-->
  {#if roomVisible}
  <h1>{location.title}</h1>
  <p class="readableText">
    brrrr.. this is a cold place.. I better be quick to se if there are something useful in her..?
  </p>
    <button on:click={handleTip}>See a tip? Cost: 5seconds)</button>
    <button class="hallwayBtn" on:click={() => goToLocation('hall')}>Exit to hallway</button>
    <div class="postitCode">
      <!--When you see postit in room-->
      {#if roomPostitButtonVisible}
        <button title="Whats that?" on:click={handlePostit} class="postitBtn" style={`top: ${randomPosY}px; left: ${randomPosX}px;`}>
          <img src={postitLapp1} class="postitFar" />
        </button>
      {/if}
      <button class="lockerBtn" on:click={handleLocker}>Go to</button>
    </div>
  {/if}

  <!--When the locker is open-->
  {#if lockerOpenVisible}
    <img title="A warm drink that might help" on:click={handleAddTemp} id="warmDrink" src="{kakao}" alt="">
  {/if}
  
</div>

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

  .codeInput {
    visibility: visible;
  }

  .postitFar {
    width: 20px;
    background: none;
  }

  .postitBtn {
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: transparent;
    border: none;
  }

  #postitBack {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    background-color: transparent;
    z-index: 0;
  }

  #warmDrink {
    width:100px;
    background-color: transparent;
    top: 300px;
    position: absolute;
  }

  .lockerBtn {
    position: relative;
    left: 320px;
    top:180px; 
  }

  .goBackBtn{
    position: absolute;
    top: 600px;
    left: 570px
  }

  .hallwayBtn{
    position: relative;
    top: 410px;
    right:100px;
  }

  .randomCode{
    margin-top: 200px;
    font-size: 100px;
  }

  .codeInputBox {
    position: absolute;
    margin-top: 200px;
    margin-left:370px;
  }

  .codePic {
    width: 100px;
  }
</style>
