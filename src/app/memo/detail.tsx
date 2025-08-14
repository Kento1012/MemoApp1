import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { onSnapshot, doc } from 'firebase/firestore';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import CircleButton from '../../component/CircleButton';
import Icon from '../../component/icon';
import { db, auth } from '../../config';
import { type Memo } from '../../../types/memo';

const handlePress = (): void => {
    // 編集処理
    router.push('/memo/edit');
}

const Detail = (): React.JSX.Element => {
    const { id } = useLocalSearchParams();
    console.log(id)
    const [memo, setMemo] = useState<Memo | null>(null);

    useEffect(() => {
        if(auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos/${id}`);
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo;
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt,
            })
        })
        return unsubscribe;
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>

            <CircleButton style={{ top:60, bottom: 'auto' }} onPress={handlePress}>
                <Icon name="pencil" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHeader:{
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    memoDate:{
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    }, 
    memoBody:{
        paddingHorizontal: 27,
    },
    memoBodyText:{
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
    }
})

export default Detail;