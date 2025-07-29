import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../component/Header';
import CircleButton from '../../component/CircleButton';

const Detail = (): React.JSX.Element => {
    return(
        <View>
            <Header />

            <View>
                <Text>買い物リスト</Text>
                <Text>2025年07月28日 10:00</Text>
            </View>

            <ScrollView>
                <Text>
                    買い物リストだけど、お菓子を買ってきた。
                    ぼくはお菓子が好きなので、お菓子を買ってきた。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                    どうして買ってきてしまったんだろう。
                </Text>
            </ScrollView>

            <CircleButton>+</CircleButton>
        </View>
    )
}

export default Detail;