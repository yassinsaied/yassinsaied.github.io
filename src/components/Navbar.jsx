import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	SunIcon,
	MoonIcon,
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
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
							{/* Logo */}
							<div className="flex">
								<div className="flex flex-shrink-0 items-center">
									<a
										href="#"
										className="text-3xl font-bold text-primary"
									>
										YS.
									</a>
								</div>
								{/* Desktop Menu */}
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

							{/* Right side icons */}
							<div className="flex items-center space-x-4">
								{/* Theme toggle and Resume buttons */}
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
									href="/SaiedYassinCV.pdf"
									download
									className="dark:btn-secondary btn-primary"
								>
									Resume
								</a>

								{/* Mobile menu button */}
								<div className="sm:hidden">
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										) : (
											<Bars3Icon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile menu panel */}
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={`${
										activeSection === item.id
											? 'text-primary bg-gray-100 dark:bg-gray-800'
											: 'text-gray-600 dark:text-gray-400 hover:text-primary'
									} block rounded-md px-3 py-2 text-base font-medium`}
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
