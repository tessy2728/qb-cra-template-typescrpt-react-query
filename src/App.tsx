import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Style from './style';
import router from './pages/routes';

const App = () => {
    return (
        <>
            <Style.GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
