import { useState, useEffect } from 'react';

export function useTheme() {
	const [isDarkMode, setIsDarkMode] = useState(true); // drak défaut mode

	useEffect(() => {
		// Vérifier si une préférence est sauvegardée
		const savedTheme = localStorage.getItem('theme');

		// Si aucune préférence n'est sauvegardée, utiliser le mode sombre
		if (!savedTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			// Sinon, utiliser la préférence sauvegardée
			setIsDarkMode(savedTheme === 'dark');
			if (savedTheme === 'dark') {
				document.documentElement.classList.add('dark');
			}
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode((prev) => {
			const newMode = !prev;
			if (newMode) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
			return newMode;
		});
	};

	return { isDarkMode, toggleTheme };
}
