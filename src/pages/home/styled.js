import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  color: #666d87;

  .Card {
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const CharityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
      background-color: #fff;
      color: #1b50ea;
      border: 1px solid #1b50ea;
      border-radius: 5px;
      border-radius: 2px;
      padding: 5px 10px;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
