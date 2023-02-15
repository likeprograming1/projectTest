import styled from 'styled-components';
import React from 'react';

const FooterBody = styled.footer`
  margin: 0 auto;
  max-width: 70%;
  height: 300px;
  border: 1px solid red;
`;

function Footer() {
  return <FooterBody />;
}
export default Footer;
