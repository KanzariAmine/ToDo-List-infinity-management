import styled from "styled-components";
export const Navigation = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.lightGray};
  nav {
    display: flex;
    padding: 10px;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin: 0 15px;
    justify-content: space-between;
    font-size: 14px;
    text-decoration: none;
    list-style-type: none;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    list-style-type: none;
    color: #000;
    letter-spacing: 2px;
    font-weight: 500px;
    cursor: pointer;
  }
`;
