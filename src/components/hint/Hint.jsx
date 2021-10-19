import React, { useRef, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

import style from './style.module.css';

export const Hint = ({message}) => {
    console.log(message);
    const wrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((isOpen) => !isOpen);
    }
  
    return (
      <span ref={wrapperRef}>
        <button type='button' onClick={toggleIsOpen} className={style.button} >
          ?
        </button>
  
        {isOpen && <div onClick={() => setIsOpen(false)} className={style.hint}><div className={style.hintElement}  dangerouslySetInnerHTML={{__html: message}} /></div>}
      </span>
    );
}