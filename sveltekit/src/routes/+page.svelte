<script >
// @ts-nocheck

	import Detail from '../components/Detail/Detail.svelte';
	import List from '../components/List/List.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
  import Welcome from '../components/Welcome/Welcome.svelte';
	import './styles.scss';

	export let data;
	let currentParking = 0;

	 async function refreshData ()  {
    const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time');
    const newData = await res.json();
		data.props = {data: newData}
  };

	function nextParking () {
		if (currentParking >= data.props.data.records.length - 1) {
			currentParking = 0;
      return;
    }
    currentParking ++;
	}

	function previousParking() {
		if (currentParking <= 0) {
			currentParking = data.props.data.records.length - 1;
			return;
		}
		currentParking --;
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar/>

<main>
	<Welcome/>

	<List 
		data={data.props.data.records}
		bind:currentParking
	/>

	<Detail 
		data={data.props.data.records[currentParking]}
		previousParking={previousParking}
		nextParking={nextParking}
		refreshData={refreshData}
	/>
</main>
