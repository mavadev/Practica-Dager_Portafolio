import { Patrick_Hand, Bagel_Fat_One } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

// Fuentes
const titleFont = Bagel_Fat_One({ subsets: ['latin'], weight: ['400'], variable: '--font-bagelFatOne' });
const textFont = Patrick_Hand({ subsets: ['latin'], weight: ['400'], variable: '--font-patrickHand' });

export const metadata = {
	title: 'Dog Dager',
	description: 'Landing Page creado para Dager (Mariano Villas)',
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={`${titleFont.variable} ${textFont.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
