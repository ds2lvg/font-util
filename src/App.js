import React, { useEffect, useRef } from 'react';
import './App.scss';
import './fontContainer.scss';
import FontContainer from './components/FontContainer';
import Store from './store/store';
// import logo from './resource/images/dbt.jpg';

function App() {
  const spinnerRef = useRef();
  useEffect(() => {
    setTimeout(() =>{
      console.log("dom loaded", spinnerRef.current);
      spinnerRef.current.style.display="none";
      document.querySelector('body').style.position="static";
    },1800)
  }, []);

  return (
    <Store>
      <FontContainer />
      <div className="spinner" ref={spinnerRef}>
        <svg
          className="loading"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="720px"
          height="190px"
          viewBox="0 0 574.558 120"
          enableBackground="new 0 0 574.558 120"
          xmlSpace="preserve"
        >
          <defs>
            <pattern
              id="water"
              width=".25"
              height="1.1"
              patternContentUnits="objectBoundingBox"
            >
              <path
                fill="#fff"
                d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
              />
            </pattern>

            <text
              id="text"
              transform="matrix(1 0 0 1 -8.0684 116.7852)"
              fontSize="120"
            >
              LOADING
            </text>

            <mask id="text_mask">
              <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#3498db" />
            </mask>
          </defs>

          <use x="0" y="0" xlinkHref="#text" fill="#3498db" />

          <rect
            className="water-fill"
            mask="url(#text_mask)"
            fill="url(#water)"
            x="-400"
            y="0"
            width="1600"
            height="120"
          />
        </svg>
      </div>
    </Store>
  );
}

export default App;
