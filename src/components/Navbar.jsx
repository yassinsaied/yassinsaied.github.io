import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';

const navigation = [
	{ name: 'Home', href: '#', id: '' },
	{ name: 'About', href: '#about', id: 'about' },
	{ name: 'Projects', href: '#projects', id: 'projects' },
	{ name: 'Skills', href: '#skills', id: 'skills' },
	{ name: 'Contact', href: '#contact', id: 'contact' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const { isDarkMode, toggleTheme } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const activeSection = useActiveSection();

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;

			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Disclosure
			as="nav"
			className={`navbar-glass ${
				scrolled ? 'navbar-scrolled' : 'navbar-transparent'
			}`}
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-20 justify-between items-center">
							<div className="flex">
								<div className="flex flex-shrink-0 items-center">
									<a
										href="#"
										className="text-3xl font-bold text-primary hover:text-secondary dark:hover:text-text-muted transition-colors duration-200"
									>
										YS.
									</a>
								</div>
								<div className="hidden sm:ml-16 sm:flex sm:space-x-8">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												'nav-link',
												activeSection === item.id &&
													'nav-link-active'
											)}
											aria-current={
												activeSection === item.id
													? 'page'
													: undefined
											}
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<button
									type="button"
									onClick={toggleTheme}
									className="rounded-lg p-2 text-gray-600 dark:text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-200"
								>
									{isDarkMode ? (
										<SunIcon className="h-6 w-6" aria-hidden="true" />
									) : (
										<MoonIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</button>
								<a
									href="/resume.pdf"
									download
									className="dark:btn-secondary btn-primary"
								>
									Resume
								</a>
							</div>
						</div>
					</div>

					{/* Mobile menu */}
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										activeSection === item.id
											? 'text-primary'
											: 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary',
										'block px-4 py-2 text-base font-medium'
									)}
									aria-current={
										activeSection === item.id ? 'page' : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
