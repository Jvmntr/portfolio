import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2.5rem 2rem;
    background-color: var(--background-primary);
    color: var(--text-secondary);
    font-family: "Fira Code", monospace;
    font-size: 0.9rem;
    box-sizing: border-box;
    border-top: 1px solid var(--accent-color);

    @media (max-width: 480px){
        padding: 2rem 1rem;
        font-size: 0.8rem
    }
`;

export const CopyrightText = styled.p`
    margin: 0 0 0.5rem 0;
    text-align: center;
`;

export const DevMessage = styled.p`
    margin: 0;
    text-align: center;
    color: var(--text-secondary);
`;
