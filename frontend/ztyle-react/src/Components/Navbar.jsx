import './styling/navbar.css'

export default function Navbar(){
    return <>
        <section className='navbar-section'>
            <div className='wrapper'>
                <p>ztyle</p>
                <img className='logo' src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/67995f6a24471ad9df7fdf8d_logo.png'/>
                <div className='stuff'>
                    <img className='profile' src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679961e27edf02e003f0ac23_User.png'/>
                    <img className='settings' src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679961e233831f9bf4df383b_Settings.png'/>
                </div>
            </div>
        </section>       
    </>
}
