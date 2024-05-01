import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
	return (
		<Card height="424px">
			<Skeleton height="320px" />
			<CardBody height="104px">
				<SkeletonText />
			</CardBody>
		</Card>
	)
}

export default GameCardSkeleton
