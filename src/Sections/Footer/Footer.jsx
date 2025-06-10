import styled from 'styled-components';

const FooterContainer = styled.footer `
  text-align: center;
  background-color: var(--bg-footer);
  color: #a9a9a9;
  padding: 3rem 2rem;
`;

const CopyrightText = styled.p `
  margin-bottom: 0;
`;

export const Footer = () => {
  return (
    <FooterContainer>
        <CopyrightText>Copyright &#169; 2025 - Gabriela Nagamuta</CopyrightText>
    </FooterContainer>
  )
}
