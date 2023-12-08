<script>
  export let value
  export let options

  const {color, label} = options
</script>

<div>
  <div class="valueBar characterSheetLabel" style="width: {value}%; background-color: {color}">
    {label}
  </div>
</div>

<style>
  .valueBar {
    height: 20px; /* Adjust the height as needed */
    transition: width 0.5s ease;
    color: black;
    overflow: hidden;
  }
</style>
