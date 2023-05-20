// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
	// Fetch data from external API
	const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time');
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}
