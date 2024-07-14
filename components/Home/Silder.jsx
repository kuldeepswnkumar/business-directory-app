import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfigs'
import { query, collection, getDocs } from 'firebase/firestore'

const Silder = () => {

    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        GetSliderlist()
    }, [])


    const GetSliderlist = async () => {
        const qry = query(collection(db, "Slider"));
        const querySnape = await getDocs(qry);

        querySnape.forEach(element => {
            // console.log(element.data());
            setSliderList(prev => [...prev, element.data()]);
        });
    }
    return (
        <View>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                marginVertical: 10,
                marginHorizontal: 15,
            }}>
                #Special for you
            </Text>
            <FlatList
                data={sliderList}
                horizontal={true}
                style={{ paddingLeft: 15 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <Image source={{ uri: item.imageUrl }}
                        style={{ width: 300, height: 180, margin: 10, borderRadius: 10 }}
                    />
                }

            />
        </View>
    )
}

export default Silder