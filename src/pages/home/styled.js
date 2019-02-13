import styled from 'styled-components';
import { Button } from 'src/common/styled';

export const HomeWrapper = styled.div`
  text-align: center;
  color: #666d87;

  .Card {
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 50px;
`;

export const CharityListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
`;

export const StyledDonateOptions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  justify-content: space-evenly;
  padding: 20px 20px 65px;

  .RadioGroup {
    max-width: 250px;
  }

  .RadioOption {
    input {
      display: none;
    }

    input + span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 65px;
      width: 65px;
      margin: 5px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 3px;
      color: #000;
      background-color: #fff;
      box-shadow: 0 2px 7px 0 rgba(200, 200, 200, 0.5);
    }

    input:checked + span {
      color: #fff;
      background-color: #16b184;
    }
  }

  @media (max-width: 380px) {
    .RadioGroup {
      max-width: 150px;
    }
    .RadioOption {
      .FlatBtn {
        padding: 15px;
      }
      input + span {
        height: 40px;
        width: 40px;
      }
    }
  }
`;

export const FlatButton = styled(Button)`
  width: 100%;
  border-radius: 0 0 3px 3px;
  position: absolute;
  bottom: 0;
  padding: 25px;
`;
