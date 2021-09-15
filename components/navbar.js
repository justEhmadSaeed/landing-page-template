import { MenuIcon } from '@heroicons/react/outline';
const Navbar = () => {
	return (
		<nav className='container flex items-center py-4 mt-4 sm:mt-8'>
			<div className='py-1 w-32'>
				<img src='./img/vercel.svg' alt='' />
			</div>
			<ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-landing-blue uppercase text-xs'>
				<li className='cursor-pointer'>Features</li>
				<li className='cursor-pointer'>Pricing</li>
				<li className='cursor-pointer'>Contact</li>
				<button
					type='button'
					className='bg-template-red text-white rounded-md px-7 py-3 uppercase hover:bg-red-500'
				>
					Login
				</button>
			</ul>
			<div className='flex sm:hidden flex-1 justify-end'>
				<MenuIcon className='h-8 w-8' />
			</div>
		</nav>
	);
};

export default Navbar;
