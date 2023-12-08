<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import table from  '../../../assets/aakonHO-IN/tabel.jpg'
  import insideBook from '../../../assets/aakonHO-IN/NewInsideBook.png'
  import { addToInventory } from '../../dataStores/characterStore.js';
  let mainElement
  let message = ""
  
  onMount(() => {
    mainElement.style.background = `url('${table}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    
  }) 
  
  function handlePaper(){
    addToInventory('Paper')
    message='Paper is added to inventory'
  }
</script>
<div class = "tabel" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <button on:click={() => goToLocation('bi')}>Go back</button>
  <div><h2>{message}</h2></div>
  <h1>Klikk på boken og få tak i papir</h1>
  
  
  
  <img src ={insideBook} on:click={handlePaper} class="insideBook" alt="insideBook">
  
  
  
</div>

<style>
  .tabel{
    height: 1000px;
    width: auto;
  }
  div{
    position: relative;
    width: 80vh;
    height: 80vw;
  }
  .insideBook{
    position: absolute; 
    width:500px;
    height: 300px;
    top: 25%; 
    left: 30%;
  }
  h1{
    color: red;
    background-color: black;
  }
  h2{
    color: red;
  }
</style>