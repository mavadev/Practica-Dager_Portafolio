import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className='py-5 w-full fixed'>
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
