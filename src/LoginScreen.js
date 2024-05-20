import React from 'react';
import { Pressable } from 'react-native';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Hello.</Text>
        <Text style={{ fontSize: 25, color: 'gray' }}>Wellcom</Text>
        <Text style={{ fontSize: 25, color: 'gray' }}>Back</Text>
      </View>
      <View style={{ height: '40%' }}>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Email</Text>
        <TextInput
          style={{ width: '90%', alignSelf: 'center' }}
          label="Username"
          secureTextEntry
          left={<TextInput.Icon icon="mail" />}
        />
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Password</Text>
        <TextInput
          style={{ width: '90%', alignSelf: 'center' }}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />
        <View>
          <Pressable style={{ justifyContent: 'flex-start', alignItems: 'center', marginLeft: 200, paddingTop: 20 }}>
            <Text style={{ color: 'blue' }}>Forgot password?</Text>
          </Pressable>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={{ width: '85%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 5 }}>
            <Text style={{ color: '#fff' }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
