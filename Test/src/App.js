import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Stacked, Pyramid, Kanban, Area, Bar, Pie, ColorPicker, ColorMapping, Editor, Calender, Dashboard } from './pages';
import './App.css';

const App = () => {
    const activeMenu = true;

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3x1 p-3 hover:drop-shadow-x1  hover:bg-light-gray  text-white"
                                style={{ backgroundColor: 'lightblue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
                            : 'bg-main-bg dark:bg-main-bg w-full flex-2 min-h-screen'
                    }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                    </div>

                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={(<Dashboard />)} />
                            <Route path="/Dashboard" element={(<Dashboard />)} />

                            {/* Pages */}
                            <Route path='/Profile' element="Profile" />
                            <Route path="/Progress" element="Progress" />

                        </Routes>
                    </div>
                </div>
            </BrowserRouter >
        </div >

    )
}

export default App