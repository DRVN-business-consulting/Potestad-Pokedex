import { View, StyleSheet, Button, Image, SafeAreaView, Alert, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { colors } from './themes/colors'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernamecreds = 'ana';
    const passwordcreds = 'hailey';

    const login = () => {
        if(username === '' || password === '') {
           Alert.alert('Username and password is required');
        }
        else if((username !== 'ana') || (password != 'hailey')) {
            Alert.alert('Invalid credentials');
        }else{
            router.replace('pokedex/(tabs)')
        }
        
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.container}>
                <View style={{ marginHorizontal: 20}}>
                    <Image source={require('../assets/logo-ai.jpg')} style={{ resizeMode: 'cover', width: 380, height: 380, margin: 'auto', marginBottom: 10}} />
                    <Text style={{ marginVertical: 10, fontSize:18}}>Username</Text>
                    <TextInput
                        value={username}
                        onChangeText={(value) => setUsername(value)}
                        style=
                            {{ 
                                height: 40,
                                width: '100%',
                                borderColor: 'pink',
                                borderWidth: 2,
                                padding: 10,
                            }}
                        placeholder="Enter username"
                    />
                    <Text style={{ marginVertical: 10, fontSize:18}}>Password</Text>
                    <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        style=
                        {{ 
                            height: 40,
                            width: '100%',
                            borderColor: 'pink',
                            borderWidth: 2,
                            padding: 10,
                            marginBottom : 18
                        }}
                        placeholder="Enter password"
                    />
                    <Button title="Login" color="pink" onPress={login}/>
                </View>       
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%'
    }
})

export default LoginScreen