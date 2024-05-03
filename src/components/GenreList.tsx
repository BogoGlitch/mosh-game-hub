import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
	onSelectGenre: (genre: Genre) => void
	selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres()
	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<>
			<Heading as="h2" fontSize={'2xl'} marginBottom={4}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="8px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit={'cover'}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
								onClick={() => onSelectGenre(genre)}
								fontSize="lg"
								variant="link"
								whiteSpace={'normal'}
								textAlign={'left'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
