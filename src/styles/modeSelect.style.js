import styled from "styled-components";


export const ModeSelectContainer = styled.div`
    margin : 1rem 0;
    padding: 0 2rem;
    width: 100%;
`;

export const SelectContainer = styled.div`
    margin-bottom: 1rem;
`;

export const SelectModel = styled.select`
    width: 100%;
    font-family: inherit;
    padding: .5rem;

    border-radius: .25rem;
    border: .05rem solid #ddd;
`;


export const InputAPIKeyContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
    }
`;
export const Label = styled.label`
    font-size: 1rem;
    margin-bottom: .25rem;
`;
export const InputAPIKey = styled.input`
    width: 100%;
    font-family: inherit;

    padding: .5rem;
    border-radius: .25rem;
    border: .05rem solid #ddd;

    outline: none;

    &:active, :focus {
        outline: none !important;
        border-color: #f4f4f4;
        box-shadow: none;
    }
`;
// in input tag
export const HideButton = styled.button`
    position: absolute;
    right: 0;
    top: -.4rem;

    background-color: transparent;
    border: none;
    padding: .5rem;
    border-radius: .25rem;
    margin-top: .5rem;
    cursor: pointer;
`;