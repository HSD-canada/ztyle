import { useContext } from 'react';
import './closet.css'
import { ItemsContext } from '../../Contexts/ItemsContext';

export default function ClosetItem(props){
    const imageURL = props.item;
    const {creationMenuItems,setCreationMenuItems} = useContext(ItemsContext);
    function handleClick(){
        const old_arr = creationMenuItems;
        if(old_arr.includes(imageURL)){
            setCreationMenuItems(old_arr);

        }
        else{
        const new_arr = [...old_arr,imageURL];
        setCreationMenuItems(new_arr);}
    }

    return <>
        <div className='closet-item-section'>
            <div onClick={handleClick} className='wrapper3'>
                <img src={imageURL}/>    
            </div>
        </div>
    </>
}