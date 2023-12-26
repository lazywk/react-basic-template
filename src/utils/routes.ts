import React from "react";

export const publicRoutes = [
    {
        key: 'login',
        path: '/login',
        authority: [],
        element: React.lazy(() => import('pages/login-page'))
    }
];

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        authority: [],
        element: React.lazy(() => import('pages/home-page'))
    }
];
