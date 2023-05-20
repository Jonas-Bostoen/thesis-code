<script lang="ts">
  import GoogleMap from '../GoogleMap/GoogleMap.svelte';
  import ModalBox from '../ModalBox/ModalBox.svelte';
  import './detail.scss';
  export let data: any;
  export let nextParking: any;
  export let previousParking: any;
  export let refreshData: any;
  export let modalState: boolean = false;
</script>

<section class="detail">
  <header>
    <h2>{data.fields.name}</h2>
    <div class="buttons">
      <button on:click={previousParking}><i class="fas fa-arrow-alt-circle-left"></i></button>
      <button on:click={nextParking}><i class="fas fa-arrow-alt-circle-right"></i></button>
      <button on:click={() => modalState = true}><i class="fas fa-info-circle"></i></button>
    </div>
    <div class="details">
      <span>laatst geupdate: {new Date(data.fields.lastupdate).toLocaleTimeString()}</span>
      <button on:click={refreshData}><i class="fas fa-arrows-rotate"></i></button>
    </div>
  </header>
  
  <!-- <GoogleMap
    bind:name = {data.fields.name}
    /> -->

    <ModalBox
      title={data.fields.name}
      data={data}
      nextParking={nextParking}
      previousParking={previousParking}
      bind:modalState
    />
</section>