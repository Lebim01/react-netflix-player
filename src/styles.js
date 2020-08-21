import styled, { css } from 'styled-components';

export const Container = styled.div`
  & > * {
    outline: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => (props.fontFamily ? props.fontFamily : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")};
  }

  input[type=range] {
  -webkit-appearance: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  border-color: transparent;
}

  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;

  video {
    height: 100% !important;
    max-height: 100% !important;
    width: 100% !important;
    max-width: 100% !important;
    cursor: none;
    opacity: ${(props) => (props.hideVideo ? 0 : 1)};

  }

${(props) => props.fullPlayer
 && css`
     position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  `
}
`;

export const Controlls = styled.div`
    opacity: ${(props) => (props.show ? 1 : 0)};
    transform: ${(props) => (props.show ? 'scale(1)' : 'scale(1.2)')};

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.2s ease-out;

    padding: 10px;
    color: #fff;
    font-size: 1.5em;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7) 20%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 1) 100%
    );

    .back {
      margin-bottom: auto;
      margin-top: 30px;
      margin-left: 50px;
      display: flex;

      div {
        display: flex;
        font-size: 20px;
        align-items: center;
        opacity: 0.3;
        transition: all 0.2s ease-out;
        overflow: hidden;

        span {
          margin-left: -100%;
          opacity: 0;
          transition: all ease-out 0.2s;
        }

        &:hover {
          opacity: 1;
          transform: translateX(-10px);

          span {
            margin-left: 0;
            opacity: 1;
          }
        }

        svg {
          font-size: 35px;
          margin-right: 5px;
        }
      }
    }

    .line-reproduction {
      display: flex;
      margin-bottom: 10px;

      input {
        margin: auto;
      }

      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }

    .controlls {
      margin: 20px 0;
      display: flex;
      justify-items: center;

      .end {
        margin-left: auto;
      }

      div {
        display: flex;
        justify-items: center;
      }

      .item-control {
        position: relative;
        margin: auto 15px;
      }

      .info-video {
        font-size: 16px;
        margin-top: -1px;

        .info-first {
          font-weight: bold;
          opacity: 1;
          margin-right: 5px;
        }

        .info-secund {
          font-weight: lighter;
          opacity: 0.5;
        }
      }

      svg {
        cursor: pointer;
        opacity: 0.2;
        font-size: 25px;
        transition: all 0.2s ease-out;

        &:hover {
          opacity: 1;
          transform: scale(1.2);
        }
      }
    }

    .progress-bar {
      width: 100%;
      margin-bottom: 15px;
      appearance: none;
      height: 3px;
      transition: height 0.2s ease-out;
      background: linear-gradient(93deg, ${(props) => props.primaryColor} ${(props) => props.progressVideo}%, #fff ${(props) => props.progressVideo}%);

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: ${(props) => props.primaryColor};
        cursor: pointer;
      }

      &:hover {
        height: 5px;
      }
    }
`;

export const VideoPreLoading = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    transition: all 0.5s ease-out;
    z-index: ${(props) => (props.show ? 2 : 0)};
    display: flex;
    flex-direction: column;
    opacity: ${(props) => (props.show ? 1 : 0)};

    header {
      display: flex;
      color: #ffffff;
      align-items: center;

      h1 {
        color: ${(props) => props.colorTitle};
        font-size: 1.5em;
        font-weight: bold;
      }

      h2 {
        color: ${(props) => props.colorSubTitle};
        font-size: 1.1em;
      }

      svg {
        color: ${(props) => props.colorIcon};
        opacity: 0.5;
        margin-left: auto;
        font-size: 4em;
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }


    section {
      text-align: center;
      color: #ddd;
      margin: auto;
      transition: all 0.2s ease;
      opacity: ${(props) => (props.showError ? 1 : 0)};

      .links-error {
        display: inline-flex;
        margin: auto;

        div {
          color: ${(props) => props.colorButtonError};
          background: ${(props) => props.backgroundColorButtonError};
          display: flex;
          align-items: center;
          margin: 0 5px;
          padding: 10px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.2s ease;

          &:hover {
            background: ${(props) => props.backgroundColorHoverButtonError};
            color: ${(props) => props.colorHoverButtonError};
          }
        }
      }

      h1 {
        font-size: 2em;
      }

      p {
        font-size: 1.5em;
        margin: 20px;
      }
    }
`;

export const StandyByInfo = styled.div`
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 50px;
    transition: all 0.5s ease-out;
    opacity: ${(props) => (props.show ? 1 : 0)};

    section {
      margin: auto 0;
      padding-top: 100px;
      padding-left: 100px;

      h3 {
        color: #fff;
        font-size: 1.1em;
        margin-bottom: 5px;
      }

      h1 {
        font-weight: bold;
        font-size: 3em;
        color: ${(props) => props.primaryColor};
        margin: 10px 0;
      }

      h2 {
        color: ${(props) => props.secundaryColor};
        font-size: 20px;
        margin-top: -5px;
        font-weight: bold;
      }
    }

    footer {
      margin-top: auto;
      margin-bottom: 50px;
      margin-left: auto;
      text-transform: uppercase;
      color: #ffffff;
    }
`;

export const Loading = styled.div`
  position: absolute;
  height: 100% !important;
  width: 100% !important;
  display: flex;

div {
  display: flex;
  margin: auto;

  div {
    &:nth-child(2) {
      animation-delay: 0.1s;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
    }

    animation: 1s linear toUpOpacity infinite;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.color};
    margin: auto 5px;
  }
}
`;

export const VolumeControll = styled.div`
  .volumn-controll {
    bottom: 70px;
    left: -50px;
    position: absolute;
    transform: rotate(-90deg);

    .box {
      background: #222222;
      padding: 10px 18px;
      border-radius: 5px;
    }

    .box-connector {
      width: 20px;
    }

    input {
      border: none;
      appearance: none;
      height: 5px;
      background: #999;
      background: linear-gradient(93deg, ${(props) => props.primaryColor} ${(props) => props.percentVolume}%, #fff ${(props) => props.percentVolume}%);
      width: 70px;
    }

    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${(props) => props.primaryColor};
      cursor: pointer;
}
  }
`;
