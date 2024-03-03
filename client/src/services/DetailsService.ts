import axios from 'axios';
import { IDetailObject } from '../types/detailobject';
import { Reducers } from '../store';

function isDetailObject(obj: any): obj is IDetailObject {
	return (
		typeof obj.keyimage === 'string' &&
		typeof obj.name === 'string' &&
		typeof obj.description === 'string' &&
		typeof obj.topologyCategory === 'number' && // Assuming DetailTopologyCategory is a string enum or type
		Array.isArray(obj.elements) &&
		Array.isArray(obj.detailPart) &&
		// Check additional properties as needed
		// Add checks for other properties if necessary
		true // Always return true if all checks passed
	);
}

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

		const data: IDetailObject[] = response.data.filter(isDetailObject);
		console.log(data);

		//Set only valid data to the store
		if (data.length > 0) {
			store.setDetails(data);
		}
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
}
