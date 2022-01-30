import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
`
export const Main = styled.main`
	position: relative;
	flex: 1 0 auto;
`
export const Container = styled.div`
	position: relative;
	${include.container['xxl']}
`
export const Content = styled.div`
	position: relative;
	${include.container['xl']}
`
