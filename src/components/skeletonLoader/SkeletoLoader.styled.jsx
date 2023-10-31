import styled, { css, keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const circular = css`
  border-radius: 50%;
`;

const rectangular = css`
  border-radius: 0;
`;
const rounded = css`
  border-radius: 5px;
`;

export const SkeletonLoaderContainer = styled.div`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '20px'};
  background-color: rgba(0, 0, 0, 0.11);
  animation: ${skeletonAnimation} 2s ease-in-out 0.5s infinite;

  ${({ $variant }) => {
    switch ($variant) {
      case 'circular':
        return circular;
      case 'rectangular':
        return rectangular;
      case 'rounded':
        return rounded;
      default:
        return rounded;
    }
  }}

  border-radius: ${({ $borderRadius }) => $borderRadius && $borderRadius};
`;
