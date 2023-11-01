import React from 'react';
import styled, { css } from 'styled-components';

const container = css`
  height: 100%;
  width: 100%;
  display: flex;
`;

const variants = {
  container,
};

const StyledBox = styled.div`
  ${({ $variant }) => variants[$variant]}

  height: ${({ $height }) => ($height ? $height : '')};
  width: ${({ $width }) => ($width ? $width : '')};
  flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'row')};
  display: ${({ $display }) => ($display ? $display : '')};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
  gap: ${({ $gap }) => ($gap ? $gap : 'normal normal')};
  padding: ${({ $padding }) => ($padding ? $padding : '0 0 0 0')};
  overflow: ${({ $overflow }) => ($overflow ? $overflow : 'visible')};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  ${({ $mixin }) => $mixin && $mixin}
`;

/**
 * Box
 * @param {object} props - Props
 * @param {"container" | "common"} props.variant - Box variants
 * @param {string} props.width - Width of skeleton
 * @param {string} props.height - Height of skeleton
 * @param {string} props.flexDirection -  How flex items are placed in the flex container
 * @param {"block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "table" } props.display - Sets whether an element is treated as a block or inline box and the layout used for its children
 * @param {string} props.borderRadius - Css custom value
 * @param {"stretch" | "center" | "start" | "end" } props.alignItems - Sets the align-self value on all direct children as a group
 * @param {"stretch" | "center" | "start" | "normal" | "space-between" | "space-around" | "space-evenly" } props.justifyContent - Defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container
 * @param {string} props.gap - Sets the size of the gap (gutter) between an element's
 * @param {string} props.padding - Sets the padding area on all four sides of an element at once
 * @param {"visible" | "hidden" | "scroll" | "auto"} props.overflow - Specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area
 * @param {string} props.borderRadius - Rounds the corners of an element's outer border edge
 * @param {React.CSSProperties | import('styled-components').FlattenSimpleInterpolation} props.mixin - Sets a set of css rules
 * @param {React.ReactNode} props.children - children
 */

export function Box({
  variant,
  height,
  width,
  flexDirection,
  display,
  alignItems,
  justifyContent,
  gap,
  padding,
  overflow,
  borderRadius,
  mixin,
  children,
}) {
  return (
    <StyledBox
      $variant={variant}
      $height={height}
      $width={width}
      $flexDirection={flexDirection}
      $display={display}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $gap={gap}
      $padding={padding}
      $overflow={overflow}
      $borderRadius={borderRadius}
      $mixin={mixin}>
      {children}
    </StyledBox>
  );
}
