import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { VscPlay } from 'react-icons/vsc'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiOutlineCrown} from 'react-icons/ai' 
import  {BiRightArrowAlt} from 'react-icons/bi'
import './Css/Home.css'

function Home() {
  return (
    <>
    <div id='space'>
      <div id='top'>
        <div id='left'>
          <h2>Flowbase</h2>
          <button><AiOutlineCrown className='club'/>Club Access</button>

          <a>Product<IoIosArrowDown className='repeat'/></a>
          <a>Pricing</a>
          <a>Learn<IoIosArrowDown/></a>
          <a>Company<IoIosArrowDown/></a>
        </div>
        <div id='right'>
          <p>Login</p>
          <button>Sign Up</button>
        </div>
      </div>
      <div id='spac'>
        <div className='separation'></div>
        <div className='content'>
          <div className='contttop'>
            <p className='text-capitalize'>premium webflow products</p>
            <p><h1>Build <i className='big'>Bettter,</i></h1></p>
        </div> 
          <div className='contbotm'>
            <div className='too'>
              <div className='but'><VscPlay/></div><h1>build faster.</h1>
            </div>
            <div className='correct'>
              <div className='co'>
                <p>Flowbase is the largest webflow resource site,<i> with premium component, templates,guides, apps</i></p>
                <div>and so <i className='font-color'>much more.</i></div>
              </div>
            </div>
            <div className='floor'>
                <div className='btn'><button>Get Started<FiArrowUpRight/></button> </div>

                <div className='mainpp'><div className='make'><BiRightArrowAlt className='button'/></div>Browse Store</div>
            </div>
          </div>
      </div>
      <div className='maibut'>
        <div className='subs'><a>Template Store</a></div>
        <div className='subs'><a>Template Store</a></div>
        <div className='subs'><a>Template Store</a></div>
        <div className='subs'><a>Template Store</a></div>
        <div className='subs'><a>Template Store</a></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home