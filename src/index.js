import { StrictMode } from 'react';
import { hydrate } from 'react-dom';

import App from './App';


hydrate(<StrictMode><App /></StrictMode>, document.querySelector('div[data-reactroot]'));