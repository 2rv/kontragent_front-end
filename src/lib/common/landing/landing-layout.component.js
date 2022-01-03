import styled from 'styled-components';

export function LandingLayout({ children, className }) {
  return (
    <MainContainer className={className}>
      <MainContent>
        {children}
      </MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContent = styled.div`
  padding: 32px;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 20px;
  }
`;
