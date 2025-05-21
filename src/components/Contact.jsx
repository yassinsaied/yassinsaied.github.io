import { motion } from 'framer-motion';
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';

export default function Contact() {
	return (
		<section id="contact" className="section-container">
			<div className="max-w-6xl mx-auto px-4">
				{/* Titre de section */}
				<div className="relative mb-6">
					<motion.h3
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-2xl font-bold dark:text-white text-primary pb-2"
					>
						Contact
					</motion.h3>
					<motion.span
						className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
						initial={{ width: 0 }}
						whileInView={{ width: '15%' }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>
				</div>

				{/* Conteneur principal */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Colonne d'informations */}
					<div className="dark:glass-card glass-card-light rounded-xl p-6 h-64">
						<h4 className="text-xl font-bold dark:text-white text-primary  mb-6">
							Mes Coordonnées
						</h4>

						{/* Liste des informations */}
						<div className="space-y-4">
							<div className="flex items-center text-zinc-500 dark:text-gray-400">
								<FaPhone className="text-accent mr-3" />
								<span>+33 667184830</span>
							</div>
							<div className="flex items-center text-zinc-500 dark:text-gray-400">
								<FaEnvelope className="text-accent mr-3" />
								<span>saied@yassin.com</span>
							</div>
							<div className="flex items-center text-zinc-500 dark:text-gray-400">
								<FaMapMarkerAlt className="text-accent mr-3" />
								<span> Courbevoie - 92400 , France</span>
							</div>
						</div>

						{/* Réseaux sociaux */}
						<div className="flex gap-4 mt-8">
							<a
								href="https://www.linkedin.com/in/saiedyassine/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:text-primary transition-colors text-2xl"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/yassinsaied"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:text-primary transition-colors text-2xl"
							>
								<FaGithub />
							</a>
						</div>
					</div>

					{/* Colonne du formulaire */}
					<div className="md:col-span-2">
						<form className="dark:glass-card glass-card-light rounded-xl p-6 space-y-2">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="name"
										className="block text-zinc-500 dark:text-gray-400 mb-2"
									>
										Nom
									</label>
									<input
										type="text"
										id="name"
										className="form-input"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-zinc-500 dark:text-gray-400 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="form-input"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="subject"
									className="block text-zinc-500 dark:text-gray-400 mb-2"
								>
									Sujet
								</label>
								<input
									type="text"
									id="subject"
									className="form-input"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-zinc-500 dark:text-gray-400 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									rows="5"
									className="form-input h-24 "
								></textarea>
							</div>
							<div className="flex justify-end">
								<button type="submit" className="btn-secondary">
									Envoyer
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
