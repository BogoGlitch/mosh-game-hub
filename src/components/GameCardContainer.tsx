import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius={8}
			overflow={'hidden'}
			style={{ transition: 'all .3s ease' }}
			_hover={{
				transform: 'scale(1.02)',
				cursor: 'pointer',
			}}
		>
			{children}
		</Box>
	)
}

export default GameCardContainer
