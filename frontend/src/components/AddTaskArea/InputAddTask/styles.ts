import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 15px;
`

export const Plus = styled.div`
    position: absolute;
    left: 6%;
`

export const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    padding-left: 40px;
    width: 90%;

    border: 1px solid gray;
    border-radius: 15px;
    color: white;

    background-color: transparent;
`

export const Button = styled.button`
    width: 100px;
    padding: 10px;

    border-radius: 10px;
    outline: none;
    border: none;
    transition: .3s;
    
    cursor: pointer;

    &:hover {
        filter: brightness(0.8);
    }
`