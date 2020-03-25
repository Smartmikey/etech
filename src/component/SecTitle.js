import React from 'react';
import styled from 'styled-components';

export const SecTitle =({name})=>{
    return(
        <div className="row t-center">
            <SECTitle className="mx-auto my-3">{name}</SECTitle>
           

        </div>
    )
}


const SECTitle = styled.h2`
display: block;
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: 2.3rem;
text-align: center;
color: var(--mainBlack);
text-transform: uppercase;


`
