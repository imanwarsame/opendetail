import axios from 'axios';
import { IDetailObject } from '../types/detailobject';
import { Reducers } from '../store';

/**
 * This TypeScript function fetches details from an API endpoint and updates the store with the
 * retrieved data.
 * @param {Reducers} store - The `store` parameter in the `fetchDetails` function is expected to be an
 * object that contains reducers.`
 */
export async function fetchDetails(store: Reducers) {
	try {
		const response = await axios.get(import.meta.env.VITE_API_HOST + 'details');
		console.log(response.data);

		const data: IDetailObject[] = response.data;
		store.setDetails(data);
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
}
