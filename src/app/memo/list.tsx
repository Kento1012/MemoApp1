import { View, Text, StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';

import MemoListItem from '../../component/MemoListItem';
import CircleButton from '../../component/CircleButton';
import Icon from '../../component/icon';
import LogoutButton from '../../component/LogoutButton';

const handlePress = (): void => {
    // 新規作成処理
    router.push('/memo/create');
}

const List = (): React.JSX.Element => {
    const navigation = useNavigation()
    
    useEffect(() => {
        navigation.setOptions({
        headerRight: () => { return <LogoutButton /> }
        })
    }, [])

    return (
        <View style={styles.container}>
            <View>
                 <MemoListItem />
                 <MemoListItem />
                 <MemoListItem />
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