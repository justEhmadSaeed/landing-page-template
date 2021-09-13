import Head from 'next/head';
import Features from '../components/features';
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
				<Hero />
				<Features />
				{/* Footer */}
			</div>
		</>
	);
}
