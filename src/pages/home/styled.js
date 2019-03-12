import styled from 'styled-components';

export const StyledHome = styled.div`
  text-align: center;
  color: #666d87;
  max-width: 991px;
  margin: 60px auto;

  h1 {
    font-size: 30px;
  }

  .Card {
    position: relative;
  }
`;

export const CharityListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Meta {
    display: flex;
    flex-direction: column;
    padding: 15px;

    h3 {
      margin-bottom: 10px;
      width: 100%;
      text-align: left;
    }

    .Extra {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
