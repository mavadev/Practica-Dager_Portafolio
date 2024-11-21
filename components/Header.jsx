import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Logo */}
				<Logo />
				{/* Navegation */}
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
