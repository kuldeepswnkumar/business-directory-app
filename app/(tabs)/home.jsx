import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../../components/Login'
import Header from '../../components/Home/Header'
import Silder from '../../components/Home/Silder'

const home = () => {
    return (
        <View>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Silder />


            {/* Category */}


            {/* Business Populer list */}
        </View>
    )
}

export default home