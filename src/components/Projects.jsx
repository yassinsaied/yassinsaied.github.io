import { motion } from 'framer-motion';
import ContentCard from './ContentCard';
import { projects } from '../utils/listPortfolio';

export default function Projects() {
	return (
		<section id="projects" className="section-container">
			<div className="max-w-6xl mx-auto px-4">
				<div className="relative mb-6">
					<motion.h3
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-2xl font-bold dark:text-white text-primary pb-2"
					>
						Mes Projets
					</motion.h3>

					<motion.span
						className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
						initial={{ width: 0 }}
						whileInView={{ width: '15%' }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>
				</div>{' '}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{projects.map((project, index) => (
						<ContentCard key={index} content={project} type="project" />
					))}
				</div>
			</div>
		</section>
	);
}
