import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'


const Header = ({title}) => {
    const onClick = () =>{
        console.log('Click')
    }
    return ( 
        <header className='header'>
        {/* <h1 style={HeadingStyle}>{title}</h1>  */}
        <h1>{title}</h1>
        <Button color='green' text='hello' onClick={onClick}/>
        </header>
    )
}


// const HeadingStyle ={
//     color:"red",
//     backgroundColor:"black"
// }


Header.defaultProps = {
    title: 'Task Tracker',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
