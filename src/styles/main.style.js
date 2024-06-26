import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 80%;
    height: 100%;
`;

export const ChatContainer = styled.div`
    

    overflow-y: auto;
    width: 100%;
    padding: 0 calc(50% - 24rem); // 50% - 24rem = 50% - 384px = -334px
    height: 100%;
    max-height: calc(100% - 3.75rem);

    > div {

    }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 48rem;
    max-width: 80%;
    background-color: #f4f4f4;

    padding: .375rem .75rem;
    border-radius: 26px;
    gap: .5rem;

    margin-bottom: 2rem;

    .button {
        color: #ffffff;
        background-color: #000000;
        border-radius: 9999px;

        width: 2rem;
        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        margin: 0;
        padding: 0;
        border: 0 solid #e3e3e3;

        :hover {
            opacity: 0.7;
        }
    }

    .button-disabled {
        color: #f4f4f4;
        background-color: #d7d7d7;
        cursor: not-allowed;
    }

    input {
        min-width: 0;
        height: 40px;
        overflow-y: hidden;

        max-height: 25dvh;
        color: #0d0d0d;
        background-color: transparent;
        border: 0;
        border-color: #f4f4f4;
        border-radius: 0;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: .5rem .75rem;

        appearance: none;
        resize: none;
        flex-grow: 1;

        outline: none;

        font-family: inherit;

        :active, :focus {
            outline: none !important;
            border-color: #f4f4f4;
            box-shadow: none;
        }
    }
`;

export const MessageContainer = styled.div`
    padding: .75rem 1.25rem;
    
    display: flex;
    justify-content: flex-end;  
    
    > div {
        max-width: 80%;
        border-radius: 5px;
        padding: .625rem 1.25rem;

        background-color: #f4f4f4;
    }
`;

export const AnswerContainer = styled.div`

    padding: .75rem 1.25rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    &:before {
        display: block;
        content: "";
        background: url( ${process.env.PUBLIC_URL+"/logo192.png"}) center no-repeat;
        background-size: 40px 40px;
        /* content : ""; */
        width: 40px;
        height: 40px;
        line-height: 0px;
        border: 1px solid #d6f6ff;
        border-radius: 90%;
        padding: 3px;
        position: relative;
        left: -56px;
        top: 44px;
    }

    & .answer-main {
        padding: 1.25rem;
        border-radius: 8px;
        background-color: #fafafa;
        white-space: pre-line;
    }

    & .answer-menu{
        display: flex;
        flex-direction: row;
        font-weight: bold;
        margin-bottom: .5rem;
        user-select: none;
    }

    & .answer-source-wrapper{
        background-color: #eaeaea;
        margin-top: 1rem;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        padding: 1.5rem 1rem 1rem 1rem;
    }

    & .arrow {
        width: 1rem;
        transition: transform 0.3s ease;
        margin-right: .25rem;
        transform: rotate(-90deg);

        &.open {
            transform: rotate(0deg);
        }
    }

    & .answer-source {
        white-space: pre-line;
    }
`;