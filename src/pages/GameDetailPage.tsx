import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Heading, Spinner, Text } from '@chakra-ui/react'

const GameDetailPage = () => {
	const { slug } = useParams()
	const { data: game, isLoading, error } = useGame(slug!)

	if (isLoading) return <Spinner />
	if (error || !game) throw error

	return (
		<>
			<Heading>{game}</Heading>
			<Text>{game}</Text>
		</>
	)
}

export default GameDetailPage
