import AuthPage from "../pages/AuthPage/AuthPage";
import ChatsPage from "../pages/ChatsPage/ChatsPage";

export const privateRoutes = [
    {path: '/chat', element: <ChatsPage />},
];

export const publicRoutes = [
    {path: '/login', element: <AuthPage />},
];