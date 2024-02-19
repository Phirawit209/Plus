import React from 'react';
//import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Button, View , Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme } from 'galio-framework';


class Home extends React.Component {
    render() {
      const { navigation} = this.props;
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>หน้าจอหลัก</Text>
            
            <Button
              title="เข้าสู่ระบบ"
              onPress={() => navigation.navigate('Login')}
            />

            
          <Button
              title="ลงทะเบียน"
              onPress={() => navigation.navigate('Register',{serviceType: 1, slotType: 1, appointDatetime: '2023-12-21', description: 'test' })}
            />  
  
      
          <Button
              title="นัดหมายบริการ"
              onPress={() => navigation.navigate('AppointCalendar',{serviceType: 1, slotType: 1, appointDatetime: '2023-12-21', description: 'test' })}
            />  
          </View>
      );
    }
  }
  export default Home;

