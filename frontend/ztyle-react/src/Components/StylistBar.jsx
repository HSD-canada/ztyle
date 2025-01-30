import { useState } from 'react';
import './styling/stylistbar.css'

export default function StylistBar(props){
    //const stylist = fetch(api) 
    //
    const stylist = props.fetch.stylist;
       
 
   const [visible,setVisible] = useState(true);

    const date = new Date();
    const PM = `${(date.getHours()>=12)?'PM':'AM'}`;

    
    const tweet_information ={
        location:"Vancouver, Canada",
        time:`${String(date.getHours()-12).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')} ${PM}`
    }
    function handleHide(){
        setVisible(!visible);
    }
    
    return <>
        <section className='stylist-bar-section'>
            <div className={`wrapper${visible?'':' hidden'}`}>
                <div className='tweet'>
                    <div className='top'> 
                        <img src={stylist.image.tweet}/> 
                        <div>
                            <p className='name'>{stylist.name}</p>
                            <p className='username'>{stylist.username}</p> 
                        </div> 
                    </div>
                    <div className='content'>
                        <p>{stylist.ai.response.tweet}</p>
                    </div>
                    <div className='bottom'>
                        <p className='first'>{tweet_information.time}</p>
                        <p className='second'>{tweet_information.location}</p>
                    </div>
                </div>
            </div>
            <div className={`hide${visible?'':' reverse'}`}>
                <div onClick={handleHide}>
                    <img className="button"src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e75e4d27cfad1a63d3_hide.png'/>
                    <p >{visible?'hide':'stylist'}</p>
                </div>
                <div className='recommend'>
                    <img src="https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c7b9742ca1725b4cc19d_circle.png"/>
                    <p>recommend me an outfit</p>
                </div>
            </div>
        </section>
    </>
}