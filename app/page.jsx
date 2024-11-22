import { Hero } from './sections/Hero';
import { AboutMe } from './sections/AboutMe';
import { Galeria } from './sections/Galeria';
import { Canales } from './sections/Canales';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<Galeria />
			<Canales />
		</>
	);
}
