<script lang="ts">
  import './list.scss';
  export let data: any;
  export let currentParking: number;

  const setParking = (index: number) => {
    currentParking = index;
  };

</script>

<aside>
  <ul class="list">
    <!-- Loop over the data -->
    {#each data as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => setParking(data.indexOf(item))}>
        <div>{item.fields.name}</div>
        <div>{item.fields.availablecapacity} / {item.fields.totalcapacity}</div>
      </li>
    {/each}
  </ul>
</aside>