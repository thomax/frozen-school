<script>
  let score = 0

  function moreScore() {
    score += 1
  }
</script>

<div id="game-component">
  <h1>Game</h1>
  <div>Score: {score} <button on:click={moreScore}>Playing tha game!</button></div>
</div>
