<script>
// @ts-nocheck

  let windowHeight = null
  let windowWidth = null
      
  function getViewportSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    //console.log('Bredde: ' + windowWidth + 'px, Høyde: ' + windowHeight + 'px');
  }
 

  // Oppdaterer størrelsen hvis vinduet endres
  window.onresize = getViewportSize;


  // Henter størrelsen når siden lastes
  getViewportSize();

  function convertPercentToPixels(percent, screenSize) {
    //console.log(((percent / 100) * screenSize)/10, position.x)
    return (percent / 100) * screenSize;
  }

  function convertPixelsToPercent(pixels, screenSize) {
    return (pixels / 100) * screenSize; // Regner ut høyden av objektet basert på prosentandelen
  }

  function scalePixels(inputPixels) {
      // Define the maximum width of the screen for full scale
      const maxWidth = windowWidth; // Example: 1920 pixels for a full HD screen

      // Calculate the scale factor based on the current screen width
      const scaleFactor = windowWidth / maxWidth;

      // Scale the input pixels according to the screen width
      const scaledPixels = inputPixels * scaleFactor;

      return scaledPixels;
  }

    import mapOfSchool from "../../../assets/HenningT/MapHallway.png"
    import PressE from "../../../assets/HenningT/PressEButton.png"
    import Player from "../../../assets/HenningT/Player.png"
    import whereToNavigate from "../../../assets/HenningT/WhereToNavigate.png"

    import {goToLocation} from '../../dataStores/locationStore.js'

    let roomNavigationTo = ['norcl', 'so', 'lr', 'toi', 'bi', 'lf', 'sbf', 'ki']

    let startPosition = {x: 50, y: 55} //in %
    let position = {x: convertPercentToPixels(startPosition.x, windowWidth), y: convertPercentToPixels(startPosition.y, convertPixelsToPercent(69+10, windowHeight))}//x:850, y:390
    let rotation = 90  
    let radian = null

    let positionWhereToNavigate = {x: 0, y: 0}
    let navigationEnterRoomText = "404"
    let WhereToNavigateIMGRotation = 0
    let howColdInRoom = -3

    let startSpeed = 0
    let speed = startSpeed
    let maxSpeed = 5

    let rotationSpeed = 2.5
    let maxRotationSpeed = 4

    let pressE = false

    let gameRunning = false


    function checkRotation(){
      if (rotation > 360){
        rotation = 1
      }
      else if (rotation < 0){
        rotation = 359
      }
      checkCollision()
    }

    function movePlayer(speed){
      //console.log(speed)

      if (isDDown == true){
          rotation = rotation + rotateUp()
          
        }
      else if (isADown == true){
        rotation = rotation -  rotateUp()
        
      }
      radian = (rotation * Math.PI) / 180;
      let velocityX = speed * (Math.cos(radian))
      let velocityY = speed * (Math.sin(radian))

      //console.log("X", velocityX, "  Y", velocityY)
      //console.log(rotation)
      position.x = position.x +(velocityX)
      position.y = position.y + (velocityY)
      return position
    }

    function speedUp(){
      if (speed < maxSpeed){
        speed = speed + 0.5
      }
      return speed
    }

    function rotateUp(){
      if (rotationSpeed < maxRotationSpeed){
        rotationSpeed = rotationSpeed * 1.3
      }
      return rotationSpeed
    }

    import { onMount } from 'svelte';

    let isWDown = false;
    let isADown = false;
    let isSDown = false;
    let isDDown = false;
    let isEDown = false;

    onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    function handleKeyDown(event) {
      if (event.key === 'w') {
        isWDown = true;
      }
      else if (event.key === 's'){
        isSDown = true;
      }
      else if (event.key === 'a'){
        rotation = rotation - rotateUp()
        isADown = true;
      }
      else if (event.key === 'd'){
        rotation = rotation + rotateUp()
        isDDown = true;
      }
      else if (event.key === 'e'){
        isEDown = true;
      }
      else if (event.key === 'ArrowLeft') {
        rotation = rotation - rotateUp()
        isADown = true;
      } else if (event.key === 'ArrowRight') {
        rotation = rotation + rotateUp()
        isDDown = true;
      } else if (event.key === 'ArrowUp') {
        isWDown = true;
      } else if (event.key === 'ArrowDown') {
        isSDown = true;
      }
      move()
    }

    function handleKeyUp(event) {
      if (event.key === 'a') {
        rotationSpeed = 1
        isADown = false;
      } 
      else if (event.key === 'd') {
        rotationSpeed = 1
        isDDown = false;
      }

      else if (event.key === 's') {
        isSDown = false;
        speed = startSpeed
      }  
      
      else if (event.key === 'w') {
        isWDown = false;
        speed = startSpeed
      } 
      else if (event.key === 'e') {
        isEDown = false;
      } 
      else if (event.key === 'ArrowLeft') {
        rotationSpeed = 1
        isADown = false;
      } else if (event.key === 'ArrowRight') {
        rotationSpeed = 1
        isDDown = false;
      } else if (event.key === 'ArrowUp') {
        isWDown = false;
        speed = startSpeed
      } else if (event.key === 'ArrowDown') {
        isEDown = false;
      }
    }
  });
  

  

  function move(){
    gameRunning = true
    if (isWDown == true){
      speed = speedUp()
      position = movePlayer(speed)
    }
    if (isSDown == true){
      speed = speedUp()
      position = movePlayer(-(speed/2))
    }
    checkRotation()
    
  }

  function checkCollisionDores(){
    if (position.x > convertPercentToPixels(25.5, windowWidth) && position.x < convertPercentToPixels(31.5, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(25.3, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 0
      pressE = true
      howColdInRoom = - 4.5
      if (isEDown){
        goToLocation(roomNavigationTo[0])
      }
    }
    else if (position.x > convertPercentToPixels(39.4, windowWidth) && position.x < convertPercentToPixels(45.4, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(39.4, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "The Strange office"
      WhereToNavigateIMGRotation = 0
      pressE = true      
      howColdInRoom = - 2
      if (isEDown){
        goToLocation(roomNavigationTo[1])
      }
    }
    else if (position.x > convertPercentToPixels(52.8, windowWidth) && position.x < convertPercentToPixels(58.8, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(53, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "The Locker Room"
      WhereToNavigateIMGRotation = 0
      pressE = true
      howColdInRoom = -5
      if (isEDown){
        goToLocation(roomNavigationTo[2])
      }
    }
    else if (position.x > convertPercentToPixels(66.5, windowWidth) && position.x < convertPercentToPixels(72.5, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(67.3, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "The Toilets"
      WhereToNavigateIMGRotation = 0
      pressE = true
      howColdInRoom = -3
      if (isEDown){
        goToLocation(roomNavigationTo[3])
      }
    }
//rooms down
    else if (position.x > convertPercentToPixels(25.5, windowWidth) && position.x < convertPercentToPixels(31.5, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(25.3, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "The Library"
      WhereToNavigateIMGRotation = 180
      pressE = true
      howColdInRoom = -1
      if (isEDown){
        goToLocation(roomNavigationTo[4])
      }
    }
    else if (position.x > convertPercentToPixels(39.4, windowWidth) && position.x < convertPercentToPixels(45.4, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(39.4, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "The fireplace room"
      WhereToNavigateIMGRotation = 180
      pressE = true
      howColdInRoom = 2
      if (isEDown){
        goToLocation(roomNavigationTo[5])
      }
    }
    else if (position.x > convertPercentToPixels(52.8, windowWidth) && position.x < convertPercentToPixels(58.8, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(53, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "Snowball Fight"
      WhereToNavigateIMGRotation = 180
      pressE = true
      howColdInRoom = -5
      if (isEDown){
        goToLocation(roomNavigationTo[6])
      }
    }
    else if (position.x > convertPercentToPixels(66.5, windowWidth) && position.x < convertPercentToPixels(72.5, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(67.3, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "The Kitchen"
      WhereToNavigateIMGRotation = 180
      pressE = true
      howColdInRoom = 0
      if (isEDown){
        goToLocation(roomNavigationTo[7])
      }
    }
    else{
      pressE = false
    }
  }

  function checkCollision() {
    //left wall
    if (position.x < convertPercentToPixels(20, windowWidth)){
      if (rotation > 90 && rotation < 270){
        position.x = convertPercentToPixels(20, windowWidth)
      }
      else if (isSDown == true){
        position.x = convertPercentToPixels(20, windowWidth)
      }
    }

    //right wall
    if (position.x > convertPercentToPixels(77, windowWidth)){
      //et sted fra 0-90. et sted fra 270-0
      if (rotation < 90 && rotation >= 0 || rotation > 270 && rotation >= 0){
        position.x = convertPercentToPixels(77, windowWidth)
      }
      else if (isSDown == true){
        position.x = convertPercentToPixels(77, windowWidth)
      }
    }

    //Topp 
    if (position.y < convertPercentToPixels(30, windowHeight)){
      if (rotation > 180 && rotation <= 359){
        position.y = convertPercentToPixels(30, windowHeight)
      }
      else if (isSDown == true){
        position.y = convertPercentToPixels(30, windowHeight)
      }
    }

    //Buttom
    if (position.y > convertPercentToPixels(59, windowHeight)){
      if (rotation < 180 && rotation >= 0){
        position.y = convertPercentToPixels(59, windowHeight)
      }
      else if (isSDown == true){
        position.y = convertPercentToPixels(59, windowHeight)
      }
    }
    checkCollisionDores()
  }

  console.log(scalePixels(120))

  const zoomLevel = window.innerWidth / document.documentElement.clientWidth;
  console.log(zoomLevel)
  </script>

<style>
  .hallWayDiv{
    position: relative;
    width: 100%;/*1040*/
    height: 100%;
    z-index: 1;
    background-color: black;

  }

  #background{
    position: fixed;
    left: 20%;
    top: 10%;
    height: 69%;
    width: 60%;
    background-color: black;
  }

  #Player{
    position: fixed;
    width: 20px;
    height: 20px;
    z-index: 2;
  }
  #PlayerSkin{
    left: -20px;
    top: -20px;
    position: fixed;
    transform: rotate(-90deg);
  }
  #wallDectector{
    position: absolute;
    left: 20px;
    top: 7.5px;
    width: 20px;
    height: 5px;
    background-color: red;
    transform: rotate(90);
    visibility: hidden;
  }

  #PressEIMG{
    position: relative;
    width: 50px;
    left: -80px;
    top: 50px;
    transform: rotate(90deg)
  }

  #WhereToNavigateIMG{
    position: fixed;

    transform: rotate(deg);
    opacity: 0.7;
  }

  #WhereToNavigateTekst{
    position: fixed;

    color: black;
    font-size: 12px;
    z-index: 3;
    font-family:'Silkscreen';
  }

  #movmentTextDiv{
    position: fixed;
    top: 30%;
    left: 45%;
    width: 200px;
    height: 100px;
    background-color: gray;
    opacity: 0.9;
    z-index: 3;
    border-radius: 10px;
  }

  #moveText{
    font-size: 20px;
    font-family:'Silkscreen';
  }


</style>

<div class="hallWayDiv" style="">
    <img id="background" src="{mapOfSchool}" alt="">
    <div id="Player" style="left: {position.x}px; top: {position.y}px; transform: rotate({rotation}deg);">
      <img id="PlayerSkin" src="{Player}" alt="" style="width: {scalePixels(50)}px;">
      <div id="wallDectector" ></div>
      {#if pressE}
        <div id="pressEIcon">
          <img id="PressEIMG" src="{PressE}" alt="Press E" style="rotate: {-rotation-90}deg;">
          
        </div>
      {/if}
    </div>
    {#if pressE}
      <div>
        <img id="WhereToNavigateIMG" src="{whereToNavigate}" alt="" style="width: {scalePixels(120)}px; left: {positionWhereToNavigate.x}px; top: {positionWhereToNavigate.y}px; transform: rotate({WhereToNavigateIMGRotation}deg);">
          <p id="WhereToNavigateTekst" style="left: {positionWhereToNavigate.x+10}px; top: {positionWhereToNavigate.y + 10}px">Enter <br> {navigationEnterRoomText}<br>{howColdInRoom}℃</p>
      </div>
    {/if}

    {#if !gameRunning}
      <div id="movmentTextDiv">
        <p id="moveText">Use (W,S,A,D) or the arrowkeys to move</p>
      </div>
    {/if}
   
</div>