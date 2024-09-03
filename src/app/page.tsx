'use client'

import Navbar from './components/Navbar';
import About from './components/landing/About';
import {db} from '../../firebase';
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';


export default function Home() {
  const currentUser = useUser();

	useEffect(() => {
		createUserColletion();
	}, [currentUser]);

	const createUserColletion = async () => {

		if (currentUser && currentUser.user) {
			console.log(currentUser)
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
