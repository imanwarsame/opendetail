import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { DetailSearch } from './features/search/DetailSearch';
import { ViewerPage } from './features/viewer/ViewerPage';
import React from 'react';
import { Navbar } from './features/nabvar/Navbar';
import { CompositeSearch } from './features/CompositeSearch';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<section className='main-layout'>
					<Navbar />
					<section className='main-content'>
						<Routes>
							<Route element={<DetailSearch />} path='/' />
							<Route element={<ViewerPage />} path='/projects/:projectId' />
							<Route element={<CompositeSearch />} path='/compositeSearch/:projectId' />
						</Routes>
					</section>
				</section>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;

