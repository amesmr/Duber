// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import '.public/css/style.css';

//Routes
import routes from './routes/routes';

// Render
render(
    routes, document.getElementById('app')
    );
