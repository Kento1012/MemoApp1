import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '../../component/Header';
import CircleButton from '../../component/CircleButton';
import Icon from '../../component/icon';

const handlePress = (): void => {
    // 編集処理
    router.push('/memo/edit');
}

const Detail = (): React.JSX.Element => {
    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年07月28日 10:00</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リストだけど、お菓子を買ってきた。
                    ぼくはお菓子が好きなので、お菓子を買ってきた。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                </Text>
            </ScrollView>

            <CircleButton style={{ top:160, bottom: 'auto' }} onPress={handlePress}>
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
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText:{
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
    }
})

export default Detail;