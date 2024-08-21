'use client'

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: FC = () => {
	const router = useRouter();

	return (
		<nav>
		<ul>
			<li>
			<a onClick={() => router.push('/')}>SmartSpecs</a>
			</li>
			<li>
			<a onClick={() => router.push('/login')}>Login</a>
			</li>
			<li>
			<a onClick={() => router.push('/register')}>Register</a>
			</li>
		</ul>
		<style jsx>{`
			nav {
			background: #333;
			color: #fff;
			padding: 1rem;
			}
			ul {
			list-style: none;
			display: flex;
			gap: 1rem;
			}
			li {
			margin: 0;
			}
			a {
			color: #fff;
			text-decoration: none;
			cursor: pointer;
			}
			a:hover {
			text-decoration: underline;
			}
		`}</style>
		</nav>
	);
};

export default Navbar;
