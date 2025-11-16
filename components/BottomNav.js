import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './Home';
import TransactionScreen from './Transaction';
import CustomerScreen from './Customer';
import SettingScreen from './Setting';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#F06B7A',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Transaction"
                component={TransactionScreen}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="receipt" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Customer"
                component={CustomerScreen}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="people" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Setting"
                component={SettingScreen}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
