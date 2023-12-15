<script>
    import { goToLocation } from '../../dataStores/locationStore.js';
    import background from '../../../assets/philiptorrissen/background.jpg';
    export let word; // Pass the correct word as a prop
  
    // Styling for the game over screen
    const gameOverStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'black', // Change background color to black
      color: 'white',
      textAlign: 'center',
    };
  
    const headerStyle = {
      fontSize: '4em', // Make the header big
      color: 'red', // Make the header red
      margin: '0',
      animation: 'shake 0.5s', // Add a simple animation
    };
  
    // Animation keyframes
    const keyframes = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25%, 75% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
      }
    `;
  
    // Create a style element to apply keyframes
    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
  </script>
  
  <style>
    p {
      margin: 10px 0;
      background-color: rgba(255, 255, 255, 1);
      color: black;
      padding: 5px;
      border-radius: 5px;
    }
  
    button {
      cursor: pointer;
      padding: 5px 10px;
      margin-top: 10px;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid white;
      border-radius: 5px;
      color: black;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  </style>
  
  <div style={gameOverStyle}>
    <h1 style={headerStyle}>Game Over</h1>
    <p>Sorry, you ran out of attempts. The correct word was "{word}".</p>
    <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
  </div>
  