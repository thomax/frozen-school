<script>
    import {goToLocation} from '../../dataStores/locationStore.js'
    import {onMount} from 'svelte'
    import insideFridge from '../../../assets/ruimatsiur/insideFridge.png';
    import Apple from '../../../assets/ruimatsiur/apple.webp';
    import frozenWall from '../../../assets/ruimatsiur/frozenWall.jpg';
    import { changeHealth } from '../../dataStores/characterStore.js'
    

    export let location
    let mainElement

    onMount(() => {
        mainElement.style.background = `url('${frozenWall}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    })

    function eatApple(){
        changeHealth(3)
    }
    
</script>
<div class = "apple" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <div>apple</div>
  
      <img src="{Apple}" class="apple" on:click={() => eatApple()}>  
    
    <button on:click={() => goToLocation('fi')}>Exit to hallway</button>
  
  </div>
