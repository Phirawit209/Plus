import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from '../components/icon';
import { colors, sizes } from '../constants/Theme2';
import { StyleSheet, Animated } from 'react-native';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Passcode from '../screens/Passcode';
import Theme1 from '../constants/Theme1';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;

  const tabBarIcon = useCallback(({ focused, color, size }) => {
    return (
      <Icon
        icon={name}
        size={size}
        style={{
          tintColor: focused ? colors.primary : colors.gray,
        }}
      />
    );
  }, []);

  useEffect(() => {
    Animated.spring(offsetAnimation, {
      toValue: index * (sizes.width / tabs.length),
      useNativeDriver: true,
    }).start();
  }, [index]);

  const tabs = useMemo(() => [
    {
      name: 'Home',
      screen: HomeScreen,
    },
    {
      name: 'Search',
      screen: SearchScreen,
    },
    {
      name: 'Passcode',
      screen: Passcode,
    },
    {
      name: 'AppointCalendar',
      screen: AppointCalendar,
    },
  ], []);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon,
        }}
      >
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}

      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );};