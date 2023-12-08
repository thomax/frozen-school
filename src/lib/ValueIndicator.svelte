<script>
  export let value
  export let options

  const {color, label} = options
</script>

<div>
  <div class="valueBar" style="width: {value}%; background-color: {color}">
    {label}
  </div>
</div>

<style>
  .valueBar {
    height: 20px; /* Adjust the height as needed */
    transition: width 0.5s ease;
    color: black;
    overflow: hidden;
    font-size: 0.9rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
  }
</style>
