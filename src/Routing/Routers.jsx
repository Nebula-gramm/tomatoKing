
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import { lazy, Suspense } from 'react';
import Loading from '../Loading/Loading';
import Error from '../404/Error';
import Posts from '../Pages/Posts';
import Contact from '../Pages/Contact';
import ReadPost from '../Pages/ReadPost';

const Home = lazy(()=> import('../Pages/Home'));
const About =lazy(()=> import('../Pages/About'))

const Routers = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/' element={<MainLayout/>} >
                 <Route index element={<Home/>}/>
                 <Route path='/about' element={<About/>}/>
                 <Route path='/posts' element={<Posts/>}/>
                 <Route path='/contact' element={<Contact/>}/>
                 <Route path='/posts/:id' element={<ReadPost/>}/>
                 <Route path='*' element={<Error/>}/>
              </Route>
            </Routes>
        </Suspense>
    );
};

export default Routers;