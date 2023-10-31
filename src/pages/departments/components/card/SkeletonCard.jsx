import { Box } from '../../../../components/elements';
import SkeletonLoader from '../../../../components/skeletonLoader/SkeletonLoader';

export default function SkeletonCard() {
  return (
    <Box display='flex' height='300px' flexDirection='column' borderRadius='25px' overflow='hidden'>
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
