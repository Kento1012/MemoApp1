import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Header from '../../component/Header';
import MemoListItem from '../../component/MemoListItem';
import CircleButton from '../../component/CircleButton';
import Icon from '../../component/icon';

const handlePress = (): void => {
    // 新規作成処理
    router.push('/memo/create');
}

const List = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
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