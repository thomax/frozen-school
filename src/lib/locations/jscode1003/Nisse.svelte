<!-- Brukes slik: <Nisse message= {message}></Nisse> -->
<script>
    import Nisse from '../../../assets/jscode1003/nisse.png'
    export let message = ""
</script>


{#if message!==""} 
  <p class= "message">{message}</p>
  {/if}
  <img class="nisse" src="{Nisse}" alt="nisse">



<style>
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