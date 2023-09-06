import { View, Text ,Image} from 'react-native'
import React from 'react'
import tw from "twrnc"
const logo = require('../../assets/insta.png')
const like = require('../../assets/heart.png')
const message = require('../../assets/messenger.png')
export default function Header() {
  return (
    <View style={tw`h-17 flex flex-row justify-between bg-white`}>
        <View style={tw`flex flex-row justify-between items-center mt-2 ml-2`}>
            <Image source={logo} style={{height:120,width:120,resizeMode:"contain",marginLeft:13}}/>
        </View>
        
        <View style={tw`flex flex-row justify-between items-center`}>
            <Image  source={like} style={{height:30,width:30,resizeMode:"contain",marginRight:15}}/>
            <Image source={message} style={{height:30,width:30,resizeMode:"contain",marginRight:15}}/>
        </View>
     </View>
  )
}