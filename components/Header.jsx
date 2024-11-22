import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
	return (
		<header className='py-5 w-full fixed z-20 bg-gradient-to-b from-black to-transparent'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Logo */}
				<Logo />
				{/* Navegation */}
				<Menu />
			</div>
		</header>
	);
};

export default Header;
