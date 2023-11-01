import { Box } from '../elements/Box.styled';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';
import { SlideMixin } from './HeroSlide.styled';

export default function SkeletonSlide() {
  return (
    <Box width='100%' mixin={SlideMixin}>
      <SkeletonLoader width='50%' />
      <Box display='flex' width='100%' flexDirection='column' gap='0.3rem'>
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </Box>
      <SkeletonLoader height='40%' />
      <Box display='flex' width='90%' gap='1rem'>
        <SkeletonLoader />
        <SkeletonLoader />
      </Box>
      <SkeletonLoader width='90%' height='32px' borderRadius='25px' />
    </Box>
  );
}
