import AppRoute from 'components/route/AppRoute';
import AuthorityGuard from 'components/route/AuthorityGuard';
import ProtectedRoute from 'components/route/ProtectedRoute';
import PublicRoute from 'components/route/PublicRoute';
import { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { RootState } from 'store';
import { protectedRoutes, publicRoutes } from 'utils/routes';

export default function Page() {
    const { signedIn } = useSelector((state: RootState) => state.auth);

    console.log(signedIn);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path='/' element={<PublicRoute signedIn={signedIn} />} >
                    {
                        publicRoutes.map(route => <Route path={route.path} key={route.key} element={<AppRoute component={route.element} />} />)
                    }
                </Route>
                <Route path='/' element={<ProtectedRoute signedIn={signedIn} />} >
                    {
                        protectedRoutes.map(route => <Route path={route.path} key={route.key} element={
                            <AuthorityGuard userAuthority={'admin'} authority={route.authority}>
                                <AppRoute component={route.element} />
                            </AuthorityGuard>
                        } />)
                    }
                </Route>
            </Routes>
        </Suspense>
    )
}
