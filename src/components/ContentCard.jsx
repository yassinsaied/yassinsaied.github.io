import {
	FaGithub,
	FaExternalLinkAlt,
	FaCode,
	FaServer,
	FaDatabase,
	FaTools,
	FaBrain,
	FaClipboardCheck,
} from 'react-icons/fa';
import { DiReact } from 'react-icons/di';

export default function ContentCard({ content, type = 'project' }) {
	// Fonction pour obtenir l'icône correspondante au titre
	const getIconForSkill = (title) => {
		const icons = {
			Frontend: DiReact,
			Backend: FaServer,
			Databases: FaDatabase,
			DevOps: FaTools,
			'AI & Tools': FaBrain,
			'Best Practices': FaClipboardCheck,
			Tools: FaTools,
		};

		const Icon = icons[title] || FaCode;
		return <Icon className="text-accent text-2xl mr-3" />;
	};

	return (
		<div className="dark:glass-card glass-card-light rounded-xl overflow-hidden min-h-36">
			{/* Image conditionnelle pour les projets */}
			{type === 'project' && content.image && (
				<div className="relative h-40 overflow-hidden">
					<img
						src={content.image}
						alt={content.title}
						className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-primary/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
						<a
							href={content.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-500 dark:text-gray-400 hover:text-accent p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
						>
							<FaGithub size={24} />
						</a>
						<a
							href={content.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-500 dark:text-gray-400 hover:text-accent p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
						>
							<FaExternalLinkAlt size={20} />
						</a>
					</div>
				</div>
			)}

			{/* Contenu */}
			<div className="p-4">
				<div className="flex items-center mb-2">
					{type === 'skill' && getIconForSkill(content.title)}
					<h3 className="text-xl font-bold text-zinc-500 dark:text-white mb-3">
						{content.title}
					</h3>
				</div>

				{content.description && (
					<p className="text-zinc-500 dark:text-gray-400 mb-4 text-sm line-clamp-3">
						{content.description}
					</p>
				)}

				{/* Technologies ou Skills */}
				<div className="flex flex-wrap gap-2">
					{(content.technologies || content.skills)?.map((item, index) => (
						<span key={index} className="skill-badge skill-badge-hover">
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
