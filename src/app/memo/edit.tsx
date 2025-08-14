import { View, TextInput,StyleSheet, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import CircleButton from '../../component/CircleButton';
import KeyboardAvoidingView from '../../component/KeyboardAvoidingView';
import Icon from '../../component/icon';
import { db, auth } from '../../config';

const handlePress = (id: string, bodyText: string): void => {
    // 保存処理
    if(auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos/${id}`);
    setDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date()),
    })
        .then(() => {
            router.back();
        })
        .catch((error) => {
            console.error(error);
            Alert.alert('エラーが発生しました');
        })
}

const Edit = (): React.JSX.Element => {
    const id = String(useLocalSearchParams().id);
    const [bodyText, setBodyText] = useState('');
    useEffect(() => {
        if(auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos/${id}`);
        getDoc(ref)
            .then((docRef) => {
                const RemoteBodyText = docRef?.data()?.bodyText;
                setBodyText(RemoteBodyText);
                })
            .catch((error) => {
            console.error(error);
        })
    }, [])
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    multiline style={styles.input} 
                    value={bodyText} 
                    onChangeText={(text) => setBodyText(text)}
                    autoFocus={true}
                />
            </View>
            <CircleButton onPress={() => { handlePress(id, bodyText) }}>
                <Icon name="check" size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27,
    }
})

export default Edit;