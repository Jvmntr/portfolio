import React from 'react';
import {
    FooterContainer,
    CopyrightText,
    DevMessage
} from './styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <CopyrightText>
                @{currentYear} Jvmntr. Todos os direitos reservados.
            </CopyrightText>
            <DevMessage>
                Feito com 🖤 por João <span className="nickname">'Jvmntr'</span> Monteiro
            </DevMessage>
        </FooterContainer>
    );
};

export default Footer;