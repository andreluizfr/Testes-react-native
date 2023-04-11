import {
	View,
    Text,
    useColorScheme,
    ScrollView
} from 'react-native';

import { styles } from './styles';
import { colors } from '../../Constants/Colors';
import { useRef } from 'react';

type DisplayProps = {
    value?: string | undefined | null
    history?: string[] | undefined | null
}

export default function Display({value, history}: DisplayProps): JSX.Element {

    const scrollViewRef = useRef<ScrollView>(null);
    
    const isDarkMode = useColorScheme() === 'dark';

	const backgroundViewStyle = {
		backgroundColor: isDarkMode ? colors.black : colors.white,
        width: '100%',
        padding: 10
	};

    const backgroundTextStyle = {
        backgroundColor: isDarkMode ? colors.lighter : colors.darker,
        color: isDarkMode ? colors.black: colors.white,
        width: '100%',
    }

	return (
		<View style={backgroundViewStyle}>
            <ScrollView 
				contentInsetAdjustmentBehavior="automatic"
                ref={scrollViewRef}
                onContentSizeChange={() => {
                    if(scrollViewRef.current)
                        scrollViewRef.current.scrollToEnd({animated: true})
                }}
				style={styles.historyScroll}
			>
                {
                    history?.map((item, index)=>(
                        <Text style={{...backgroundTextStyle, ...styles.history}} key={"history"+index}>
                            {item}
                        </Text>
                    ))
                }
            </ScrollView>
            <Text style={{...backgroundTextStyle, ...styles.value}}>
                {value}
            </Text>
        </View>
	);
}
