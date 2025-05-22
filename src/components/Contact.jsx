import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [status, setStatus] = useState({
		submitting: false,
		success: false,
		error: null,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ submitting: true, success: false, error: null });

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				}
			);

			setStatus({ submitting: false, success: true, error: null });
			setFormData({ name: '', email: '', subject: '', message: '' });

			// Réinitialise le message de succès après 5 secondes
			setTimeout(() => {
				setStatus((prev) => ({ ...prev, success: false }));
			}, 5000);
		} catch (error) {
			setStatus({
				submitting: false,
				success: false,
				error: 'Une erreur est survenue. Veuillez réessayer.',
			});
		}
	};

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
						<form
							onSubmit={handleSubmit}
							className="dark:glass-card glass-card-light rounded-xl p-6 space-y-2"
						>
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
										value={formData.name}
										onChange={handleChange}
										className="form-input"
										required
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
										value={formData.email}
										onChange={handleChange}
										className="form-input"
										required
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
									value={formData.subject}
									onChange={handleChange}
									className="form-input"
									required
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
									value={formData.message}
									onChange={handleChange}
									className="form-input h-24"
									required
								></textarea>
							</div>

							<div className="flex justify-end items-center gap-4">
								{status.success && (
									<motion.p
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="text-green-500"
									>
										Message envoyé avec succès !
									</motion.p>
								)}
								{status.error && (
									<motion.p
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="text-red-500"
									>
										{status.error}
									</motion.p>
								)}
								<button
									type="submit"
									disabled={status.submitting}
									className={`btn-secondary ${
										status.submitting
											? 'opacity-50 cursor-not-allowed'
											: ''
									}`}
								>
									{status.submitting ? 'Envoi...' : 'Envoyer'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
