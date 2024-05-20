import React from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { View, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'space-between'}}>
      <View style={{width:'100%',height:'80%',justifyContent:'center',alignItems:'center'}}>
        <Image style={{width:200,height:200}} source={require('../assets/Image 130.jpg')}/>
        <Text style={{fontSize:20,paddingTop:20}}>Find Your Dream Job ToDay</Text>
      </View>
      <View style={{height:'20%',alignItems:'center',justifyContent:'space-around'}}>
        <Pressable 
        onPress={()=>{
          navigation.navigate('Login')
        }}
        style={{width:'85%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:5}}>
          <Text style={{color:'#fff'}}>Sign In</Text>
        </Pressable>
        <Pressable style={{width:'85%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderRadius:5,borderWidth:1,borderColor:'blue'}}>
          <Text style={{color:'#000'}}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SplashScreen;
