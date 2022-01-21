import { Layout, Scaffold } from 'components/layouts'
import { GlobalStyle } from '@styles/config/globalStyles'
import { AuthProvider } from '@lib/auth'
import { useRouter } from 'next/router'
// Libs
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Styled
// import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
	const { query } = useRouter()

	return (
		<>
			<AuthProvider>
				<Layout>
					<GlobalStyle />
					<Component {...pageProps} />
					<ToastContainer />
				</Layout>
				{query.scaffold === 'yesplease' && <Scaffold />}
			</AuthProvider>
		</>
	)
}

export default MyApp
