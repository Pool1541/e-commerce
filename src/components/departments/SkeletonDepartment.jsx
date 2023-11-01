import { Box } from '../elements';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';
import { GridItemContainerMixin } from './Departments.styled';

export default function SkeletonDepartment() {
  return (
    <Box mixin={GridItemContainerMixin} gap='2rem'>
      <SkeletonLoader height='100px' width='100px' />
      <Box width='100%' display='flex' flexDirection='column' gap='0.3rem'>
        <SkeletonLoader height='1.8rem' />
        <SkeletonLoader height='1.8rem' />
      </Box>
    </Box>
  );
}
