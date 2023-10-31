import styled, { css } from 'styled-components';

const container = css`
  height: 100%;
  width: 100%;
  display: flex;
`;

const common = css``;

export const Box = styled.div`
  ${({ variant }) => {
    switch (variant) {
      case 'container':
        return container;
      default:
        return common;
    }
  }}
  height: ${({ height }) => (height ? height : '')};
  width: ${({ width }) => (width ? width : '')};
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  display: ${({ display }) => (display ? display : '')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  gap: ${({ gap }) => (gap ? gap : 'normal normal')};
  padding: ${({ padding }) => (padding ? padding : '0 0 0 0')};
`;
