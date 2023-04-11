/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import Display from '../../src/Components/Display';

import renderer from 'react-test-renderer';

describe('Display view', () => {

	beforeAll(()=> {
	});

    it('renders correctly', () => {
        const [displayValue, setDisplayValue] = useState("");
        const [displayHistory, setDisplayHistory] = useState<string[]>([]);

        renderer.create(<Display value={displayValue} history={displayHistory}/>);
    });

	it('should appears the title of the app', () => {
		//given


		//when


		//then
	});

});

describe('Display container', () => {

	beforeAll(()=> {
	});

	it('should appears the title of the app', async () => {

	});

});

describe('Display screen', () => {

	beforeAll(()=> {
	});

	it('should appears the title of the app', async () => {

	});

});
