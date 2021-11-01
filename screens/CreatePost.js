import React,{Component} from 'react';
import { render } from 'react-dom';
import {Text,View} from 'react-native';

export default class CreatePost extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
                <Text> Create Post </Text>
            </View>
        )
    }
}