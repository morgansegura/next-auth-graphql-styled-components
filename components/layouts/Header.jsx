import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Button } from '@components/core'
import { Logout } from '@components/inputs'
import { Container } from '@styles/Container'
import { Logo, Menu, Nav, NavItem, Header as Wrapper } from '@styles/Header'
import { useAuth } from '@lib/auth'
import useStorage from '@hooks/useStorage'
import { getClientBuildManifest } from 'next/dist/client/route-loader'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => {
	const router = useRouter()
	const { getItem } = useStorage()
	const isRootOrAdmin = true
	const { isLoggedIn, getCurrentUser } = useAuth()
	const [userData, setUserData] = React.useState({})

	function isActive(route) {
		return router.pathname === route
	}

	const getUser = async () => {
		const data = await getCurrentUser()
		setUserData({ id: data?.me?.id, username: data?.me?.username })
	}

	React.useEffect(() => {
		if (getItem('token')) {
			getUser()
		}
	}, [getUser])

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href='/'>
						<a>
							<Logo>ReactReserve</Logo>
						</a>
					</Link>
					<Nav>
						{isLoggedIn() ? (
							<>
								<Link href='/cart'>
									<a>
										<NavItem active={isActive('/cart')}>
											Cart
										</NavItem>
									</a>
								</Link>
								{isRootOrAdmin && (
									<Link href='/create'>
										<a>
											<NavItem
												active={isActive('/create')}>
												Create
											</NavItem>
										</a>
									</Link>
								)}
								<Link href='/account'>
									<a>
										<NavItem active={isActive('/account')}>
											Account
										</NavItem>
									</a>
								</Link>

								<Logout />

								{userData.username}
							</>
						) : (
							<>
								<Button
									size='xs'
									theme='primary'
									onClick={() => router.push('/login')}>
									Login
								</Button>
							</>
						)}
					</Nav>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Header
