import styled from '@emotion/styled';

export const PageFooter = styled.footer`
  min-width: 300px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: #010101;
  text-decoration: none;
  &:hover,
  &:focus {
    color: coral;
  }
`;
