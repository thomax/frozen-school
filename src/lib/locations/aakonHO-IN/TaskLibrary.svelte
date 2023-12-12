<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import table from  '../../../assets/aakonHO-IN/tabel.jpg'
  import insideBook from '../../../assets/aakonHO-IN/insideBook.png'
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
  <div class="readableText"><h1>{location.title}</h1></div>
  <div class="readableText"><p>click the book to obtain paper</p></div>
  <button on:click={() => goToLocation('bi')}>Go back</button>
  <div class="message"><h2>{message}</h2></div>
  
  
  
  
  <img src ={insideBook} on:click={handlePaper} class="insideBook" alt="insideBook">
  
  
  
</div>

<style>
  .tabel{
    height: 1000px;
    width: auto;
  }

  .insideBook{
    position: absolute; 
    width:500px;
    height: 300px;
    top: 35%; 
    left: 45%;
  }
  h1{
    color:black;
  }
  
.message{
  color:red;
}

  
</style>