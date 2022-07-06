import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  width: 60%;
  min-width: 500px;

  overflow: hidden;

  color: textMiddleColor;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const TableHead = styled.thead`
  background-color: rgb(1, 180, 204);

  color: ${({ theme }) => theme.colors.textLightColor};

  font-size: 16px;
  text-transform: uppercase;
`;

export const Th = styled.th`
  width: calc(100% / 3);
  padding: 15px 5px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.backgroundLightColor};
  }
`;

export const Td = styled.td`
  padding: 15px 5px;
  font-size: 16px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};
`;

export const Tr = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.backgroundMiddleColor};
  }
`;
