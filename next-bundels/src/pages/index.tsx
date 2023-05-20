import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import Welcome from '@/components/Welcome/Welcome';
import List from '@/components/List/List';
import Detail from '@/components/Detail/Detail';

// const Welcome = dynamic(() => import("@/components/Welcome/Welcome"));
// const Detail = dynamic(() => import("@/components/Detail/Detail"));
// const List = dynamic(() => import("@/components/List/List"));

function Home(props: { data: any }) {
	const [currentParking, setCurrentParking] = useState(0);
	const [data, setData] = useState(props.data.records);

	const refresh = useCallback(async () => {
		const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time');
		const data = await res.json();

		setData(data.records);
	}, []);

	const nextParking = useCallback(() => {
		if (currentParking >= data.length - 1) {
			setCurrentParking(0);
			return;
		}
		setCurrentParking(currentParking + 1);
	}, [currentParking, data.length]);

	const previousParking = useCallback(() => {
		if (currentParking == 0) {
			setCurrentParking(data.length - 1);
			return;
		}
		setCurrentParking(currentParking - 1);
	}, [currentParking, data.length]);

	return (
		<>
			<Navbar />

			<main>
				<Welcome />

				<List data={data} setCurrentParking={setCurrentParking} />
				<Detail data={data[currentParking]} nextParking={nextParking} previousParking={previousParking} refresh={refresh} />
			</main>
		</>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time');
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}

export default Home;
