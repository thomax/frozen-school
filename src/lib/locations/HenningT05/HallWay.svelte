<script>
    import mapOfSchool from "../../../assets/HenningT/hallwaymapv1.png"

    let position = {x: 50, y: 50}
    let rotation = 0  

    let startSpeed = 0.1
    let speed = startSpeed
    let maxSpeed = 1

    let rotationSpeed = 1.4
    let maxRotationSpeed = 2 

    function movePlayer(speed){
      //console.log(speed)

      if (isDDown == true){
          rotation = rotation + rotateUp()
        }
      else if (isADown == true){
        rotation = rotation -  rotateUp()
      }
      let radian = (rotation * Math.PI) / 180;
      let velocityX = speed * (Math.cos(radian))
      let velocityY = speed * (Math.sin(radian))

      //console.log("X", velocityX, "  Y", velocityY)
      console.log(rotation)
      position.x = position.x +(velocityX)
      position.y = position.y + (velocityY)
      
      return position
    }

    function speedUp(){
      if (speed < maxSpeed){
        speed = speed + 0.2
      }
      return speed
    }

    function rotateUp(){
      if (rotationSpeed < maxRotationSpeed){
        rotationSpeed = rotationSpeed * 1.05
      }
      return rotationSpeed
    }

    import { onMount } from 'svelte';

    let isWDown = false;
    let isADown = false;
    let isSDown = false;
    let isDDown = false;

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
        isADown = true;
      }
      else if (event.key === 'd'){
        isDDown = true;
      }
      move()
    }

    function handleKeyUp(event) {
      if (event.key === 'a') {
        rotationSpeed = 1
        isADown = false;
        speed = startSpeed
      } 

      else if (event.key === 's') {
        isSDown = false;
        speed = startSpeed
      } 

      else if (event.key === 'd') {
        rotationSpeed = 1
        isDDown = false;
      }
      
      else if (event.key === 'w') {
        isWDown = false;
        speed = startSpeed
      } 
    }
  });


  function move(){
    console.log(position)
    if (isWDown == true){
      speed = speedUp()
      position = movePlayer(speed)
    }
    if (isSDown == true){
      speed = speedUp()
      position = movePlayer(-(speed/2))
    }
    if (isADown == true){
      rotation = rotation - rotateUp()
    }
    if (isDDown == true){
      rotation = rotation + rotateUp()
    }
  }



  function checkCollision() {
  let wall1 = document.getElementById('wall1').getBoundingClientRect();
  let wallDectector = document.getElementById('wallDectector').getBoundingClientRect();

  
}
  </script>

<style>
  .hallWayDiv{
    position: relative; 
    left: 10%;
    width: 60%;
    height: 600px;
    background-color: black;
  }

  #background{
    position: fixed;
    left: 20%;
    width: 60%;
  }

  #wall1{
    position: fixed;
    left: 31%;
    top: 32.4%;
    width: 10px;
    height: 230px;
    background-color: aqua;
  }
  #wall2{
    position: fixed;
    left: 73%;
    top: 32.4%;
    width: 10px;
    height: 230px;
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
  #wallDectector{
    position: absolute;
    left: 20px;
    top: 7.5px;
    width: 20px;
    height: 5px;
    background-color: red;
    transform: rotate(90);
  }

</style>

<div class="hallWayDiv" style="background">
    <img id="background" src="{mapOfSchool}" alt="">
    <div id="wall1"></div>
    <div id="wall2"></div>

    <div id="wall3"></div>
    <div id="wall4"></div>
    <div id="Player" style="left: {position.x}%; top: {position.y}%; transform: rotate({rotation}deg);">
      <div id="wallDectector" ></div>
    </div>

</div>