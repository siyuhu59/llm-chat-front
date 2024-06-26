import styled, { keyframes, css } from 'styled-components';

// Flex Mixin
const flexMixin = (justify, align) => css`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;

  justify-content: ${justify};
  -webkit-justify-content: ${justify};
  align-items: ${align};
  -webkit-align-items: ${align};
`;

// Keyframes for bounce delay animation
const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

// Spinner styles
const Spinner = styled.div`
  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  width: 45px;
  height: 9px;
  margin-left: -22px;
  margin-top: -13px;
  text-align: center;

  > div {
    width: 9px;
    height: 9px;
    background-color: #dcdcdc;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bounceDelay} 1.4s infinite ease-in-out;
    animation: ${bounceDelay} 1400ms ease-in-out infinite;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    &.bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    &.bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }
`;

// Variables
const chatAccent = '#fafafa';
const chatLight = '#ffffff';
const chatBg = '#f5f7f8';
const chatOnline = '#99e67c';
const chatAway = '#ffbf53';
const chatDim = '#a5b0b5';
const modifier = 0.5;

// Container styles
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${flexMixin('space-around', 'center')}
`;

// Loading Bubble styles
const LoadingBubble = styled.div`
  ${flexMixin('center', 'center')}
  /* width: auto; */
  /* height: auto; */
  max-width: ${146 * modifier}px;
  min-height: ${80 * modifier}px;
  border-radius: ${10 * modifier}px;
  box-sizing: border-box;
  position: relative;
  background-color: ${chatAccent};

  &.grey {
    background-color: ${chatDim};

    &:before {
      border-color: transparent ${chatDim} transparent transparent;
    }
  }

  /* &:before {
    display: block;
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${16 * modifier}px ${16 * modifier}px ${16 * modifier}px 0;
    border-color: transparent ${chatAccent} transparent transparent;
    position: absolute;
    left: ${-14 * modifier}px;
    top: ${26 * modifier}px;
  } */


  ${Spinner} {
    position: static !important;
    margin-top: -11px;
    margin-left: 0px;

    > div {
      background-color: #d4d4d4;
    }
  }
`;

export { Container, LoadingBubble, Spinner };
