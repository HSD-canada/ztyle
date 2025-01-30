import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Navtab from './Components/Navtab'
import StylistBar from './Components/StylistBar'
import Home from './Pages/Home'
import Items from './Pages/Items'
import Outfits from './Pages/Outfits'

import { useContext } from 'react'
import { ItemsContext } from './Contexts/ItemsContext'
import Stylist from './Pages/Stylist'
import Calendar from './Pages/Calendar'

function App() {
  //FETCH ASSUMPTION....
  const [fetch,setFetch] =useState({
    stylist : {
      image:{
          tweet:"https://upload.wikimedia.org/wikipedia/en/0/07/Yves_Saint_Laurent_%281958%29.png"
      },
      name: "Yves Saint Laurent",
      username:"@real_ysl",
      age: 32,
      ai:{
          prompts:{
              initializing:"you are a stylist on the app called Ztyle. A digital virtual fashion app. Your rules are to remain within the framework of this app, do not go too off topic, but just like a conversation with a stylist it can go off topic, but always be a professional stylist for the users. You will receive input of clothing and their likes and dislikes in fashion but you must always invoke the personality of the stylist. ",
              rules:"Only talk within VERY few words, simple as well, but accurate to the information of the personality of person to embody provided. with a maximum of 1 sentences each reply. Keep all conversations super superficial, relating to the digital fashion app, ztyle, Be warm, welcoming , funny and charismatic",
              personality:{
                  name:"Andrew Tate",
                  additional:""
              },
              tweet:"make a one sentence tweet about your day, inviting the user to chat with you and get styling!"
          },
          response:{
              tweet:"Another day, another bag secured—now let’s get YOU styled like a winner. ",
              bio:"I’m Yves, your digital fashion confidant."
          }
      }
    },
    items:["https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dc6b0fb5a746e65aa8d1_remove3.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dca958d3135c17ea351b_remove4.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dca358d3135c17ea3097_processed_image69.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2c4f57d892b64624ad9_pants.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad32d0997b3e53c294299_hoodie2.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2c48cb7964066ec8735_belt.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2c421ef80cb05ea26d7_dress.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2c46288bb9f8573ae10_bag.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2fe2fdafad9f54ba9c7_heel.png"],
    user:{
      location:"Vancouver, Canada",
      weather:{
        image:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799e175cdb564e27634eabc_cloud.png",
        temp:"20",
        wind:"23",
        rain:"45"
      },
      calendar:{
        monday:{
          planned:true,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dc6b0fb5a746e65aa8d1_remove3.png",
          journal:"It was a beautiful day."
        },
        tuesday:{
          planned:false,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ace4c142678d57eeb2764_plus.png",
          journal:"You haven't made an entry..."
        },
        wednesday:{
          planned:false,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ace4c142678d57eeb2764_plus.png",
          journal:"You haven't made an entry..."
        },
        thursday:{
          planned:true,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dca358d3135c17ea3097_processed_image69.png",
          journal:"I went to the PNE Fair. It was fun."
        },
        friday:{
          planned:false,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ace4c142678d57eeb2764_plus.png",
          journal:"You haven't made an entry..."
        },
        saturday:{
          planned:false,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ace4c142678d57eeb2764_plus.png",
          journal:"You haven't made an entry..."
        },
        sunday:{
          planned:true,
          outfit:"https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/6799dca358d3135c17ea3097_processed_image69.png",
          journal:"This is a fun hackathon."
        }
      },
      outfits:[
        {
          html_code:"`<div className='wrapper'>${i}</div>`"
        },
        {},
        {}
      ]
    },
    outfits:["https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2ce1f85cd2275e76c39_1.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2cd8c5e16cf856a850e_2.png","https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679ad2cd3cc0b9b5a9b7b169_3.png"]
  });
  
  const [creationMenuItems,setCreationMenuItems] = useState([]);

  useEffect(()=>{console.log(creationMenuItems)},[creationMenuItems]);

  const [cli,setCli] = useState(false);

  async function handleConsole(){
      const json= await JSON.parse(value);
      setFetch(json);
      alert("Updated fetch block");

  }

  const [value,setValue] = useState("Enter...");
  function handleChange(e){
      setValue(e.target.value);  
  }



  const [page,setPage] = useState(0);

  function handlePage(){
    switch (page){
        default:
          return <Home fetch={fetch} pageIndex={setPage}/>
        case 0:
          return <Home fetch={fetch} pageIndex={setPage}/>
        case 1:
          return <Items fetch ={fetch} pageIndex = {setPage}/>
        case 2:
          return <Outfits fetch={fetch} pageIndex = {setPage}/>
        case 3:
          return <Stylist fetch ={fetch} pageIndex ={setPage}/>
        case 4:
          return <Calendar fetch ={fetch} pageIndex ={setPage}/>


  }}
  useEffect(()=>{handlePage},[page]);
  return (
    <>
    <ItemsContext.Provider value={{creationMenuItems,setCreationMenuItems}}>
      {handlePage()}
    </ItemsContext.Provider>
    <section className='API'>
      <img onClick={()=>setCli(!cli)} className="icon" src='https://cdn.prod.website-files.com/66c6757bbaa1401ea4f83288/679addaaaca6afdc495d890d_api.png'/>

     
    </section>
    <section className={`command-line-interface ${cli?'':'hide'}`}>
      <h1>Console</h1>
      <p>{JSON.stringify(fetch)}</p>
      <form>
      <input id="cliinput "type='text' onChange={(e)=>handleChange(e)} value={value}></input>
      <div className='submit-div' onClick={handleConsole}>Submit</div>
      </form>
    </section>
    </>
  )
}

export default App
