import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<h1 className='text-3xl font-semibold'>
				Dog <span className='text-orange block'>Dager</span>
			</h1>
		</Link>
	);
};

export default Logo;
