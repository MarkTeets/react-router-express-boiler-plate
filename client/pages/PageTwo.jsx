import React, { useState, useEffect } from 'react';

const PageTwo = () => {

  const handleClick = async () => {
    const response = await fetch('/api/user');
    if (response.status === 200) {
      const res = await response.json();
      console.log(res);
    } else {
      console.log('fail')
    }
  }

  return (
    <div className='page-two'>
      <h1>This is page two</h1>
      <button onClick={handleClick}>Click me to check backend</button>
    </div>
    );
}

export default PageTwo;