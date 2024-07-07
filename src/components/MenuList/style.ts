import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
  ${({ theme }) => css`
    &.menu-list-wrapper {
      background-color: ${theme.coreColor.bg};
      border-top: 1px solid #f2f2f2;
      height: calc(100% - 73.6px);
      position: absolute;
      width: 100%;
      overflow: scroll;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      list-style: none;

      @media (max-width: ${theme.breakPoints.md}) {
        height: calc(100% - 60px);
      }

      li {
        font-family: ${theme.font.defaultSystemTheme};
        &.link-item {
          font-size: 24px;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            bottom: -8px;
            height: 2px;
            width: 100%;
            visibility: hidden;
            background-color: ${theme.coreColor.highlight};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover {
            a {
              color: ${theme.coreColor.highlight};
            }

            &::before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }

          &.active {
            a {
              color: ${theme.coreColor.highlight};
              &::before {
                position: absolute;
                content: "";
                bottom: -8px;
                height: 2px;
                width: 100%;
                left: 0;
                background-color: ${theme.coreColor.highlight};
              }
            }
          }

          @media (max-width: ${theme.breakPoints.md}) {
            font-size: 18px;
          }
        }
        a {
          color: ${theme.coreColor.textColor};
        }
      }
    }
  `}
`;
