import { View, Text, TextInput,StyleSheet } from 'react-native';
import Header from '../../component/Header';
import Button from '../../component/Button';

const Login = (): React.JSX.Element => {
    return(
        <View style={style.container}>
            <Header />
            <View style={style.inner}>
                <Text style={style.title}>Log In</Text>
                <TextInput style={style.input} value='Email address'  />
                <TextInput style={style.input} value='Password'/>
                <Button label='Submit' />
                <View style={style.footer}>
                    <Text style={style.footerText}>Don't have an account?</Text>
                    <Text style={style.footerLink}>Sign up here!</Text>
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

export default Login;