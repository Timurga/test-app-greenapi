import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { useSelector } from 'react-redux';

const AppRouter = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <>
            {isAuth ? (
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                    <Route path="/*" element={<Navigate to="/chat" replace />} />
                </Routes>
            ) : (
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                    <Route path="/*" element={<Navigate to="/login" replace />} />
                </Routes>
            )}
        </>
    );
}

export default AppRouter;
