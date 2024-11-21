import { Patrick_Hand, Bagel_Fat_One } from 'next/font/google';
import './globals.css';

const titleFont = Bagel_Fat_One({ subsets: ['latin'], weight: ['400'], variable: '--font-bagelFatOne' });
const textFont = Patrick_Hand({ subsets: ['latin'], weight: ['400'], variable: '--font-patrickHand' });

export const metadata = {
	title: 'Dog Dager | Inicio',
	description: 'Portafolio / Landing Page creado para Dog Dager',
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={`${titleFont.variable} ${textFont.variable} antialiased`}>{children}</body>
		</html>
	);
}
