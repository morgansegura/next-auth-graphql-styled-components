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
import { GET_CURRENT_USER_QUERY } from '@graphql/queries/authQueries'
import { useQuery } from 'urql'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => {
	const router = useRouter()
	const { getItem } = useStorage()
	const { isLoggedIn } = useAuth()
	const [userData, setUserData] = React.useState({})

	function isActive(route) {
		return router.pathname === route
	}

	const [user] = useQuery({ query: GET_CURRENT_USER_QUERY })

	React.useEffect(() => {
		// if (getItem('token')) {
		// 	router.push('/')
		// }
	}, [user])

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href='/'>
						<a>
							<Logo>Youth Sports</Logo>
						</a>
					</Link>
					<>
						{isLoggedIn() ? (
							<Nav>
								{/* <Link href='/cart'>
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
								</Link> */}

								{user?.data?.me?.username}

								<>
									<Logout />
								</>
							</Nav>
						) : (
							<Nav>
								{!isActive('/') && (
									<Button
										size='xs'
										theme='primary'
										onClick={() => router.push('/')}>
										Get Started
									</Button>
								)}
							</Nav>
						)}
					</>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Header
