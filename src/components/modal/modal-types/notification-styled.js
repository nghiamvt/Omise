import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: left;
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 4px;
  max-width: 500px;
  min-width: 210px;
  top: 24px;
  right: 24px;
  position: fixed;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  &:before {
    background-color: #2bde3f;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const Title = styled.div`
  color: #3e3e3e;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #878787;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 24px;
  top: 16px;
  width: 18px;
  height: 18px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 8px;
    content: ' ';
    height: 18px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
