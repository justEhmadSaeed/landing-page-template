import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Landing Page Template</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='font-Poppins'>
				{/* Header */}
				<header>
					<Navbar />
				</header>
				{/* Main Section */}
				<main className='relative'>
					<Hero />
				</main>
				{/* Footer */}
			</div>
		</>
	);
}
