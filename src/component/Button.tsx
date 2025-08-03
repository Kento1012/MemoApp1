import { Text, TouchableOpacity,StyleSheet } from 'react-native';

interface Props {
    label: string;
    onPress?: () => void;
}

const Button = (props: Props): React.JSX.Element => {
    const { label, onPress } = props;
    return(
        <TouchableOpacity onPress={onPress} style={style.button}>
            <Text style={style.buttonText}>{label}</Text>
        </TouchableOpacity>
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