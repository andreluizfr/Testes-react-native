/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
	SafeAreaView,
	StatusBar,
	Text,
	useColorScheme,
} from 'react-native';

import { styles } from './Styles';
import { colors } from './Constants/Colors';
import Display from './Components/Display';
import ButtonsContainer from './Components/ButtonsContainer';



function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? colors.dark : colors.light,
		height: "100%"
	};

	const [displayValue, setDisplayValue] = useState("");
	const [displayHistory, setDisplayHistory] = useState<string[]>([]);

	return (
		<SafeAreaView style={backgroundStyle}>
			
			<StatusBar 
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>

			<Text style={styles.title}>
				Calculadora
			</Text>

			<Display value={displayValue} history={displayHistory}/>

			<ButtonsContainer 
				displayValue={displayValue} 
				setDisplayValue={setDisplayValue} 
				setDisplayHistory={setDisplayHistory}
			/>
				
		</SafeAreaView>
	);
}

export default App;
