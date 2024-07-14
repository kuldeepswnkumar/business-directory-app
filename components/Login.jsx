import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser.jsx'


WebBrowser.maybeCompleteAuthSession();
const Login = () => {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }) });

            // if (createdSessionId) {
            //     setActive!({ session: createdSessionId });
            // } else {
            //     Use signIn or signUp for next steps such as MFA
            // }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View>
            <View style={{ flex: 1, marginVertical: 140, alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/front.jpg')}
                    style={{ width: 250, height: 500, borderRadius: 10, borderColor: 'black', borderWidth: 3 }}
                />
            </View>
            <View style={{ marginTop: 380 }}>
                <View>
                    <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center', margin: -20, backgroundColor: '#fff', padding: 10 }}>Your Ultimate
                        <Text style={{ color: '#1679AB' }}> Community Business Directory </Text>
                        App</Text>

                    <Text style={{ margin: 10, textAlign: 'center' }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        Contrary to popular belief, Lorem Ipsum is not.
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.btn}>Let's get start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#1679AB',
        padding: 15, color: '#fff',
        fontFamily: 'outfit-regular',
        fontSize: 20, width: 300,
        textAlign: 'center',
        marginVertical: 20,
        borderRadius: 10
    }
})