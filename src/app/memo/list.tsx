import { View, StyleSheet } from 'react-native';
import Header from '../../component/Header';
import MemoListItem from '../../component/MemoListItem';
import CircleButton from '../../component/CircleButton';

const List = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                 <MemoListItem />
                 <MemoListItem />
                 <MemoListItem />
            </View>
            <CircleButton>+</CircleButton>
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