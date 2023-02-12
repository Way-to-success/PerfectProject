import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the functions you need from the SDKs you need
import {getAnalytics} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';

import App from './app';

import './index.css';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCShKSmXGqKMRVku0cYLaQTjxTxBk7ZZr0',
	authDomain: 'for-poor-man.firebaseapp.com',
	projectId: 'for-poor-man',
	storageBucket: 'for-poor-man.appspot.com',
	messagingSenderId: '224361342471',
	appId: '1:224361342471:web:d8b1e458a1a10feb9eaca2',
	measurementId: 'G-BQT4GYQ8GF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
