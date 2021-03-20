// Write your Character component here
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Character(props) {
    const { info } = props;

    return (
        <Container className='container'>
            <Name className='title'>{info.name}</Name>
            <Image src={info.image} alt='character'/>
            <InfoContainer className='mini-container'>
                <IndividualInfo><InfoStyling>Species:</InfoStyling> <br />{info.species}</IndividualInfo>
                <IndividualInfo><InfoStyling>Currently:</InfoStyling> <br />{info.status}</IndividualInfo>
                <IndividualInfo><InfoStyling>Current Location:</InfoStyling> <br />{info.location.name}</IndividualInfo>
                <IndividualInfo><InfoStyling>Place of Origin:</InfoStyling> <br />{info.origin.name}</IndividualInfo>
            </InfoContainer>
        </Container>
    );
}

const kf = keyframes`
    100% {
        opacity: 1
    }
`;

const Container = styled.div`
    opacity: 0;
    animation: ${kf} .5s forwards;
    width: 45%;
    border: 4px solid #404558;
    margin-top: 30px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: .3s;
`;

const Name = styled.h1`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #404558;
    width: 100%;
`;

const Image = styled.img`
    border-radius: 180px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .4);
    border: 4px solid white;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 75%;
    margin-top: 20px;
    padding: 30px 10px 10px 10px;
    border-top: 2px dashed #404558;
    background-color: #404558;
`;

const IndividualInfo = styled.p`
    color: white;
    width: 50%;
    height: 50%;
    font-size: .8rem;
    margin-top: 0;
    margin-bottom: 0;
    height: 75px;
    box-sizing: border-box;
`;

const InfoStyling = styled.span`
    font-size: 1.4rem;
`;