import React from 'react';
import styled from 'styled-components';

export const Title =({title, name})=>{
    return(
        <div className="row">
            <HTitle className="mx-auto my-3">{title}</HTitle>
           </div>
    )
}


const HTitle = styled.h2`
display: block;
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 2rem;
line-height: 4rem;
text-align: center;
color: var(--mainBlack);
text-transform: initial;


`
