import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import dynamic from 'next/dynamic';
// import AboutContent from '@/components/AboutContent/AboutContent';

const AboutContent = dynamic(() => import('@/components/AboutContent/AboutContent'));

export default function About() {
	return (
		<>
			<Navbar />
			<main>
				<AboutContent />
				test
			</main>
		</>
	);
}
