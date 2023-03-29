import React, {useState} from 'react'
import "../cakeImages.css"

export default function CakeImages() {
    const imgs=[
        {id:0,value:"https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id:1,value:"https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id:2,value:"https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id:3,value:"https://images.pexels.com/photos/4110007/pexels-photo-4110007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    ];

    const [sliderData, setSliderData] = useState(imgs[0])
    const handleClick=(index)=>{
        console.log(index);
        const slider=imgs[index];
        setSliderData(slider);

    }
  return (
    <>
    <div className='cake-images'>
        <img id="Mainimg" src={sliderData.value} alt="" />
        {
            imgs.map((data,i)=>
            <img key={data.id} src={data.value} onClick={()=>handleClick(i)} alt="" />
            )
        }
    </div>
    </>
  )
}