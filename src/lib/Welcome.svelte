<script>
  import {setGameStatus} from './dataStores/stateStore.js'

  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }
</script>

<div id="welcome-component">
  <h1>Welcome to the Frozen School!</h1>
  <p>
    You find yourself locked in a freezing school. Your mission is to explore the rooms, complete
    tasks, and survive the cold. Can you survive the cold?
  </p>
  <button on:click={() => handleStatusChange('gameRunning')}>Start the game!</button>
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  body,
  html {
    height: 100%;
    margin: 0;
  }

  .gameStateBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    animation: fadeIn 1s ease-out;
  }

  h1,
  p,
  button {
    font-family: 'Silkscreen', monospace; /* Use the Silkscreen font */
  }

  h1 {
    font-size: 3em; /* Increased header size */
    color: #2254ca;
  }

  p {
    font-size: 1.2em;
    color: #000000;
    text-align: center;
    margin: 20px;
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 10px;
  }

  button {
    font-size: 1.5em;
    padding: 15px 30px;
    background: linear-gradient(45deg, #2d39c0, #55a5d7);
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    animation: bounce 1s infinite;
    transition: transform 0.3s;
    font-smooth: never;
  }

  button:hover {
    transform: scale(1.1);
  }
</style>
