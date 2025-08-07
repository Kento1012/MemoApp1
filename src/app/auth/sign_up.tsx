import { View, Text, Alert, TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../component/Button';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const handlePress = (email: string, password: string): void => {
    // 会員登録処理
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user.uid);
        router.replace('/memo/list');
    })
    .catch((error) => {
        const { code, message } = error;
        console.log(code, message);
        Alert.alert(message);
    })
}

const SignUp = (): React.JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={style.container}>
            <View style={style.inner}>
                <Text style={style.title}>Sign Up</Text>
                <TextInput 
                style={style.input} 
                value={email}  
                onChangeText={(text) => {setEmail(text)} }
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Email Address'
                textContentType='emailAddress'
                />
                <TextInput 
                style={style.input} 
                value={password}
                onChangeText={(text) => {setPassword(text)} }
                autoCapitalize='none'
                secureTextEntry={true}
                placeholder='Password'
                textContentType='password'
                />
                <Button label='Submit' onPress={() => { handlePress(email, password) }}/>
                <View style={style.footer}>
                    <Text style={style.footerText}>Already registered?</Text>
                    <Link href="/auth/log_in" asChild replace>
                        <TouchableOpacity>
                            <Text style={style.footerLink}>Log in.</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 17,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
})

export default SignUp;