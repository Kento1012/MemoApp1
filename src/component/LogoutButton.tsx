import { TouchableOpacity, Text, Alert,StyleSheet } from "react-native"
import { auth } from "../config"
import { router } from "expo-router"
import { signOut } from "firebase/auth"

const handlePress = (): void => {
    signOut(auth)
    .then(() => {
        router.replace("/auth/log_in")
    })
    .catch(() => {
        Alert.alert('ログアウトに失敗しました')
    })
}

const LogoutButton = (): React.JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.7)',
    }
})

export default LogoutButton;