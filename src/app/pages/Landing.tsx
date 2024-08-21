'use client';

import { FC } from 'react';

const Landing: FC = () => {
	return (
		<main style={{ 
		display: 'flex', 
		flexDirection: 'column',
		justifyContent: 'center', 
		alignItems: 'center', 
		height: '100vh', 
		textAlign: 'center' 
		}}>
		<h1>SmartSpecs</h1>
		<p>This is the about page content.</p>
		</main>
	);
};

export default Landing;
