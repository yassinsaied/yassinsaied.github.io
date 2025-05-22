import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { experiences } from '../utils/listPortfolio';

export default function About() {
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

	return (
		<section id="about" className="section-container">
			<div className="max-w-7xl mx-auto">
				<div className="relative mb-3">
					<motion.h3
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-2xl font-bold dark:text-white text-primary pb-2"
					>
						About Me
					</motion.h3>

					<motion.span
						className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
						initial={{ width: 0 }}
						whileInView={{ width: '15%' }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Left Column - About, Experience, Education */}
					<div className="md:col-span-2 ">
						{/* Bio Section */}
						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className=" rounded-xl p-4"
						>
							<motion.div variants={item} className="flex items-center ">
								<CgNotes
									size={60}
									className="text-secondary text-4xl mx-3 hidden sm:block" // Modifié ici
								/>
								<motion.p
									variants={item}
									className="text-zinc-500 dark:text-gray-400 text-justify-tight"
								>
									Développeur Full Stack confirmé, doté d'une expertise
									éprouvée en administration d'applications et en
									gestion de projets web. Passionné par le
									développement et la résolution de défis complexes.
								</motion.p>
							</motion.div>
						</motion.div>

						{/* Experience and Education Cards in horizontal layout */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
							{' '}
							{/* Experience Card */}
							<motion.div
								variants={container}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								className="dark:glass-card glass-card-light rounded-xl px-4 py-2 min-h-72"
							>
								<motion.div
									variants={item}
									className="flex items-center mb-4"
								>
									<FaBriefcase className="text-accent text-2xl mr-3" />
									<h3 className="text-xl font-bold dark:text-white text-primary">
										Experience
									</h3>
								</motion.div>{' '}
								{experiences.map((exp, index) => (
									<motion.div
										key={index}
										variants={item}
										className="border-primary/30 mb-4 last:mb-0 border-s-2 text-sm pl-4 hover:border-accent/50 transition-all duration-300"
									>
										<h4 className="dark:text-white text-primary font-medium">
											{exp.title}
										</h4>
										<p className="text-zinc-500 dark:text-gray-400">
											{exp.company}
										</p>
										<p className="text-zinc-500 dark:text-gray-400">
											{exp.period}
										</p>
									</motion.div>
								))}
							</motion.div>{' '}
							{/* Education Card */}
							<motion.div
								variants={container}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								className="dark:glass-card glass-card-light rounded-xl p-4 h-44"
							>
								<motion.div
									variants={item}
									className="flex items-center mb-4"
								>
									<FaGraduationCap className="text-accent text-2xl mr-3" />
									<h3 className="text-xl font-bold dark:text-white text-primary">
										Education
									</h3>
								</motion.div>
								<motion.div
									variants={item}
									className="border-primary/30 border-s-2 text-sm pl-4 hover:border-accent/50 transition-all duration-300"
								>
									<h4 className="dark:text-white text-primary font-medium">
										Master Méthodes Informatiques Appliquées à la
										Gestion
									</h4>
									<p className="text-zinc-500 dark:text-gray-400">
										Institut Supérieur de Gestion de Tunis
									</p>
									<p className="text-zinc-500 dark:text-gray-400">
										Septembre 2004- Juillet 2009
									</p>
								</motion.div>
							</motion.div>
						</div>
					</div>

					{/* Right Column - Profile Card with Photo and Info  */}
					<div className="md:col-span-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-secondary/5 rounded-xl p-6 shadow-sm text-center sticky top-24"
						>
							{/* Profile Image */}
							<div className="relative mx-auto mb-4">
								<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mx-auto">
									<img
										src="/yassine.jpg"
										alt="Saied Yassine"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* Name and Title */}
							<h2 className="text-2xl font-bold mt-2 text-primary dark:text-gray-400">
								Saied Yassin
							</h2>
							<p className="text-content-secondary mb-4 text-zinc-500 dark:text-gray-400">
								Développeur Full Stack
							</p>

							{/* Small Skills Pills */}
							<div className="flex flex-wrap justify-center gap-2 mb-6">
								<span className="skill-badge skill-badge-hover">
									React
								</span>
								<span className="skill-badge skill-badge-hover">
									Node
								</span>
								<span className="skill-badge skill-badge-hover">
									PHP
								</span>
								<span className="skill-badge skill-badge-hover">
									Symfony
								</span>
							</div>

							{/* Download Resume Button */}
							<motion.a
								href="/SaiedYassinCV.pdf"
								download
								className="btn-secondary"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
							>
								<FaDownload className="mr-2" />
								Download Resume
							</motion.a>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
