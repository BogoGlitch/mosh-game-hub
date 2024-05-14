import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
	onSelectGenre: (genre: Genre) => void
	selectedGenreId?: number
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
	const { data, isLoading, error } = useGenres()
	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<>
			<Heading as="h2" fontSize={'2xl'} marginBottom={4}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="8px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit={'cover'}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
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
