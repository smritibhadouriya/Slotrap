import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react';
const Casinotype = lazy (()=> import ('./pages/Casinotype'));
const About = lazy (()=> import ('./pages/About'));
const Contact = lazy (()=> import ('./pages/Contact'));
const Owner = lazy (()=> import ( './pages/Owner'));
const Main = lazy(()=> import('./pages/Main'))
const Navbar = lazy(() => import('./components/Navbar'));
const Notfound =lazy(()=> import ('./components/Notfound'));
function App() {
  return (
    <>
    <BrowserRouter>
          <div>
          <Suspense fallback={
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/casinos-instant-withdrawal" element={<Casinotype />} />
                 <Route path="/telegram-casinos" element={<Casinotype />} />
                  <Route path="/chicken-road-casino" element={<Casinotype />} />
                   <Route path="/no-verification-casinos" element={<Casinotype />} />
                    <Route path="/vpn-casinos" element={<Casinotype />} />
                     <Route path="/crash-games" element={<Casinotype />} />
                      <Route path="/ethereum-casinos" element={<Casinotype />} />
                       <Route path="/usdt-casinos" element={<Casinotype />} />
                        <Route path="/crypto-sports-betting" element={<Casinotype />} />
                         <Route path="/metamask-casinos" element={<Casinotype />} /> 
                         <Route path="/ethereum-sports-betting" element={<Casinotype />} />
                           <Route path="/litecoin-casinos" element={<Casinotype />} />
                             <Route path="/aviator-casinos" element={<Casinotype />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/editor" element={<Owner />} />
               <Route path="/:anything" element={<Notfound />} />
              </Routes>
            <div className='bg-yellow-400 text-center'>
Copyright © slotrap.com
            </div>
            </Suspense>
          </div>
        </BrowserRouter>

      
    </>
  )
}

export default App
