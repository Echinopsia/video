import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Popular from './grids/Popular';

export default function Section1() {
	const [scrollX, setScrollX] = useState(0); // For detecting start scroll postion
	const [scrollEnd, setScrollEnd] = useState(false); // For detecting end of scrolling
	const [scrollLength, setScrollLength] = useState(0);
	const scrl = useRef(null);
	const width = useRef(null);

	const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  	};

  	useLayoutEffect(() => {
    	setScrollLength(width.current.offsetWidth/3);
    }, []);

	useEffect(() => {
    //Check width of the scollings
    	if (
		    scrl.current &&
    		scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    	) {
    		setScrollEnd(true);
    	} else {
      		setScrollEnd(false);
    	}
    	return () => {};
  	}, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);
	
  	const scrollDetect = () => {
    	setScrollX(scrl.current.scrollLeft);
    	if (
		    Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
		    scrl.current.offsetWidth
    	) {
		    setScrollEnd(true);
    	} else {
    		setScrollEnd(false);
    	}
	};
	const slideDown = () => {
		if (scrollX > 1){
			slide(-`${scrollLength}`);
		}
	}
	return (
		<div className="section1" ref={width}>
			<div className="button-group">
				<button 
					onClick={slideDown} 
					id={scrollX > 1 ? '' : 'inactive'} 
					className="but-1"><MdOutlineKeyboardArrowLeft size={35} /></button>
				<button onClick={() => slide(+`${scrollLength}`)} id={scrollX !== 0 && scrollEnd ? 'inactive' : ''} className="but-2"><MdOutlineKeyboardArrowRight size={35} /></button>
			</div>
			<ul ref={scrl} onScroll={scrollDetect}>
				<Popular />
			</ul>
		</div>
	)
}