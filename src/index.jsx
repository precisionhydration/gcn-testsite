import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './index.css';

import { App } from './App.jsx';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);