import { Hero } from './sections/Hero';
import { AboutMe } from './sections/AboutMe';
import { Canales } from './sections/Canales';
import { ConectaConmigo } from './sections/ConectaConmigo';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<Canales />
			<ConectaConmigo />
		</>
	);
}
