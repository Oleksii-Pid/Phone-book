import React from 'react';
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return (
        <>  
            <header style = {{backgroundColor: 'blue'}}>
                <h1>Phone books</h1>
            </header>
            <Outlet/>
        </>
    )
}