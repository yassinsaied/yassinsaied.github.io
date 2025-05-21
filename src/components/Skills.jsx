import { motion } from 'framer-motion';
import ContentCard from './ContentCard';
import { skills } from '../utils/listPortfolio';

export default function Skills() {
	const skillCategories = Object.entries(skills).map(
		([category, skillList]) => ({
			title: category.charAt(0).toUpperCase() + category.slice(1),
			skills: skillList,
		})
	);

	return (
		<section id="skills" className="section-container">
			<div className="max-w-6xl mx-auto px-4">
				<div className="relative mb-6">
					<motion.h3
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-2xl font-bold dark:text-white text-primary pb-2"
					>
						Mes Compétences
					</motion.h3>

					<motion.span
						className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
						initial={{ width: 0 }}
						whileInView={{ width: '15%' }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							{' '}
							<ContentCard
								content={{
									title: category.title,
									skills: category.skills,
								}}
								type="skill"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
