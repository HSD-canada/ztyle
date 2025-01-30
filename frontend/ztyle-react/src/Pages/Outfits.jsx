import './styling/outfits.css'
import Navbar from '../Components/Navbar';
import Navtab from '../Components/Navtab';
import { useContext, useEffect, useState } from 'react';
import ClosetItem from '../Components/Home/ClosetItem';
import { ItemsContext } from '../Contexts/ItemsContext';


export default function Outfits(props){

    //BOILERPLATE STUFF-------//
    const pageIndex  =  props.pageIndex;
    const fetch = props.fetch;
    const [creationMenuState,setCreationMenuState]=useState(false);
    const outfits = fetch.outfits;
    const items = fetch.items;
    //-------//

    //CONSTANTS --//
    const {creationMenuItems,setCreationMenuItems} = useContext(ItemsContext);
    const [mousePosition,setMousePosition] = useState({x:0,y:0});
    //--//

    //FUNCTIONS ---//

    //Input: None, Output: All user items packed in a nice box.
    function handleItems(){
        return outfits.map((e,i)=>{
            return <div className='wrapper'><ClosetItem item={e}/></div>
        })
    }
        //Input: None, Output: All user items packed in a nice box.
    function handleItemsSmall(){
        return items.map((e,i)=>{
            return <div className='small'><ClosetItem item={e}/></div>
        })
    }
    //Input: creationMenuItems[] , Output: Shows all the items in the input [] on the canvas 
    function handleCreationMenuItems(){
        return creationMenuItems.map((e,i)=>{
            console.log(e);
            return <div className='cloth' key={i}>
                <img src={e}/>
            </div>
        })
    }

    //Input: Click of the 'create outfit' button, Output: Shows/ hides the menu
    function handleShowCreationMenu(){
        setCreationMenuItems([]);
        setCreationMenuState(!creationMenuState);
    }

    useEffect(()=>{
        console.log(mousePosition);
    },[mousePosition])
    //Input:
    function handleCreate(){
        if(creationMenuState){
            return <div className='creation-section'>

                <div className='creation-menu'>
                    <div  onClick={handleShowCreationMenu} className='close-icon'>
                        <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c6e752a042ea1bb3000d_cross.png'/>
                    </div>
                    {handleCreationMenuItems()}
                </div>
                <div className='items-menu-r'>
                    {handleItemsSmall()}

                </div>

            </div>}
        else {
            return
        }
    }
    // ---//

    return <>
        <Navbar/>
        <div className='items-navtab'><Navtab highlight = {2} pageIndex={pageIndex}/></div>
        <section className='outfits-section'>
            <h1>OUTFITS</h1>
            <div className='panel'>
                {handleItems()}
            </div>
            <div onClick={handleShowCreationMenu} className='create-button'>
                <img src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799c7b9742ca1725b4cc19d_circle.png'/>
                <p>create an outfit</p>
            </div>
            {handleCreate()}
        </section>
    </>
}