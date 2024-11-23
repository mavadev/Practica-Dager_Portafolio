import Logo from './Logo';
import LumberGame from './LumberGame';
import Menu from './Menu';

const Header = () => {
	return (
		<header className={`py-5 w-full fixed z-20 bg-black`}>
			<div className='container mx-auto flex items-center gap-2'>
				{/* LumberJack */}
				<LumberGame />
				{/* Logo */}
				<Logo />
				{/* Navegacion */}
				<Menu />
			</div>
		</header>
	);
};

export default Header;
