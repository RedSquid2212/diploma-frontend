import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  overflow: hidden;
  outline: none;
  display: flex;
  gap: 20px;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0;

  .display {
    display: flex;
    justify-content: space-between;
    width: 330px;
  }
`;