import { Box } from '../elements';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';

export default function SkeletonDepartment() {
  return (
    <Box
      height='200px'
      display='flex'
      flexDirection='column'
      padding='10px'
      borderRadius='25px'
      gap='2rem'>
      <SkeletonLoader height='100px' width='100px' />
      <Box width='100%' display='flex' flexDirection='column' gap='0.3rem'>
        <SkeletonLoader height='1.8rem' />
        <SkeletonLoader height='1.8rem' />
      </Box>
    </Box>
  );
}
