import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Dishcovery. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 900px;
  z-index: 1000;
`;
