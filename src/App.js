import './App.css';
import Router from './Routes/Router';
import { Suspense } from 'react';
import { withTranslation } from 'react-i18next';

function App() {
	return (
		<>
			<Suspense fallback="loading ...">
				<Router />
			</Suspense>
		</>
	);
}

export default App;
