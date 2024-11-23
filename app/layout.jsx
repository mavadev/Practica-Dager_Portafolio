import { Analytics } from '@vercel/analytics/react';
import { Patrick_Hand, Bagel_Fat_One } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';

// Fuentes
const titleFont = Bagel_Fat_One({ subsets: ['latin'], weight: ['400'], variable: '--font-bagelFatOne' });
const textFont = Patrick_Hand({ subsets: ['latin'], weight: ['400'], variable: '--font-patrickHand' });

export const metadata = {
	title: 'Dog Dager - Creador de contenido absurdo',
	description: 'Landing page para Dog Dager, un creador de contenido que hace humor absurdo sobre pepinos y más.',
	icons: {
		icon: '/favicon.ico',
	},
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		title: 'Dog Dager - El creador de contenido más pepinudo',
		siteName: 'Dog Dager',
		url: 'https://dager-portafolio.vercel.app/',
		description: 'Descubre a Dog Dager: creador de contenido, amante del humor absurdo y los pepinos.',
		images: [
			{
				height: 630,
				width: 1200,
				url: '/images/dog-dager.jpg',
				alt: 'Dog Dager - Creador de contenido',
			},
		],
	},
	twitter: {
		title: 'Dog Dager - Creador de contenido absurdo',
		card: 'summary_large_image',
		images: ['/images/dog-dager.jpg'],
		description: 'Descubre a Dog Dager: creador de contenido, amante del humor absurdo y los pepinos.',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Mariano Villas',
							alternateName: 'Dog Dager',
							url: 'https://dager-portafolio.vercel.app/',
							sameAs: [
								'https://www.youtube.com/@DotDager',
								'https://www.instagram.com/dager.32/',
								'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?nd=1',
								'https://www.twitch.tv/dagerxiv',
							],
							description: 'Descubre a Dog Dager: creador de contenido, amante del humor absurdo y los pepinos',
						}),
					}}
				/>
			</head>
			<body className={`${titleFont.variable} ${textFont.variable} antialiased`}>
				{/* <Loader /> */}
				<Header />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
