import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;

  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const setStatusStyle = props => {
  switch (props.statusIsOnline) {
    case true:
      return 'radial-gradient(rgb(74, 248, 74), rgb(17, 187, 17))';
    case false:
      return 'radial-gradient(rgb(190, 55, 55), rgb(116, 28, 28))';
    default:
      return 'none';
  }
};

export const Status = styled.span`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: ${setStatusStyle};
`;

export const Avatar = styled.img`
  display: block;
  margin-right: 15px;
  width: 80px;
  height: 80px;

  object-fit: cover;

  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
`;
