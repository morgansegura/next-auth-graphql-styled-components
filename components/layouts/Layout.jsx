import Head from 'next/head'

import { Footer, HeadContent, Header } from 'components/layouts'
import { Container, Main, Wrapper } from '@styles/Container'

function Layout({ children, user }) {
	return (
		<>
			<Head>
				<HeadContent />
				{/* Stylesheets */}
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap'
				/>

				<link rel='stylesheet' type='text/css' href='/styles.css' />
				<link rel='stylesheet' type='text/css' href='/nprogress.css' />
				<title>ReactReserve</title>
			</Head>
			<Wrapper>
				<Header user={user} />
				<Main>
					<Container style={{ flex: 1 }}>{children}</Container>
				</Main>
				<Footer user={user} />
			</Wrapper>
		</>
	)
}

export default Layout
