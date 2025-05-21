import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Home() {
	//animatiion left part of section

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	// animation right part of section

	const codeEditorVariants = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 1.5,
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section
			id="home"
			className="flex flex-col md:flex-row  items-center justify-center min-h-screen w-full max-w-5xl mx-auto px-4 gap-8"
		>
			{/* Left Side */}
			<motion.div
				className="flex-1 text-left md:max-w-2xl"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.p
					variants={item}
					className="text-primary font-semibold text-lg mb-2"
				>
					Hello! I'm
				</motion.p>

				<motion.h3
					variants={item}
					className="text-5xl md:text-6xl font-bold text-primary dark:text-white mb-2"
				>
					Saied{' '}
					<span className="text-primary underline underline-offset-4">
						Yassin
					</span>
				</motion.h3>

				<motion.h2
					variants={item}
					className="text-2xl md:text-3xl font-medium text-zinc-500 dark:text-gray-400mb-4"
				>
					Développeur Full-Stack
				</motion.h2>

				<motion.p
					variants={item}
					className="text-zinc-500 dark:text-gray-400 mb-8 max-w-xl"
				>
					Je construis des solutions élégantes pour résoudre des problèmes
					complexes, en utilisant des technologies modernes.
				</motion.p>

				<motion.div
					variants={item}
					className="flex flex-col sm:flex-row items-center gap-4 mb-6"
				>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="#contact"
						className="dark:btn-secondary btn-primary"
					>
						Contact Me
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="#projects"
						className="dark:btn-primary btn-secondary"
					>
						View Projects
					</motion.a>
					<motion.div
						variants={item}
						className="flex gap-6 text-2xl text-gray-400"
					>
						<motion.a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, color: '#245e66' }}
							whileTap={{ scale: 0.95 }}
							className="transition-colors duration-200"
						>
							<FaGithub />
						</motion.a>
						<motion.a
							href="https://linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, color: '#245e66' }}
							whileTap={{ scale: 0.95 }}
							className=" transition-colors duration-200"
						>
							<FaLinkedin />
						</motion.a>
						<motion.a
							href="mailto:your.email@example.com"
							whileHover={{ scale: 1.1, color: '#245e66' }}
							whileTap={{ scale: 0.95 }}
							className=" transition-colors duration-200"
						>
							<HiMail />
						</motion.a>
					</motion.div>
				</motion.div>
				{/* */}
			</motion.div>
			{/* Right Side (Code Card) */}
			<motion.div
				className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 md:max-w-xl"
				variants={codeEditorVariants}
				initial="hidden"
				animate="show"
			>
				<div className="relative rounded-2xl dark:glass-card glass-card-light  p-6 w-[350px] md:w-[420px] backdrop-blur-sm">
					<div className="flex items-center gap-2 mb-4">
						<span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
						<span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
						<span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
						<span className="ml-auto text-xs text-gray-500">
							developer.js
						</span>
					</div>
					<pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">
						<span className="text-gray-400">// Software Engineer</span>
						{'\n'}
						<span className="text-pink-400">const</span>{' '}
						<span className="text-blue-400">developer</span> = {'{'}
						{'\n'}
						&nbsp;&nbsp;<span className="text-yellow-400">
							name
						</span>:{' '}
						<span className="text-green-400">'Saied Yassin'</span>,{'\n'}
						&nbsp;&nbsp;<span className="text-yellow-400">skills</span>: [
						<span className="text-green-400">'PHP'</span>,{' '}
						<span className="text-green-400">'Symfony'</span>,{' '}
						<span className="text-green-400">'React'</span>
						],{'\n'}
						&nbsp;&nbsp;<span className="text-yellow-400">focuses</span>:
						[<span className="text-green-400">'Devops'</span>,{' '}
						<span className="text-green-400">'IA'</span>],{'\n'}
						&nbsp;&nbsp;<span className="text-yellow-400">
							learning
						</span>: <span className="text-green-400">'Always'</span>
						{'\n'}
						{'}'};
					</pre>
				</div>
			</motion.div>
		</section>
	);
}
