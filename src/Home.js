import React from 'react'
import Products from './Products'
import { Carousel} from 'react-bootstrap';
import "./Home.css"
function Home() {
  return (
    <div className='home'>
    <div className='home_banner'>
    <Carousel className="home_carusel img-fade ">
    <Carousel.Item >
      <img
        className=" d-block w-100"
        src="https://i.pinimg.com/originals/9f/84/bc/9f84bcb759802a24948e6fff2f8518f3.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" 
        src="https://www.dochipo.com/wp-content/uploads/2021/01/banner-1.png"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" 
        src="https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
    <div className='product_row'>
    <Products 
    id={1}
    title="Ethiopian Traditional food kitfo plus kocho"
    price={200}
    image="https://th.bing.com/th/id/OIP.UHCrXvdqU918M8n-tgrvAQHaEK?rs=1&pid=ImgDetMain"
    rating={5}
    />
    <Products 
    id={2}
    title="Ethiopian Traditional food special beyayinetu"
    price={300}
    image="https://th.bing.com/th/id/OIP.J5vMFIJ_nvyWyp6ak1N5ugHaFG?w=272&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={4}
    />
  
    </div>
    <div className='product_row'>
    <Products 
    id={3}
    title="Ethiopian Traditional food special dish"
    price={250}
    image="https://th.bing.com/th/id/OIP.R99acwFtQ82eW0QtKPdagQHaDt?w=281&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={6}
    /> 
    <Products 
    id={4}
    title="Ethiopian Traditional food cost effective special dish"
    price={150}
    image="https://th.bing.com/th/id/OIP.W98PXzllXG1CQ5-G-rvl8AHaFR?w=202&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={3}
    />
    <Products 
    id={5}
    title="Ethiopian Traditional food special atikilt"
    price={280}
    image="https://th.bing.com/th/id/OIP.KgSeQtUFHiQJF52Nzcn-lQHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={6}
    />
   
    </div>
    <div className='product_row'>
    <Products 
    id={6}
    title="Ethiopian Traditional food shekila tibs"
    price={279}
    image="https://th.bing.com/th/id/OIP.r9-6nCJdPaIfOFBX3ql7sgHaDv?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={4}
    />
    </div>
    <div className='product_row'>
    <Products 
    id={7}
    title="Ethiopian Traditional food doro wet"
    price={330}
    image="https://th.bing.com/th/id/OIP.JCv8c3RqlcQ3rL6MOggTrgHaFe?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={6}
    />

    <Products 
    id={8}
    title="Ethiopian Traditional food special tibs"
    price={400}
    image="https://th.bing.com/th/id/OIP.oDm58nFBki1fkFxFUPTFYAHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={5}
    />
    <Products 
    id={9}
    title="Ethiopian Traditional food special gored gored"
    price={600}
    image="https://th.bing.com/th/id/OIP.lBzd2g2yIQ0ynQ6HHlV-0AHaE6?w=238&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    rating={3}
    />
    </div>
    </div>
  )
}

export default Home