import Link from 'next/link'
import Router, { useRouter } from 'next/router'
// import { roleType, handleLogout } from 'utils/auth'
// import NProgress from 'nprogress'
import { Button } from 'components/core'
import { Container } from '@styles/Container'
import { Logo, Menu, Nav, NavItem, Header as Wrapper } from '@styles/Header'

// Router.onRouteChangeStart = () => NProgress.start()
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

export default function Header({ user }) {
	const router = useRouter()
	// const { isRootOrAdmin } = roleType(user)
	const isRootOrAdmin = true

	function isActive(route) {
		return router.pathname === route
	}

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
						{user ? (
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
								<Button
									size='xs'
									theme='primary'
									onClick={handleLogout}>
									Logout
								</Button>
							</>
						) : (
							<>
								<Link href='/signup'>
									<a>
										<NavItem active={isActive('/signup')}>
											Signup
										</NavItem>
									</a>
								</Link>
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
