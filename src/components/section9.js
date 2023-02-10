import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Container';
import '../App.css';
import logo1 from './../imgndlogo/logo1.png';
import logo2 from './../imgndlogo/logo2.png';
import logo3 from './../imgndlogo/logo3.png';
import logo4 from './../imgndlogo/logo4.png';
import logo5 from './../imgndlogo/logo5.png';


function NinthSection(){
    return(
        <div className='coloring'>
            <img className='logos' src={logo1} alt="firstlogo" width={170} height={150}></img>
            <img className='logos' src={logo2} alt="secondlogo"  width={170} height={150}></img>
            <img className='logos' src={logo3} alt="thirdlogo"  width={170} height={150}></img>
            <img className='logos' src={logo4} alt="fourthlogo"  width={170} height={150}></img>
            <img className='logos' src={logo5} alt="fifthlogo" width={170} height={150}></img>
        </div>
    );
}

export default NinthSection;
