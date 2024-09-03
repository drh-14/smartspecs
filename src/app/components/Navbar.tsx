'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: FC = () => {
	const router = useRouter();

	return (
		<nav className="bg-gray-800 text-white p-6 text-lg">
			<ul className="flex justify-between items-center">
				<li>
					<a
						onClick={() => router.push('/')}
						className="hover:underline cursor-pointer"
					>
						SmartSpecs
					</a>
				</li>
				<div className="flex space-x-6">
					<li>
						<a
							onClick={() => router.push('/signin')}
							className="hover:underline cursor-pointer"
						>
							Login
						</a>
					</li>
					<li>
						<a
							onClick={() => router.push('/signup')}
							className="hover:underline cursor-pointer"
						>
							Register
						</a>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
