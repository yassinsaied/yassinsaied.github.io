import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SEO from './components/SEO';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

function App() {
	useEffect(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	}, []);

	return (
		<>
			<SEO />
			<div className="min-h-screen w-full bg-background dark:bg-background-dark">
				<Navbar />
				<main className="container px-4 mt-20">
					<Home />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</main>
			</div>
		</>
	);
}

export default App;
