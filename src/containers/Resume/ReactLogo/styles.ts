import styled from "styled-components";

export const ellipseHeight = "40px";

export const ReactLogoStyle = styled.span`
  & {
    display: inline-block;
    border-radius: 50%;
    border: 10px solid #00d8ff;

    animation-name: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &,
  &:before,
  &:after {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: ${ellipseHeight};
    border-radius: 50%;
    border: 2px solid #00d8ff;
  }

  .nucleo,
  &,
  &:before,
  &:after {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nucleo {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #00d8ff;
  }

  &:after {
    content: "";
    transform: rotate(-57deg);
  }

  &:before {
    content: "";
    transform: rotate(57deg);
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
