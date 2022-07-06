import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 25px auto;
  width: 60%;
  min-width: 500px;

  overflow: hidden;

  border-radius: ${({ theme }) => theme.borderRadius};

  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 50px 0;

  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
`;

export const StatsList = styled.ul`
  box-sizing: border-box;
  display: flex;
  padding: 0;
  margin: 0 auto;

  list-style: none;
`;

export const StatsListItem = styled.li`
  display: block;
  box-sizing: border-box;
  flex-basis: calc(100% / 5);
  padding: 20px 5px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.textLightColor};
  text-shadow: ${({ theme }) => theme.shadow};

  font-size: 20px;
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  margin-bottom: 0;

  color: ${({ theme }) => theme.colors.textLightColor};
  text-shadow: ${({ theme }) => theme.shadow};

  font-size: 25px;
  text-align: center;
`;
