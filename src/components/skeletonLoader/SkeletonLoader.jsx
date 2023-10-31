import { SkeletonLoaderContainer } from './SkeletoLoader.styled';

/**
 * SkeletonLoader
 * @param {object} props - Props
 * @param {"rounded" | "rectangle" | "circle"} props.variant - Border radius variants
 * @param {number} props.width - Width of skeleton
 * @param {number} props.height - Height of skeleton
 * @param {string} props.borderRadius - Css custom value
 */

export default function SkeletonLoader({
  variant = '',
  width = '',
  height = '',
  borderRadius = '',
}) {
  return (
    <SkeletonLoaderContainer
      $variant={variant}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}></SkeletonLoaderContainer>
  );
}
