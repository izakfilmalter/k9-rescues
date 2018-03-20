import { css } from 'styled-components';

export const flexFlow = (direction, wrap) => css`
  display: flex;
  flex-flow: ${direction || 'column'} ${wrap || 'nowrap'};
`;
