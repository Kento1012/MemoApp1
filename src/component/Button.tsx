import { View, Text, StyleSheet } from 'react-native';

interface Props {
    label: string;
}

const Button = (props: Props): React.JSX.Element => {
    const { label } = props;
    return(
        <View style={style.button}>
            <Text style={style.buttonText}>{label}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 24,
    }
})

export default Button;