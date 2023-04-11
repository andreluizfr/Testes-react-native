import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../Constants/Colors';

const maxHistoryHeight = Dimensions.get('window').height / 3

export const styles = StyleSheet.create({
	value: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.black,
        padding: 10,
        textAlign: 'right',
        fontSize: 16
	},
    historyScroll:{
        backgroundColor: colors.lighter,
        maxHeight: maxHistoryHeight
    },
    history: {
        padding: 5,
        textAlign: 'center',
        fontSize: 12
	}
});