import React from 'react';
import styled from 'styled-components';


const HeaderSec = ({img, name}) => {
    return (
    <bgImg>
        <section className="bg-image">
            hello
        hello
        hello
        </section>
        
    </bgImg>
    )
}

export default HeaderSec;


const bgImg = styled.header`
    height: 50px;
    .bg-image{
        background: url("${props=>this.props.img}");
        color: red;
        
    }
`