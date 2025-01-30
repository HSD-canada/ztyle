import './styling/navtab.css'

export default function Navtab(props){
    const highlightIndex =props.highlight;
    const pageIndex = props.pageIndex;
    const showNav= props.showNav;
    return <>
        <section className={`navtab-section ${showNav?'':'hide'}`}>
            <div className='wrapper'>
                <div  onClick={()=>props.pageIndex(0)} className={`home item${highlightIndex ===0?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679963a5ba19896f19003fbd_Home.png'/>
                    <p>Home</p>             
                </div>
                <div onClick={()=>props.pageIndex(1)} className={`home item${highlightIndex ===1?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e7221f4b7736402222_hanger.png'/>
                    <p>Items</p>             
                </div>
                <div  onClick={()=>props.pageIndex(2)} className={`home item${highlightIndex ===2?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e7cca9a9453a4b4d1a_outfits.png'/>
                    <p>Outfits</p>             
                </div>
                <div  onClick={()=>props.pageIndex(3)} className={`home item${highlightIndex ===3?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e7eafb94b1622656ad_stylists.png'/>
                    <p>Stylist</p>             
                </div>
                <div  onClick={()=>props.pageIndex(4)} className={`home item${highlightIndex ===4?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e7cdb564e2761970f3_calendar.png'/>
                    <p>Calendar</p>             
                </div>
                 <div  onClick={()=>props.pageIndex(5)} className={`home item${highlightIndex ===5?' highlight':''}`}>
                    <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e72e204c5cbfce8341_statistics.png'/>
                    <p>Statistics</p>             
                </div>
            </div>
        </section>
    </>
}