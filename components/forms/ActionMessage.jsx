// [Components]
import { Button, Box } from '@components/core'
// [Styles]
import { MessageDisplay } from '@styles/Form'

const ActionMessage = ({ icon, label, action, message, theme }) => {
	return (
		<MessageDisplay theme={theme}>
			<h3>
				{icon && icon}
				{message}
			</h3>

			{label && (
				<Button theme={theme} medium inline radiusBase onClick={action}>
					{label}
				</Button>
			)}
		</MessageDisplay>
	)
}

export default ActionMessage
