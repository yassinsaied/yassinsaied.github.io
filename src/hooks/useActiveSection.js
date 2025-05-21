import { useState, useEffect } from 'react';

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section[id]');
			const scrollY = window.scrollY;

			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 100;
				const sectionId = section.getAttribute('id');

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					setActiveSection(sectionId);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return activeSection;
}
