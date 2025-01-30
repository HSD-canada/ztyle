import './styling/stylist.css'
import Navbar from '../Components/Navbar';
import Navtab from '../Components/Navtab';

export default function Stylist(props){

    //BOILERPLATE STUFF-------//
    const pageIndex  =  props.pageIndex;
    const fetch = props.fetch;
    const pic = fetch.stylist.image.tweet;
    const name = fetch.stylist.name;
    const username = fetch.stylist.username;
    const bio = fetch.stylist.ai.response.bio;

    //-------//

    //CONSTANTS --//
   const greenCircle = <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle cx="5" cy="5" r="5" fill="#659374"/>
   </svg>;
   const greyCircle =  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle cx="5" cy="5" r="5" fill="#696969"/>
   </svg>
   
    //--//

    //FUNCTIONS ---//

    //Input: None, Output: All user items packed in a nice box.
  
    return <>
        <Navbar/>
        <div className='items-navtab'><Navtab highlight = {3} pageIndex={pageIndex}/></div>
        <section className='stylist-section'>
            <h1>STYLIST</h1>
            <section className='profile'>
                <div className='pic'>
                    <img src={pic}/>
                </div>
                <div className='name'>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
                <div className='bio'>
                    <p>{bio}</p>
                </div>
            </section>
            <section className='attributes'>
                <div className='wrapper'>
                    <div>
                        <h1>HEALTH</h1>
                        <div className='circles'>
                            {greenCircle}
                            {greenCircle}
                            {greenCircle}
                        </div>
                    </div>
                    <div>
                        <h1>MOOD</h1>
                        <div className='circles'>
                            {greenCircle}
                            {greenCircle}
                            {greenCircle}
                        </div>
                    </div>
                    <div>
                        <h1>CONNECTION</h1>
                        <div className='circles'>
                            {greyCircle}
                            {greyCircle}
                            {greyCircle}
                        </div>
                    </div>
                </div>
            </section>
            <section className='buttons'>
                <div className='wrapper'>
                    <div>
                        <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c7b9742ca1725b4cc19d_circle.png'/>
                        <h1>begin chat</h1>
                    </div>
                    <div>
                        <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c7b9742ca1725b4cc19d_circle.png'/>
                        <h1>recommend me an outfit</h1>
                    </div>
                    <div>
                        <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c7b9742ca1725b4cc19d_circle.png'/>
                        <h1>customize stylist</h1>
                    </div>
                </div>
            </section>
            
        </section>

    </>
}