import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { DetailSearch } from './features/search/DetailSearch';
import { ViewerPage } from './features/viewer/ViewerPage';
import React, { useEffect } from 'react';
import { Navbar } from './features/navbar/Navbar';
import { CompositeSearch } from './features/CompositeSearch';
import { useDetailStore } from './store';
import { fetchDetails } from './services/DetailsService';
import axios from 'axios';
import { IDetailObject } from './types/detailobject';

function App() {
	const { reducers } = useDetailStore();

	/**
	 * This TypeScript function fetches details from an API endpoint and updates the store with the
	 * retrieved data.
	 * @param {Reducers} store - The `store` parameter in the `fetchDetails` function is expected to be an
	 * object that contains reducers.`
	 */
	async function fetchDetails() {
		try {
			const response = await axios.get(import.meta.env.VITE_API_HOST + 'details');

			//Set only valid data to the store
			if (response.data.length > 0) {
				reducers.setDetails(response.data);
			}
		} catch (error) {
			console.error('Error fetching data: ', error);
		}
	}

	useEffect(() => {
		fetchDetails();
	}, []);

	return (
		<React.StrictMode>
			<BrowserRouter>
				<section className='main-layout'>
					<Navbar />

					<section className='main-content'>
						<Routes>
							<Route element={<DetailSearch />} path='/' />
							<Route element={<ViewerPage />} path='/viewer/:projectId' />
							<Route element={<CompositeSearch />} path='/compositeSearch/:projectId' />
						</Routes>
					</section>
				</section>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
