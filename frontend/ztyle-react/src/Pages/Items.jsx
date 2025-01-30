import ItemsPanel from '../Components/Items/ItemsPanel';
import Navbar from '../Components/Navbar'
import Navtab from '../Components/Navtab'
import './styling/items.css'

export default function Items(props){
    const pageIndex = props.pageIndex;
    const items0 = {
        title:"",
        images:[props.fetch.items[1],props.fetch.items[2],props.fetch.items[3]]
    }
    const items1 = {
        title:"",
        images:[props.fetch.items[0],props.fetch.items[5],props.fetch.items[7],props.fetch.items[8]]
    }
    const items2 = {
        title:"",
        images:[props.fetch.items[6]]
    }


    return <>
        <Navbar/>
        <div className='items-navtab'><Navtab highlight = {1} pageIndex={pageIndex}/></div>
        <section className='items-section'>
            <div className='wrapper'>
                <p className='para1'>ITEMS</p>
                <ItemsPanel items={items0}/>
                <ItemsPanel items={items1}/>
                <ItemsPanel items={items2}/>
            </div>
        </section>
    </>
}