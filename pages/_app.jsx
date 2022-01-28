import { Layout, Scaffold } from 'components/layouts'
import { GlobalStyle } from '@styles/config/globalStyles'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Auth
import { AuthProvider } from '@lib/auth'

// Styled
// import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
	const { query } = useRouter()

	return (
		<AuthProvider>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
			{query.scaffold === 'yesplease' && <Scaffold />}
			<ToastContainer />
		</AuthProvider>
	)
}

export default MyApp
