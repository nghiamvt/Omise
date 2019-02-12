import styled, { keyframes } from 'styled-components';

// Create the keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
    right: -150px;
  }
  100% {
    right: 0;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    top: 0;
  }
  100% {
    opacity: 0;
    top: -150px;
  }
`;

export const Wrapper = styled.div`
  animation: ${fadeIn} 0.2s ease, ${fadeOut} 1s ease-in 4s;
  position: relative;
  text-align: left;
  padding: 16px 40px 16px 24px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  max-width: 500px;
  min-width: 210px;
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
  right: 15px;
  top: 13px;
  width: 15px;
  height: 15px;
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
    height: 15px;
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
