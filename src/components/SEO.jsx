import { Helmet } from 'react-helmet';
import { siteMetadata } from '../utils/listPortfolio';

export default function SEO() {
	return (
		<Helmet>
			<title>{siteMetadata.title}</title>
			<meta name="description" content={siteMetadata.description} />
			<meta name="author" content={siteMetadata.author} />
			<meta name="keywords" content={siteMetadata.keywords.join(', ')} />
			<html lang={siteMetadata.language} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={siteMetadata.title} />
			<meta property="og:description" content={siteMetadata.description} />
			<meta property="og:url" content={siteMetadata.siteUrl} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={siteMetadata.title} />
			<meta name="twitter:description" content={siteMetadata.description} />
		</Helmet>
	);
}
