import './styling/calendar.css'
import Navbar from '../Components/Navbar';
import Navtab from '../Components/Navtab';
import { useEffect } from 'react';

export default function Calendar(props){

    //BOILERPLATE STUFF-------//
    const pageIndex  =  props.pageIndex;
    const fetch = props.fetch;


    //-------//

    //CONSTANTS --//
   
    //--//


    //FUNCTIONS ---//

    const mon= fetch.user.calendar.monday;
    const tue = fetch.user.calendar.tuesday;
    const wed = fetch.user.calendar.wednesday;
    const thur = fetch.user.calendar.thursday;
    const fri = fetch.user.calendar.friday;
    const sat = fetch.user.calendar.saturday;
    const sun = fetch.user.calendar.sunday;

    const outfit0 = mon.outfit;
    const outfit1 = tue.outfit;
    const outfit2 = wed.outfit;
    const outfit3 = thur.outfit;
    const outfit4 = fri.outfit;
    const outfit5 = sat.outfit;
    const outfit6 = sun.outfit;


    //Input: None, Output: All user items packed in a nice box.
  
    return <>
        <Navbar/>
        <div className='items-navtab'><Navtab highlight = {4} pageIndex={pageIndex}/></div>
        <section className='calendar-section'>
            <h1>CALENDAR</h1>
            <section className='main'>
                <div className='wrapper'>
                    <div>
                        <h1>MON</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img src={outfit0}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>TUE</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img className={`${tue.planned?' ':'small'}`} src={outfit1}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img  src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>WED</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img  className={`${tue.planned?' ':'small'}`} src={outfit2}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img  src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>THUR</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img className={`${thur.planned?' ':'small'}`} src={outfit3}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>FRI</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img className={`${fri.planned?' ':'small'}`} src={outfit4}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>SAT</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img className={`${sat.planned?' ':'small'}`} src={outfit5}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>SUN</h1>
                        <div className='line'></div>
                        <div className='outfits'>
                            <img className={`${sun.planned?' ':'small'}`} src={outfit6}></img>
                        </div>
                        <h2>EDIT</h2>
                        <div className='buttons'>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acb80045035bd8783a0a5_journal.png'/>
                                <h3>JOURNAL</h3>
                            </div>
                            <div >
                                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679acc409ca36805e599a244_selfie.png'/>
                                <h3>SELFIE</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </section>

    </>
}