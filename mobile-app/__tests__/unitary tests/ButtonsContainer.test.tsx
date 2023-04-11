/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import ButtonsContainer from '../../src/Components/ButtonsContainer';

import renderer from 'react-test-renderer';

describe('ButtonsContainer view', () => {

	beforeAll(()=> {
	});

	it('renders correctly', () => {
		it('renders correctly', () => {
            const [displayValue, setDisplayValue] = useState("");
            const [displayHistory, setDisplayHistory] = useState<string[]>([]);
        
            renderer.create(
                <ButtonsContainer 
                    displayValue={displayValue} setDisplayValue={setDisplayValue} setDisplayHistory={setDisplayHistory}
                />
            );
        });
	});

	it('should appears the title of the app', () => {
		//given


		//when


		//then
	});

});

describe('ButtonsContainer container', () => {

	beforeAll(()=> {
	});

	it('should appears the title of the app', async () => {

	});

});

describe('ButtonsContainer screen', () => {

	beforeAll(()=> {
	});

	it('should appears the title of the app', async () => {

	});

});
