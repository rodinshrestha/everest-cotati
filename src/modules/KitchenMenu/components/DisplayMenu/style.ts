import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    gap: 120px;

    @media (max-width: ${theme.breakPoints.md}) {
      gap: 50px;
    }

    &:hover {
      .h6 {
        text-decoration: underline;
      }

      .price-group {
        font-weight: bold;
        .span {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: ${theme.breakPoints.md}) {
      &:hover {
        .h6 {
          text-decoration: unset;
        }

        .price-group {
          font-weight: unset;
          .span {
            text-decoration: unset;
          }
        }
      }
    }
    .price-group {
      display: flex;
      white-space: nowrap;

      .span {
        display: flex;
        align-self: center;
      }
    }
  `}
`;
