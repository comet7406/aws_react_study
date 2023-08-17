import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 500px;
    background: linear-gradient(to right, #314755, #26a0da);`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
    color: #607D8B;    
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #314755;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
`;

export const SProfileImg = css`
    width: 100%;
`;

export const SFileHidden = css`
    display: none;
`;

export const SContainerBottom = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    margin: 20px 0px;
    color: #eee;    
`;

export const SUsername = css`
    margin-bottom: 5px;
`;

export const SName = css`
    margin-bottom: 5px;
`;

export const SEmail = css`
    margin-bottom: 5px;
`;

export const SButton = css`
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    font-weight: bold;
    background-color: #E0F7FA;
    color: white;
    text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    box-shadow: inset 0px 1px 0px rgba(255,255,255,1),0px 1px 3px rgba(0,0,0,0.3);
    outline: none;

`;


