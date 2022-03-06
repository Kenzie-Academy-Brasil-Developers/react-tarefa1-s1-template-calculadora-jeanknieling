import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--gray);
    border-radius: 25px;
    box-shadow: inset -8px -10px 10px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 320px;
    height: 500px;
    position: relative;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    height: 300px;
    width: 95%;

    #equalButton {
        color: var(--white);
        background-color: var(--orange);
    }

    #clearButton {
        font-size: 28px;
        position: absolute;
        top: 120px;
        left: 18px;
    }
`;