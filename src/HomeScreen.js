import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6571d447d61ba6fcc013b1b7.mockapi.io/nhanIT/Members');
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', height: 1000 }}>
      <ScrollView>
        <View style={{ height: 75, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '50%' }}>
            <Image style={{ width: 40, height: 40 }} source={require('../assets/Avatar 17.jpg')} />
            <Text style={{ fontWeight: 'bold' }}>Pham Duc Nhan</Text>
          </View>
          <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '20%' }}>
            <FontAwesome name="search" size={24} color="black" />
            <Ionicons name="chatbox-ellipses" size={24} color="black" />
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: 'grey' }}> </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 75 }}>
          <View style={{ width: '70%', paddingLeft: 20 }}>
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>Today event highlights</Text>
            <Text style={{ color: '#000', fontSize: 16 }}>Today event highlights</Text>
          </View>
          <View style={{ width: '30%', paddingRight: 20 }}>
            <Text style={{ fontSize: 16, color: 'blue' }}>See Detail</Text>
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: 'grey' }}> </View>

        <View style={{ height: 300, padding: 20 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Popular profile</Text>
            <Text style={{ fontSize: 16, color: 'blue' }}>See more</Text>
          </View>
          <View style={{ borderWidth: 0.5, padding: 5 }}>
            <View style={{ height: 90 }}>
              <Image style={{ width: '100%', height: 50 }} source={require('../assets/Image 141.jpg')} />
              <Image style={{ width: 60, height: 60, position: 'absolute', top: 15, borderRadius: 30, left: 20 }} source={require('../assets/Avatar 17.jpg')} />
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <View >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Jordan Mendez</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>CEO & Founder</Text>
              </View>
              <View>
                <Pressable style={{ width: 100, height: 30, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ color: 'blue' }}>Follow</Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={{ color: 'gray', fontSize: 14 }}>1789 North Street, San Anotina, TX 78021</Text>
            </View>
            <View>
              <Text style={{ color: 'blue' }}>#managing, #careedivice, #design</Text>
              <Text style={{ color: 'blue' }}>#talentmanagement, #createive, #culture</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <View>
                <Image style={{ width: 20, height: 20, position: 'absolute' }} source={require('../assets/Avatar 22.jpg')} />
                <Image style={{ width: 20, height: 20, position: 'absolute', left: 10 }} source={require('../assets/Avatar 23.jpg')} />
                <Image style={{ width: 20, height: 20, position: 'absolute', left: 20 }} source={require('../assets/Avatar 24.jpg')} />
              </View>
              <Text style={{ paddingLeft: 50 }}>Followed by Hanna and 4 others</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: 'grey' }}> </View>

        <View style={{ height: 270, padding: 20 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Everys that you may like</Text>
            <Text style={{ fontSize: 16, color: 'blue' }}>See more</Text>
          </View>
          <View style={{ borderWidth: 0.5, padding: 5 }}>
            <View style={{ height: 110 }}>
              <Image style={{ width: '100%', height: 100 }} source={require('../assets/Image 142.jpg')} />

            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <View >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>How to boost and nurture </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>creativity</Text>
              </View>
              <View>
                <Pressable style={{ width: 100, height: 30, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ color: 'blue' }}>Register</Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="calendar-month" size={18} color="black" />
                <Text style={{ color: 'gray', fontSize: 14 }}> Today, 2:00 PM</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="users" size={18} color="black" />
                <Text style={{ color: 'gray', fontSize: 14 }}>350 attendees</Text>
              </View>
            </View>
          </View>
        </View>



        <View style={{ height: 500, padding: 20 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>People you may know</Text>
            <Text style={{ fontSize: 16, color: 'blue' }}>See more</Text>
          </View>
          <Text>From your university</Text>
          <FlatList
            style={{ padding: 10 }}
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ width: '45%', marginRight: 20, borderWidth: 0.5, marginBottom: 20 }}>
                  <View style={{ height: 90, width: '100%' }}>
                    <Image style={{ width: '100%', height: 50 }} source={{ uri: item.bg }} />
                    <Image style={{ width: 60, height: 60, position: 'absolute', top: 15, borderRadius: 30, left: 50 }} source={{ uri: item.avt }} />
                  </View>
                  <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>{item.name}</Text>
                  <Text style={{ alignSelf: 'center', padding: 5 }}>{item.des}</Text>
                  <Pressable style={{ width: 70, height: 25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5, marginBottom: 5 }}>
                    <Text style={{ color: 'blue' }}>Connect</Text>
                  </Pressable>
                </View>
              )
            }} />
        </View>
        <View style={{ height: 10, backgroundColor: 'grey' }}> </View>
        <View style={{ height: 500, padding: 20 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Recommend group for you</Text>
            <Text style={{ fontSize: 16, color: 'blue' }}>See more</Text>
          </View>
          <Text>From your university</Text>
          <FlatList
            style={{ padding: 10 }}
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ width: '45%', marginRight: 20, borderWidth: 0.5, marginBottom: 20 }}>
                  <View style={{ height: 90, width: '100%' }}>
                    <Image style={{ width: '100%', height: 50 }} source={{ uri: item.bg }} />
                    <Image style={{ width: 60, height: 60, position: 'absolute', top: 15, borderRadius: 30, left: 50 }} source={{ uri: item.avt }} />
                  </View>
                  <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>{item.name}</Text>
                  <Text style={{ alignSelf: 'center', padding: 5 }}>{item.des}</Text>
                  <Pressable style={{ width: 70, height: 25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5, marginBottom: 5 }}>
                    <Text style={{ color: 'blue' }}>Join</Text>
                  </Pressable>
                </View>
              )
            }} />
        </View>

      </ScrollView>
    </View>
  );
}

export default HomeScreen;
