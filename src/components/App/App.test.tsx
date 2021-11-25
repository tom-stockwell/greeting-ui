import {render} from '@testing-library/react';
import React from 'react';
import Providers from "../Providers";
import App from './App';

test('renders', () => {
  render(<Providers><App /></Providers>);
});
