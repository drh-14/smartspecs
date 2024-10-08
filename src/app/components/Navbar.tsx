'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, SignIn, UserButton, UserProfile } from '@clerk/nextjs';

const Navbar: FC = () => {
	const router = useRouter();

	return (
		<nav className="bg-gray-800 text-white p-6 text-lg">
			<ul className="flex justify-between items-center">
				<SignedOut>
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
				</SignedOut>
				<SignedIn>
					<div className='ml-auto'>
						<UserButton/>
					</div>
				</SignedIn>
			</ul>
		</nav>
	);
};

export default Navbar;
