import { socials } from '@/data/socials';

export const channels = [
	{
		image: 'dager-dog.webp',
		title: 'Dog Dager',
		description: 'Programador y humor de mierda',
		networks: [
			{
				social: socials['youtube'],
				link: 'https://www.youtube.com/@DotDager',
			},
		],
	},
	{
		image: 'dager-clips.webp',
		title: 'Dager Clips',
		description: 'Lives del tío Dager, por si no lo viste en vivo',
		networks: [
			{
				social: socials['youtube'],
				link: 'https://www.youtube.com/@DagerLive',
			},
			{
				social: socials['twitch'],
				link: 'https://www.twitch.tv/dagerxiv',
			},
		],
	},
	{
		image: 'dager-music.webp',
		title: 'Dager',
		description: 'Música extraña e improvisada',
		networks: [
			{
				social: socials['youtube'],
				link: 'https://www.youtube.com/c/DagerMusic',
			},
			{
				social: socials['spotify'],
				link: 'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?nd=1',
			},
		],
	},
	{
		image: 'dager-antro.webp',
		title: 'El Antro de Dager',
		description: '¿Edutenimiento?',
		networks: [
			{
				social: socials['youtube'],
				link: 'https://www.youtube.com/c/DagerXIV',
			},
		],
	},
];
