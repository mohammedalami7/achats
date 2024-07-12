/* eslint-disable react/prop-types */
import './products.css';
import { ProductFilterList, StyleFilterList } from '../../data/data';
import { Range, getTrackBackground } from 'react-range';
import  { useState } from 'react';
import { motion } from 'framer-motion';
import { staticImages } from '../../utils/images';

export default function ProductsList() {
    const images = [
        staticImages.color1,staticImages.color2,staticImages.color3,staticImages.color4,staticImages.color5,
        staticImages.color6,staticImages.color7,staticImages.color8,staticImages.color9,staticImages.color10,
        staticImages.color11,staticImages.color12
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => setActiveIndex(index);

    const [values, setValues] = useState([130, 690]);
    const MIN = 0;
    const MAX = 1000;

    const trackBackground = getTrackBackground({
        values,
        colors: ['#ccc', '#0dcaf0', '#ccc'],
        min: MIN,
        max: MAX
    });

    const thumbInnerColor = (isDragged) => (isDragged ? '#0dcaf0' : '#ccc');

    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);
    const [isColorsOpen, setIsColorsOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isDressStyleOpen, setIsDressStyleOpen] = useState(false);

    return (
        <div className='list'>
            <div className="box" >
                <h3 className='tit' onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    filter
                    <span className='icon-chevron-thin-down' />
                </h3>
                {isFilterOpen && (
                    <motion.ul
                    initial={{ y: 50}}
                    animate={{ y: 0, }}
                    transition={0.6}>
                        {ProductFilterList.map((el) => (
                            <li key={el.id}>{el.title} <span className='icon-chevron-right' /></li>
                        ))}
                    </motion.ul>
                )}
            </div>
            <div className="box"

            >
                <h3 className='tit' onClick={() => setIsPriceOpen(!isPriceOpen)}>
                    price
                    <span className='icon-chevron-thin-down' />
                </h3>
                {isPriceOpen && (
                    <motion.section className="range-slider-container"
                    initial={{ y: 50}}
                    animate={{ y: 0, }}
                    transition={0.6}
                    >
                        <Range
                            values={values}
                            step={1}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setValues(values)}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    className="range-slider-track-container"
                                >
                                    <div
                                        ref={props.ref}
                                        className="range-slider-track"
                                        style={{
                                            '--track-background': trackBackground,
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props, isDragged, }) => (
                                <div 
                                    {...props}
                                    className="range-slider-thumb"
                                >
                                    <div
                                        className="range-slider-thumb-inner"
                                        style={{
                                            '--thumb-inner-color': thumbInnerColor(isDragged),
                                        }}
                                    />
                                </div>
                            )}
                        />
                        <output className="range-slider-output" id='output1'>
                            {values[0]}
                        </output>
                        <output className="range-slider-output "id='output2'>
                            {values[1]}
                        </output>
                    </motion.section>
                )}
            </div>
            <div className="box">
                <h3 className='tit' onClick={() => setIsColorsOpen(!isColorsOpen)}>
                    colors
                    <span className='icon-chevron-thin-down' />
                </h3>
                {isColorsOpen && (
                    <motion.section className='colors'
                    initial={{ y: 40}}
                    animate={{ y: 0, }}
                    transition={0.6}
                    >
                        {images.map((el, index) => (
                            <motion.img
                                src={el}
                                alt={index}
                                key={index}
                                onClick={() => handleClick(index)}
                                className={activeIndex === index ? 'active' : ''}
                            />
                        ))}
                    </motion.section>
                )}
            </div>
            <div className="box"

            >
                <h3 className='tit' onClick={() => setIsSizeOpen(!isSizeOpen)}>
                    size
                    <span className='icon-chevron-thin-down' />
                </h3>
                {isSizeOpen && (
                    <motion.div className='size'
                    initial={{ y: 40}}
                    animate={{ y: 0, }}
                    transition={0.6}
                    >
                        <span>xxs</span>
                        <span>xs</span>
                        <span>s</span>
                        <span>m</span>
                        <span>l</span>
                        <span>xxl</span>
                        <span>3xl</span>
                        <span>4xl</span>
                    </motion.div>
                )}
            </div>
            <div className="box"

            >
                <h3 className='tit' onClick={() => setIsDressStyleOpen(!isDressStyleOpen)}>
                    dress style
                    <span className='icon-chevron-thin-down' />
                </h3>
                {isDressStyleOpen && (
                    <motion.ul
                    initial={{ y: 40}}
                    animate={{ y: 0, }}
                    transition={0.6}>
                        {StyleFilterList.map((itm) => (
                            <li key={itm.id}>{itm.title}
                                <span className='icon-chevron-right' />
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </div>
    );
}
