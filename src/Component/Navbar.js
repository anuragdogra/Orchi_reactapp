import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { RiMenu5Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion"
import { Link } from "react-scroll";
const Navbar = ()=>{
    const [isMenuOpen,setIsMenuOpen] = useState(false);
   
    const toggleMenu = ()=>{
       setIsMenuOpen(!isMenuOpen);
    }
    
    const navitems = [
        {
            link:"Overview",path:"home"
        },
        {
            link:"Feature",path:"feature"
        },
        {
            link:"About",path:"about"
        },
        {
            link:"Pricing",path:"pricing"
        },

    ]
    return(
        <>
         <div className=" top-0 right-0 left-0 navbar flex justify-between px-14 py-10 items-center">
        
        <motion.span  initial={{ y:'-100vw' }} animate={{scale:1.3,y:-8,  }} transition={{type:"tween",duration:.8}} className="text-3xl">𝕺𝖈𝖍𝖎</motion.span>  
        <ul className="md:flex hidden text-xl md:space-x-4 items-center">
           {navitems.map(({link,path})=>(
              <Link key={link} spy={true} smooth={true} offset={-100}
                to={path} className="hover:text-gray-200 cursor-pointer">{link}
              </Link>
              
           ))}
        </ul>
        <div className="space-x-3 hidden md:flex items-center ">
          <a href="/"><GrLanguage /></a>
          <button className=" bg-pink-200 px-4 py-2  translate-all rounded">Sign up</button>
        </div>
         <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none" >
              {
                  isMenuOpen?(<FaXmark  className="w-6 h-6 text-xl"/>):(<RiMenu5Fill className="w-6 h-6 text-xl" />)
              }
               </button>
         </div>
         
     </div>
     <motion.div   initial={{ y: 0 }}
                animate={{ y: isMenuOpen ?0: -200 }}
                transition={{ duration: 0.5 }}  className={`md:hidden  font-semibold w-full p-4 z-[999] rounded-bl-[80px] rounded-br-[80px]  bg-pink-300  ${isMenuOpen ? "absolute":"hidden"} `} >
                <ul className="space-y-6 px-4 flex flex-col p-4">
               {navitems.map(({link,path})=>(
                 <Link key={link} spy={true} smooth={true} offset={-80} 
                 to={path} onClick={toggleMenu} className= "w-full hover:text-gray-200 cursor-pointer ">{link}
                </Link>
             ))}
            </ul>
     </motion.div>
        </>
      

    )
}
export default Navbar;