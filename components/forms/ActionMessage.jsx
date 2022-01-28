// [Components]
import { Button, Box } from '@components/core'
// [Styles]
import { MessageDisplay } from '@styles/Form'

const ActionMessage = ({ message, label, action, theme }) => {
	return (
		<MessageDisplay>
			<h3>{message}</h3>
			{label && (
				<Button theme={theme} medium radiusBase onClick={action}>
					{label}
				</Button>
			)}
		</MessageDisplay>
	)
}

export default ActionMessage
