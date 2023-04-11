/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import ButtonsContainer from '../../src/Components/ButtonsContainer';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const [displayValue, setDisplayValue] = useState("");
    const [displayHistory, setDisplayHistory] = useState<string[]>([]);

    renderer.create(
        <ButtonsContainer 
            displayValue={displayValue} setDisplayValue={setDisplayValue} setDisplayHistory={setDisplayHistory}
        />
    );
});

describe('Add', () => {

	it('should appears the title of the app', async () => {
		//given


		//when


		//then
	});

});
