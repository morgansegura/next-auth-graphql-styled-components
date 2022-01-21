export const LoginMutation = `
	mutation loginUser($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			token
		}
	}
`

export const LogoutMutation = `
	mutation signOut {
		signOut {
			token: accessToken
		}
	}
`

export const SignupMutation = `
	mutation signIn($username: String!, $password: String!) {
		signIn(input: { username: $username, password: $password }) {
			username
		}
	}
`
