/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import Display from '../../src/Components/Display';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Display value={null} history={null}/>);
});

describe('Add', () => {	

	it('should appears the title of the app', async () => {
		//given


		//when


		//then
	});

});
