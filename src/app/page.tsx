'use client'

import Navbar from './components/Navbar';
import About from './components/landing/About';
import { db } from '../../firebase';
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';


export default function Home() {
	const currentUser = useUser();

	useEffect(() => {
		createUserCollection();
	}, [currentUser]);

	const createUserCollection = async () => {
		if (currentUser && currentUser.user) {
			await setDoc(doc(db, "users", currentUser.user.id), {
				computers: [],
			});
		}
	}

	return (
		<>
			<Navbar />
			<About />
		</>
	);
}
