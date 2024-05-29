import { motion } from "framer-motion"
const Footer = ()=>{
    return(
        <div className="w-full bg-pink-600 md:px-14 mt-40 max-w-screen-3xl mx-auto text-white py-8">
          <div className=" my-14 space-y-5 flex flex-col md:flex-row px-16">
            <div className="md:w-1/2 space-y-8">
            <motion.span  initial={{ y:'-100vw' }} animate={{scale:1.3,y:-8,  }} transition={{type:"tween",duration:.8}} className="text-3xl">𝕺𝖈𝖍𝖎</motion.span>
            <p className=" md:w-[300px] leading-normal">A simple paragraph is comprised of three major components. The first sentence,
            which is often a declarative sentence.</p>
            <div className="">
                <input type="email" name="email" id="email" placeholder="your email"
                className="bg-blue-100 py-2 px-4 rounded-md  focus:outline-none"/>
                <input type="submit" value="subscribe"
                className="px-4 py-2 bg-pink-400 rounded-md -ml-2  cursor-pointer hover:bg-pink-200 hover:text-black duration-300 transition-all" />
            </div>
            </div>
           
            <div className="md:w-1/2 flex flex-row flex-wrap justify-between gap-8 items-start">
                <div className="space-y-4 mt-5">
                    <h4 className="text-xl">Platform</h4>
                    <ul className="space-y-3 flex flex-col">
                        
                            <a href="/" className="'block hover:text-gray-300">Overview</a>
                            <a href="/" className="'block hover:text-gray-300">Features</a>
                            <a href="/" className="'block hover:text-gray-300">About</a>
                            <a href="/" className="'block hover:text-gray-300">Pricing</a>
                       
                    </ul>
                </div>
                <div className="space-y-4 mt-5">
                    <h4 className="text-xl">Help</h4>
                    <ul className="space-y-3 flex flex-col">
                        
                            <a href="/" className="'block hover:text-gray-300">How does it work</a>
                            <a href="/" className="'block hover:text-gray-300">Where to ask question</a>
                            <a href="/" className="'block hover:text-gray-300">How to play</a>
                            <a href="/" className="'block hover:text-gray-300">What is needed for this</a>
                       
                    </ul>
                </div>
                <div className="space-y-4 mt-5">
                    <h4 className="text-xl">Contact</h4>
                    <ul className="space-y-3 flex flex-col">
                        
                            <a href="/" className="'block hover:text-gray-300">(012) 1234-567-678</a>
                            <a href="/" className="'block hover:text-gray-300">123 xyz xyz</a>
                            <a href="/" className="'block hover:text-gray-300">qwekrnwqkdfnwqf </a>
                       
                    </ul>
                </div>
            </div>
          </div>

          <hr/>

          <div className="p-4">
            <p>@ XYZ 20XX --- 20XX. All rights reserved.
            </p>
          </div>
        </div>
    )
}
export default Footer;