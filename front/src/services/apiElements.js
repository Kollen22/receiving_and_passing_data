import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const DivWraper = styled.div`
    width: 300px;
    height: 400px;
    background: #ccc;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px 20px;
    border: 10px solid white;
    border-radius: 40px;
`;

export const H = styled.h1`
    font-size: 2rem;
    padding: 10px 0;
    text-align: center;
`;