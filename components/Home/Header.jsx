import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';

const Header = () => {

    const { user } = useUser();
    return (
        <View style={{ backgroundColor: '#1679AB', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ padding: 20, paddingTop: 40, marginTop: 25 }}>
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={{ width: 60, height: 60, borderRadius: 99 }}
                    />
                </View>
                <View style={{ marginTop: 38, }} >
                    <Text style={{ fontFamily: 'outfit-regular', color: '#fff' }}>Welcome,</Text>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 19, color: '#fff' }}>{user?.fullName}</Text>
                </View>
            </View>
            {/* Searchbar */}
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#fff',
                padding: 12,
                margin: 10,
                marginBottom: 15,
                borderRadius: 10,
                gap: 10
            }}>
                <AntDesign name="search1" size={24} color="#1679AB" />
                <TextInput placeholder='Search...'
                    style={{ fontFamily: 'outfit-regular', fontSize: 20 }} />
            </View>
        </View>
    )
}

export default Header