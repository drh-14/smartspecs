'use client';

import Link from 'next/link';

const About = () => {
	return (
		<main className="flex flex-col items-center text-center p-30 mt-60">
		<h1 className="text-5xl font-bold mb-4">SmartSpecs</h1>
		<p className="text-xl mb-8">Build Your PC</p>
		<Link href="/build" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
			Start Building
		</Link>
		</main>
	);
};

export default About;
