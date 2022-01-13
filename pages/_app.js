import { Layout, Scaffold } from 'components/layouts'
import { GlobalStyle } from '@styles/config/globalStyles'
import { AuthProvider } from 'lib/auth.js'
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
				{/* <ThemeProvider theme={theme}> */}
				<Layout>
					<GlobalStyle />
					<Component {...pageProps} />
					<ToastContainer />
				</Layout>
				{query.scaffold === 'yesplease' && <Scaffold />}
				{/* </ThemeProvider> */}
			</AuthProvider>
		</>
	)
}

export default MyApp
