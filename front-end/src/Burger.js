import React from 'react';
import {useState} from 'react';
import LeftNav from './LeftNav';
import './Burger.css';

const Burger= () => {
    const[open, setOpen]= useState(false)
    return (
        <>
            <nav className= 'BurgerStyle' open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>

            </nav>
            <LeftNav open={open}/>
        </>
        )
    
}

export default Burger