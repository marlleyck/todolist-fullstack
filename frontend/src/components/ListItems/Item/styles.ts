import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;

    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    padding: 10px;

    background-color: rgb(48, 48, 48);

    z-index: 0;

    user-select: none;
    cursor: pointer;
`

export const Title = styled.h2`
    font-family: sans-serif;
    color: white;
`

export const Checkbox = styled.input`
    width: 25px;
    height: 25px;
`

export const ContentDescription = styled.div<{show: boolean}>`
    width: 250px;
    height: 150px;

    display: ${props => props.show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    margin-top: -10px;
    margin-bottom: 5px;

    z-index: 1;

    border: 1px solid red;
`

export const Description = styled.p`
    font-family: sans-serif;
    font-size: 1.5rem;
    color: white;
`