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

    import mapOfSchool from "../../../assets/HenningT/MapHallway.png"
    import PressE from "../../../assets/HenningT/PressEButton.png"
    import Player from "../../../assets/HenningT/Player.png"
    import whereToNavigate from "../../../assets/HenningT/WhereToNavigate.png"

    import Classroom3 from '../../locations/jonabarona/Classroom3.svelte'

    import {goToLocation} from '../../dataStores/locationStore.js'

    let roomNavigationTo = ['norcl', 'so', 'lr', 'toi', 'bi', 'lf', 'caf', 'ki']

    let startPosition = {x: 50, y: 55} //in %
    let position = {x: convertPercentToPixels(startPosition.x, windowWidth), y: convertPercentToPixels(startPosition.y, convertPixelsToPercent(69+10, windowHeight))}//x:850, y:390
    let rotation = 90  
    let radian = null

    let positionWhereToNavigate = {x: 0, y: 0}
    let navigationEnterRoomText = "404"
    let WhereToNavigateIMGRotation = 0
    let changeInHeight = 10

    let startSpeed = 0
    let speed = startSpeed
    let maxSpeed = 5

    let rotationSpeed = 2.5
    let maxRotationSpeed = 4

    let pressE = false


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
      move()
    }

    function handleKeyUp(event) {
      if (event.key === 'a') {
        rotationSpeed = 1
        isADown = false;
        speed = startSpeed
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
    }
  });
  

  

  function move(){
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
    if (position.x > convertPercentToPixels(26.5, windowWidth) && position.x < convertPercentToPixels(30.5, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(25.3, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 0
      pressE = true
      changeInHeight = 10
      if (isEDown){
        goToLocation(roomNavigationTo[0])
      }
    }
    else if (position.x > convertPercentToPixels(40.4, windowWidth) && position.x < convertPercentToPixels(44.4, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(39.4, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 0
      pressE = true
      changeInHeight = 10
      
      
      if (isEDown){
        goToLocation(roomNavigationTo[1])
      }
    }
    else if (position.x > convertPercentToPixels(53.8, windowWidth) && position.x < convertPercentToPixels(57.8, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(53, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 0
      pressE = true
      changeInHeight = 10
      if (isEDown){
        goToLocation(roomNavigationTo[2])
      }
    }
    else if (position.x > convertPercentToPixels(67.5, windowWidth) && position.x < convertPercentToPixels(71.5, windowWidth) && position.y > convertPercentToPixels(28, windowHeight) && position.y < convertPercentToPixels(34, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(67.3, windowWidth), y:convertPercentToPixels(10, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 0
      pressE = true
      changeInHeight = 10
      if (isEDown){
        goToLocation(roomNavigationTo[3])
      }
    }
//rooms down
    else if (position.x > convertPercentToPixels(26.5, windowWidth) && position.x < convertPercentToPixels(30.5, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(25.3, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 180
      changeInHeight = -10
      positionWhereToNavigate.y = positionWhereToNavigate.y - 10
      pressE = true
      if (isEDown){
        goToLocation(roomNavigationTo[4])
      }
    }
    else if (position.x > convertPercentToPixels(40.4, windowWidth) && position.x < convertPercentToPixels(44.4, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(39.4, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 180
      changeInHeight = -10
      positionWhereToNavigate.y = positionWhereToNavigate.y - 10
      pressE = true
      if (isEDown){
        goToLocation(roomNavigationTo[5])
      }
    }
    else if (position.x > convertPercentToPixels(53.8, windowWidth) && position.x < convertPercentToPixels(57.8, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(53, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 180
      changeInHeight = -10
      positionWhereToNavigate.y = positionWhereToNavigate.y - 10
      pressE = true
      if (isEDown){
        goToLocation(roomNavigationTo[6])
      }
    }
    else if (position.x > convertPercentToPixels(67.5, windowWidth) && position.x < convertPercentToPixels(71.5, windowWidth) && position.y > convertPercentToPixels(56.5, windowHeight) && position.y > convertPercentToPixels(50.5, windowHeight)){
      positionWhereToNavigate = {x: convertPercentToPixels(67.3, windowWidth), y: convertPercentToPixels(66, windowHeight)}
      navigationEnterRoomText = "Classroom 3"
      WhereToNavigateIMGRotation = 180
      changeInHeight = -10
      positionWhereToNavigate.y = positionWhereToNavigate.y - 10
      pressE = true
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

  </script>

<style>
  .hallWayDiv{
    position: relative;
    width: 100%;/*1040*/
    height: 100%;
    left: 0%;
    top: 0%;
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
    background-color: blue;
    z-index: 2;
  }
  #PlayerSkin{
    left: -20px;
    top: -20px;
    width: 50px;
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

    width: 100px;
    transform: rotate(deg);
  }
  #WhereToNavigateTekst{
    position: fixed;
    
    color: black;
    font-size: 14px;
    z-index: 3;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }


</style>

<div class="hallWayDiv" style="">
    <img id="background" src="{mapOfSchool}" alt="">
    <div id="Player" style="left: {position.x}px; top: {position.y}px; transform: rotate({rotation}deg);">
      <img id="PlayerSkin" src="{Player}" alt="">
      <div id="wallDectector" ></div>
      {#if pressE}
        <div id="pressEIcon">
          <img id="PressEIMG" src="{PressE}" alt="Press E" style="rotate: {-rotation-90}deg;">
          
        </div>
      {/if}
    </div>
    {#if pressE}
    <div>
      <img id="WhereToNavigateIMG" src="{whereToNavigate}" alt="" style="left: {positionWhereToNavigate.x}px; top: {positionWhereToNavigate.y}px; transform: rotate({WhereToNavigateIMGRotation}deg);">
      <p id="WhereToNavigateTekst" style="left: {positionWhereToNavigate.x + 10}px; top: {positionWhereToNavigate.y}px">Enter <br> {navigationEnterRoomText}</p>
    </div>
    
    
    {/if}
</div>