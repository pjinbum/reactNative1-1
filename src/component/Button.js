import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styled from 'styled-components'


const Buttoncont = styled.TouchableOpacity`
 background-color: ${props=>props.title==='Login' ? props.theme.blue : props.theme.purple};
 border-radius: 5px;
 padding:15px 30px;
 margin:10px 0;
 justify-content: center;
`

const Title =styled.Text`
 font-size: 20px;
 font-weight: 700;
 color : ${props=>props.theme.text}
`;

const Button = props => {
  return (
    <Buttoncont title={props.title}>    
        <Title>{props.title}</Title>
    </Buttoncont>
  )
}

export default Button;

    /* <Text style={{fontSize:25}}>{props.title}</Text> */