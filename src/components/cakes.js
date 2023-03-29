import React, {useState, useEffect} from 'react'
import "../cakes.css"
import CakeImgs from '../components/cakeImages'


export default function Cakes() {
    
    const [price, setPrice] = useState(599);
    const [data, setData] = useState([]);
    const [pincode, setPincode] = useState("110005");

    const getPrice = (e)=>{
        setPrice(e.target.value)
    }

    useEffect(() => {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    }, [pincode])

    const getdistrict=(e)=>{
        setPincode(e.target.value)
    }
    
  return (
    <>
        <CakeImgs/>
        <div className="cake-desc" >
            <h1>Chocolate Truffle</h1>
            <h2>&#8377; {price}</h2>
            <h3>Select Weight</h3>
            
            <input type="radio" value="599" name="myweight" className='myweight' onChange={getPrice}/> 0.5 kg <input type="radio" value="1599" name="myweight" className='myweight' onChange={getPrice}/> 1 kg <input type="radio" value="2599" name="myweight" className='myweight' onChange={getPrice}/> 2 kg

            <input type="text" name="" id="pincode_input" onChange={(e)=>getdistrict(e)} placeholder='Enter Pincode'/>
          <select name="" id="mydistrict">
            {
                data[0]?.PostOffice?.map((district)=>
                 {

                    return <option value="">{district.Name}</option>
                    
                  }
                )
            }
            </select>
        </div>
    </>
  )
}
