import { Box } from '../../../../components/elements';
import SkeletonLoader from '../../../../components/skeletonLoader/SkeletonLoader';
import { CardContainerMixin } from './Card.styled';

export default function SkeletonCard() {
  return (
    <Box mixin={CardContainerMixin}>
      <Box
        width='100%'
        height='90%'
        padding='10px'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'>
        <SkeletonLoader height='60%' width='100%' />
        <Box width='100%' display='flex' flexDirection='column' gap='0.3rem'>
          <SkeletonLoader height='1.8rem' width='100%' />
          <SkeletonLoader height='1.8rem' width='100%' />
        </Box>
        <SkeletonLoader height='1.8rem' width='50%' />
      </Box>
      <SkeletonLoader width='100%' height='38px' />
    </Box>
  );
}
