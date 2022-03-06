import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: var(--gray-50);
    border-radius: 10px;
    border: none;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);
    color: var(--black-50);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    height: 50px;
    width: 65px;
    margin: 3px;

    :active {
        transform: translateY(2px);
    }
`;