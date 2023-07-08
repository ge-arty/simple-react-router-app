import styled, { css } from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  background-color: #b5b3a1;
  height: 100vh;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  color: #fff;
  width: 100%;
  text-align: center;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding: 1rem;
`;

export const NavigationWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;
