<script>
// @ts-nocheck

    import mapOfSchool from "../../../assets/HenningT/MapHallway.png"
    import PressE from "../../../assets/HenningT/PressEButton.png"
    import Player from "../../../assets/HenningT/Player.png"

    import Classroom3 from '../../locations/jonabarona/Classroom3.svelte'

    import {goToLocation} from '../../dataStores/locationStore.js'

    let position = {x: 850, y: 390}
    let wallDectectorPosition = {x:70,y: 42.5}
    let rotation = 0  
    let radian = null

    let positionWall1 = {x: 100, y: 100}

    let startSpeed = 0
    let speed = startSpeed
    let maxSpeed = 10

    let rotationSpeed = 2.5
    let maxRotationSpeed = 4

    let pressE = false

    let windowHeight = null
    let windowWidth = null

    function getViewportSize() {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      console.log('Bredde: ' + windowWidth + 'px, Høyde: ' + windowHeight + 'px');
    }


    // Henter størrelsen når siden lastes
    getViewportSize();

    // Oppdaterer størrelsen hvis vinduet endres
    window.onresize = getViewportSize;

    function convertPercentToPixels(percent, screenSize) {
      //console.log(((percent / 100) * screenSize)/10, position.x)
      return (percent / 100) * screenSize;
    }

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
    if (position.x > convertPercentToPixels(26.5, windowWidth) && position.x < convertPercentToPixels(30.5, windowWidth) && position.y < convertPercentToPixels(30, windowHeight) && position.y > convertPercentToPixels(34, windowHeight)){
      pressE = true
      console.log("knapp")
      if (isEDown){
        goToLocation('norcl')
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
        speed = -(speed/1.5)
      }
      else if (isSDown == true){
        position.x = convertPercentToPixels(20, windowWidth)
      }
    }

    //right wall
    if (position.x > convertPercentToPixels(78, windowWidth)){
      //et sted fra 0-90. et sted fra 270-0
      if (rotation < 90 && rotation >= 0 || rotation > 270 && rotation >= 0){
        speed = -(speed/1.5)
      }
      else if (isSDown == true){
        position.x = convertPercentToPixels(78, windowWidth)
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
    position: fixed;
    width: 1040px;
    height: 80%;
    left: 20%;
    top: 0%;
    background-color: blanchedalmond;
  }

  #background{
    position: fixed;
    left: 20%;
    top: 10%;
    width: 60%;
    background-color: black;
  }

  #wall1{
    position: fixed;
    left: 31%;
    top: 32.4%;
    width: 0.5%;
    height: 27%;
    background-color: aqua;
  }
  #wall2{
    position: fixed;
    left: 73%;
    top: 32.4%;
    width: 0.5%;
    height: 27%;
    background-color: aqua;
  }

  #wall3{
    position: fixed;
    left: 31%;
    top: 32.4%;
    width: 730px;
    height: 10px;
    background-color: aqua;
  }
  #wall4{
    position: fixed;
    left: 31%;
    top: 59%;
    width: 730px;
    height: 10px;
    background-color: aqua;
  }

  #Player{
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: blue;
  }
  #PlayerSkin{
    left: -20px;
    top: -20px;
    width: 50px;
    position: fixed;
  }
  #wallDectector{
    position: absolute;
    left: 20px;
    top: 7.5px;
    width: 20px;
    height: 5px;
    background-color: red;
    transform: rotate(90);
  }

  #door1{
    position: fixed;
    width: 4%;
    height: 0.5%;
    left: 26.5%;
    top: 30%;
    background-color: blueviolet;
  }

  #doorStepsDoor1{
    position: fixed;
    width: 4%;
    height: 5%;
    left: 26.5%;
    top: 30.5%;
    background-color: darkblue;
  }

  #PressEIMG{
    position: relative;
    width: 50px;
    left: 50px;
    top: 50px;
    transform: rotate(90deg)
  }

</style>

<div class="hallWayDiv" style="">
    <img id="background" src="{mapOfSchool}" alt="">
    <div id="wall1" style="left: {positionWall1.x}%"></div>
    <!--<div id="wall2"></div>-->

    <!--<div id="wall3"></div>
    <div id="wall4"></div>-->
    <div id="Player" style="left: {position.x}px; top: {position.y}px; transform: rotate({rotation}deg);">
      <img id="PlayerSkin" src="{Player}" alt="">
      <div id="wallDectector" ></div>
      {#if pressE}
        <div id="pressEIcon">
          <img id="PressEIMG" src="{PressE}" alt="Press E" style="rotate: {-rotation-90}deg;">
        </div>
      {/if}
    </div>
    

    <div id="door1"></div>
    <div id="doorStepsDoor1"></div>

</div>