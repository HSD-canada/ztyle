import './itemspanel.css'

export default function ItemsPanel(props){
    const items= props.items;
    function returnItems(){
        return items.images.map((e,i)=>{
            return <div className='wrapper2'>
                <img src={e}/>
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_40_145)">
                <path d="M0.958344 9.99967C0.958344 9.99967 4.79168 3.33301 11.5 3.33301C18.2083 3.33301 22.0417 9.99967 22.0417 9.99967C22.0417 9.99967 18.2083 16.6663 11.5 16.6663C4.79168 16.6663 0.958344 9.99967 0.958344 9.99967Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 12.4997C13.0878 12.4997 14.375 11.3804 14.375 9.99967C14.375 8.61896 13.0878 7.49967 11.5 7.49967C9.91219 7.49967 8.62501 8.61896 8.62501 9.99967C8.62501 11.3804 9.91219 12.4997 11.5 12.4997Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_40_145">
                <rect width="23" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        })
    }

    return <>
    <div className='items-panel-section'>
        <div className='top'>
        <p>{items.title}</p>
        <div className='items-panel-line'>  </div>
        </div>
        <div className='wrapper1'>
        {returnItems()}
        </div>
        
    </div>
    </>
}