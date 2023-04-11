import { PropsWithChildren, useState, useEffect } from 'react';

import {
	View,
	FlatList,
	Button,
	Alert
} from 'react-native';

import { styles } from './styles';

type ButtonsProps = PropsWithChildren<{
	displayValue: string | undefined | null;
	setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
	setDisplayHistory: React.Dispatch<React.SetStateAction<string[]>>;
}>;

const buttonsSymbols = [
	'AC', 'CE', '%', '/', 
	'7', '8', '9', '*', 
	'4', '5', '6', '-', 
	'1', '2', '3', '+',
	'0', '00', '.', '='
]

export default function Buttons({ children, displayValue, setDisplayValue, setDisplayHistory }: ButtonsProps): JSX.Element {

	const [dataSource, setDataSource] = useState<string[]>([]);

	useEffect(()=>{
		setDataSource(buttonsSymbols);
	}, []);

	function updateDisplayValue (symbol: string) {
		if(symbol === 'AC'){ //zera tudo
			setDisplayHistory([]); 
			setDisplayValue("");
		}
		else if(symbol === 'CE') //limpa o registro atual
			setDisplayValue("");
		else if(symbol === '='){ //acrescenta o que tá no value no history e limpa value
			if(displayValue){
				const result = eval(displayValue);
				setDisplayHistory(prev=>[...prev, displayValue]);
				setDisplayValue(result);
			}
		}
		else  //qualquer outra coisa vai concatenando com value
			setDisplayValue(prev=>prev+=symbol);
	}

	return (
		<FlatList
			data={dataSource}
			renderItem={({item}) => (
				<View
					style={{
					flex: 1,
					flexDirection: 'column',
					margin: 1
					}}
				>
					<Button
						title={item}
						onPress={() => updateDisplayValue(item)}
					/>
				</View>
			)}
			numColumns={4}
			keyExtractor={(item, index) => ("button"+index)}
			style={styles.buttonsContainer}
		/>
	);
}
