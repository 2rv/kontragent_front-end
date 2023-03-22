import styled from 'styled-components';

export function LandingLayout({ children, className, id }) {
  return (
    <MainContainer id={id} className={className}>
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContent = styled.div`
  padding: 100px 32px;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 0px) and (max-width: 599px) {
    padding: 50px 24px;
  }
`;
