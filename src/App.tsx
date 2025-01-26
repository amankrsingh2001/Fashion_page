import './App.css'
import { IoBagCheckSharp } from "react-icons/io5";

const App = ()=>{
  return <div className="container">
    <div id="header">
      <p className='nav' id="about">About</p>
      <p className='nav' id="home">Home</p>
      <p className='nav' id="cart">Cart</p>
      <p className='nav' id="icons"><IoBagCheckSharp /></p>
    </div>
    <div id="side1">

      <div className='box1'>
         <p className='mainText'>Lightly Padded, quilted jacket in recyled polyster</p>
      </div>

      <div className='box2'>
        <p className='textSecond'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut quibusdam excepturi assumenda suscipit! Tenetur nulla doloribus itaque laborum magnam provident, facilis autem impedit sed nam quidem nesciunt et aut.
        ditiis in aliquam dolore   </p>
      </div>
    </div>
    <div id="side2">

    <button className='btn'>Add to cart</button>
    <hr className='hr'/>
    <button className='btn'>Product Details</button>
    <hr className='hr'/>
    <button className='btn'>Shopping</button>
    <hr className='hr'/>

    </div>
    <div id="footer">

    </div>
  </div>
}

export default App;