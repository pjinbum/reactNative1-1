import React from 'react'

import { StyleSheet } from 'react-native'

import styled ,{css ,ThemeProvider} from 'styled-components/native'
import Button from './component/Button'
import {lightTheme , darkTheme} from './Theme'
import { useState } from 'react'
import { Switch } from 'react-native'
import {theme} from './Theme'


// const nativeCss = css`
//   color:#eee;
//   font-size:20px;
// `;


const Container = styled.View`
  flex :1 ; background-color: ${props=>props.theme.background};  align-items : center;
  justify-content:center;
`;


const App = () => {
    const [isDark , setIsDark] = useState(false);
    const _togleSwitch = () => setIsDark(!isDark) ;
  return (
    // <View  style={{flex :1 , flexDirection :'row', alignItems :'flex-end' , justifyContent : 'center'}}>
    //     <Text style={aa.text1}>첫번째 스타일</Text>
    //     <Text style={aa.text2}>두번째 스타일</Text>
    //     <Text style={[aa.text2 , aa.text3]}>세번째 스타일</Text>
    //     <Text style={[aa.text3 , {color :'pink'}]}>네번째 스타일</Text>
    //     <View style={style1.box}>
    //         <Text style={style2.text}>외부 스타일</Text>

    //     </View>
    //     <Header></Header>
    //     <Contents></Contents>
    //     <Footer></Footer>
    // </View>
    <ThemeProvider theme={isDark? darkTheme : lightTheme}>
        <Container>
            <Switch value ={isDark} onValueChange={_togleSwitch}></Switch>
            <Button title='Login'></Button>
            <Button title='Sign Up'></Button>
        </Container>
    </ThemeProvider>
  )
}

// const aa = StyleSheet.create({
//   text1 : {
//     color :'red' ,

//   } ,
//   text2 :{
//     fontSize : 30 ,
//     color :'blue'
//   } ,
//   text3 :{
//     fontWeight :'800' ,
//     padding : 20,
//   }

// })

export default App ;