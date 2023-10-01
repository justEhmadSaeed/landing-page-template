import { MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';


const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	  }, []);
	
	  if (!mounted) return null;
	  const currentTheme = theme === 'system' ? systemTheme : theme;
	  

	return (
		<nav className='container flex items-center py-4 mt-4 sm:mt-8'>
			<div className='py-1 w-32'>
				<img src='./img/vercel.svg' className='cursor-pointer' onClick={() => window.location.reload(false)} alt='' />
			</div>
			<ul className='hidden sm:flex flex-1 justify-end items-center gap-10 text-landing-blue uppercase'>
					{/* <img onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
					key={'features'}
					className='cursor-pointer w-8'
					src='./img/moon.svg'/> */}

        <div className="">
          {currentTheme === 'dark' ? (
            <button
              className="w-16  p-2"
              onClick={() => setTheme('light')}
            >
              <Image src="./img/sun.svg" alt="logo" width={40} height={50} />
            </button>
          ) : (
            <button
              className="w-16  p-2 "
              onClick={() => setTheme('dark')}
            >
              <Image src="./img/moon.svg" alt="logo" height={50} width={32}  />
            </button>
          )}
        </div>
				<a href='#feature' className='dark:hover:text-cyan-600 uppercase cursor-pointer px-2 text-sm border-solid border-[1px] border-gray-400 p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600 hover:border-cyan-500 '>Features</a>
				<button className='dark:hover:text-cyan-600 uppercase cursor-pointer px-2 text-sm border-solid border-[1px] border-gray-400 p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600 hover:border-cyan-500'>Pricing</button>
				<a href='#contact' className='dark:hover:text-cyan-600 uppercase cursor-pointer px-2 text-sm border-solid border-[1px] border-gray-400 p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600 hover:border-cyan-500'>Contact</a>
				<button
					type='button'
					className='bg-red-500 dark:bg-cyan-600 dark:text-template-white text-xs hover:bg-template-white dark:hover:bg-template-white dark:hover:text-cyan-500 rounded-md px-7 py-3 uppercase hover:scale-105 ease-out duration-200 hover:border-gray-300 hover:border-[1px] hover:text-teal-800'
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
