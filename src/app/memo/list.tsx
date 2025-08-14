import { View, Text, StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

import MemoListItem from '../../component/MemoListItem';
import CircleButton from '../../component/CircleButton';
import Icon from '../../component/icon';
import LogoutButton from '../../component/LogoutButton';
import { db, auth } from '../../config';
import { Memo } from '../../../types/memo';

const handlePress = (): void => {
    // 新規作成処理
    router.push('/memo/create');
}

const List = (): React.JSX.Element => {
    const navigation = useNavigation()
    const [memos, setMemos] = useState<Memo[]>([]);
    
    useEffect(() => {
        navigation.setOptions({
        headerRight: () => { return <LogoutButton /> }
        })
    }, [])

    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
        const q = query(ref, orderBy('updatedAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = [];
            snapshot.forEach((doc) => {
                console.log('memo', doc.data())
                const { bodyText, updatedAt } = doc.data();
                remoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt,
                })
            })
            setMemos(remoteMemos);
        })
        return unsubscribe;
    }, [])

    return (
        <View style={styles.container}>
            <View>
                {memos.map((memo) => {
                    return <MemoListItem key={memo.id} memo={memo} />
                })}
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
})

export default List;