import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .SearchBox img {
    width: 20px;
  }

  .Section {
    .ResItem {
      display: flex;
      height: 50px;
      width: 350px;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px dashed #000;

      img {
        width: 50px;
        padding-right: 15px;
      }
    }
  }
`;
