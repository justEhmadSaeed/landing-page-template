import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={false} attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	
	) ;
}

export default MyApp;
