import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/server";
import { useEffect, useState } from "react";

function CategorySlider() {
 const [category, setCategory] = useState([]);

  const getTopics= async()=>{
    const response = await axios.get(`${BASE_URL}topics`)
    
    setCategory(response.data.data)
  }

  useEffect(()=>{
    getTopics();
  },[])

  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
    >
      {category.map((item) => {
        return (
          <Link key={item.id} className="bg-appgray text-black no-underline rounded-lg text-center mx-5 h-[48px] flex justify-center items-center">
            {item.name}
          </Link>
        );
      })}
    </Carousel>
  );
}

export default CategorySlider;