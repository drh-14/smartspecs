'use client';

import { FC } from 'react';

const About: FC = () => {
	return (
		<main className="flex flex-col items-center text-center p-30 mt-60">
		<h1 className="text-5xl font-bold mb-4">SmartSpecs</h1>
		<p className="text-xl mb-8">Build Your PC</p>
		<button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
			Get Started
		</button>
		</main>
	);
};

export default About;
