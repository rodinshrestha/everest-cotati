import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 100;
    background-color: ${theme.coreColor.bg};

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    &.sticky {
      position: fixed;
      width: 100vw;
      backdrop-filter: blur(10px);
      animation: slideDown 0.35s ease-out;

      &.showBoxShadow {
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      height: 90px;

      @media (max-width: ${theme.breakPoints.md}) {
        height: 60px;
      }

      .logo-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        text-decoration: none;
        font-family: ${theme.font.defaultSystemTheme};
        border-radius: 50%;
        overflow: hidden;
        width: 140px;
        height: 140px;
        margin-top: 10px;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);

        @media (max-width: ${theme.breakPoints.md}) {
          width: 100px;
          height: 100px;
        }

        img {
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }

        .logo-title {
          display: flex;
          align-self: center;
          color: ${theme.coreColor.textColor};
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 22px;
          line-height: 27.2px;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            bottom: -8px;
            height: 2px;
            width: 100%;
            visibility: hidden;
            background-color: ${theme.color.white["100"]};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover {
            &::before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }

          @media (max-width: ${theme.breakPoints.md}) {
            font-size: 12px;
          }
        }
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;

        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          font-size: 18px;
          @media (max-width: ${theme.breakPoints.Lg}) {
            display: none;
          }

          .menu-list {
            cursor: pointer;
            position: relative;

            &::before {
              position: absolute;
              content: "";
              bottom: -8px;
              height: 2px;
              width: 100%;
              visibility: hidden;
              background-color: ${theme.coreColor.textColor};
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transition: all 0.3s ease-in-out 0s;
              transition: all 0.3s ease-in-out 0s;
            }

            &:hover {
              opacity: 0.8;
              &::before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
              }
            }

            &.active {
              &::before {
                visibility: visible;
                transform: scaleX(1);
                -webkit-transform: scaleX(1);
              }
            }
            a {
              color: inherit;
            }
          }
        }

        .menu-link {
          outline: none;
          background-color: transparent;
          border: none;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.25em;
          color: ${theme.color.white["100"]};
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
          transition: all 0.4 ease-in-out;
          &:hover {
            opacity: 0.8;
          }

          @media (max-width: ${theme.breakPoints.md}) {
            display: none;
          }
        }
      }
    }
  `}
`;
