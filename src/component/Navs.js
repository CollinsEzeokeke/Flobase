import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Css/Nav.css'
import Logo from './Image/logo.jpg'
import { TiThMenuOutline } from 'react-icons/ti'
import { MdClose } from 'react-icons/md'
// import Moblie from './Moblie'


function Navs() {

    const [change, Setchange] = useState (true)

    function handleChange () {
        Setchange (!change)
    }


  return (
    <div className='header'>
        <div className='secondbar'>
            <div id='ni'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='naivelinks'>
                <Link to= '/' className='link'>Website 1</Link>
                <Link to= '/about' className='link'>Website 2</Link>
                <Link to= '/contact' className='link'>Website 3</Link> 
                <Link to= '/about' className='link'>Website 4</Link>
            </div>
        </div>
        <div className='burger' onClick={handleChange}>
            {!change ? (<MdClose className='icons' style={{color: 'red'}}/>) : (<TiThMenuOutline className='icons'/>)}

                    <div className= {`dropdown ${!change ? "show" : "" }`}> 
                        <Link to= '/' className='droplinks' >Website 1</Link>
                        <Link to= '/about' className='droplinks'>Website 2</Link>
                        <Link to= '/contact' className='droplinks'>Website 3</Link> 
                        <Link to= '/about' className='droplinks'>Website 4</Link>
                    </div>
        </div>
    </div>
  )
}

console.log('d2*#%ttGDB@gm9 my password')

export default Navs