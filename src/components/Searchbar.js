import React from 'react'
import logo from './flip logo.png'
import a from './top.webp'
import b from './mobile.webp'
import c from './electronics.webp'
import d from './tv.webp'
import e from './fashion.webp'
import f from './beauty.webp'
import g from './home.webp'
import h from './furniture.webp'
import i from  './flight.webp'
import j from './gros.webp'

export default function Searchbar() {
  return (
    <div className='col-md-12'>
      <div className='my-class'>
         <img src={logo} width= '90px' style={{ marginRight: "10px" }}/>
         <i class="fa-solid fa-magnifying-glass"></i>
         <input type='text' className='searchbox' placeholder='search for products,brands and more' style={{ width: "700px",marginRight: "10px"  }} />
         <i class="fa-solid fa-store" style={{ marginRight: "20px" }}></i> Become a seller
         <i class="fa-regular fa-user" style={{ marginLeft: "20px" }}></i>  sign in  
         <i class="fa-solid fa-cart-shopping" style={{ marginLeft: "20px" }}></i>  cart
         <i class="fa-solid fa-ellipsis-vertical" style={{ marginLeft: "20px" }} ></i>
         <hr/>
      </div>
         <div className="row-menu row justify-content-center ">
            <div className='col-md-1 text-center '>
              <img src={a} width= '50px' style={{ marginRight: "40px" }} />
              <p>topoffers</p>
            </div>
            <div className='col-md-1 text-center '>
               <img src={b} width= '50px' style={{ marginRight: "40px" }} />
               <p>mobile </p>
            </div>
            <div className='col-md-1 text-center'>
               <img src={c} width= '50px' style={{ marginRight: "40px" }}/>
               <p>electronics</p>
            </div>
            <div className='col-md-1 text-center'>
                <img src={d} width= '50px' style={{ marginRight: "40px" }}/>
                 <p>tvs</p>
            </div>
            <div className='col-md-1 text-center'>
                <img src={e} width= '50px' style={{ marginRight: "40px" }}/>
                <p>Fashion</p>
            </div>
            <div className='col-md-1 text-center'>
               <img src={f} width= '50px' style={{ marginRight: "40px" }}/>
               <p>Beauty</p>
            </div>
            <div className='col-md-1 text-center'>
               <img src={g} width= '50px' style={{ marginRight: "40px" }}/>
                <p>home </p>
           </div>
           <div className='col-md-1 text-center'>
                <img src={h} width= '50px' style={{ marginRight: "40px" }}/>
                 <p>furniture</p>
            </div>
            <div className='col-md-1 text-center'>
               <img src={i} width= '50px' style={{ marginRight: "40px" }}/>
               <p>flights</p>
         </div>
         <div className='col-md-1 text-center'>
            <img src={j} width= '50px' style={{ marginRight: "40px" }}/>
            <p>Grocery</p>
        </div>
        <hr/>
    </div>
        
</div>    

  )
}
