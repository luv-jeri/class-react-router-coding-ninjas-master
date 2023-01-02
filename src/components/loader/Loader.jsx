import React from 'react';
import style from './Loader.module.css';

export default function oader() {
  return (
    <div className={style.loader}>
      <img
        className={style.loadIcon}
        alt='loader-icon'
        src='https://files.codingninjas.in/pl-ninja-16706.svg'
      />
    </div>
  );
}
