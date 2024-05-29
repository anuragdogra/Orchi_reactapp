import { motion } from "framer-motion"
const Home = ()=>{
    
    return(
        <div className="md:px-12 p-4 mx-auto mt-27 overflow-hidden " id="home">
              <div className="bg-gradient-to-r  from-sky-300 to-pink-300 rounded-xl rounded-br-[80px] px-4 py-9 md:p-9">
                 <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                     
                     <div class="iframe-container"><motion.iframe  initial={{ x:'100vw' }} animate={{ x : 0 }}transition={{ type:"tween", duration:1}}
                     className='w-full  h-[300px] sm:h-[300px] sm:w-[400px] md:h-[386px] md:w-[550px]'src="https://lottie.host/embed/98b38059-95e2-4407-808a-51b9b49cfa89/TAGfZiJr6e.json"></motion.iframe>
                     
                     </div>
                     <div className="headerline md:w-3/5">
                        <h2 className="md:text-7xl text-4xl  font-semibold bg-gradient-to-r bg-clip-text leading-relaxed text-transparent from-indigo-550 via-black to-indigo-550 animate-text ">Develop your skills without difference</h2>
                        <p className="text-[#020705] text-2xl mt-8">A good example of paragraph contains a topic senetence,details and a conclusion.
                            There are many different kinds of animals that live in china.
                        </p>
                        <div className="space-x-5 space-y-12 ">
                            <motion.button
                              whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}}                        
                            className="px-8 py-2 bg-blue-400 font-semibold text-white rounded  ">Get started</motion.button>
                            <motion.button className="bg-blue-400  text-white rounded font-semibold px-8 py-2"  whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}}    >Discount</motion.button>
                        </div>
                     </div>
                
                 </div>
              </div>
        </div>
    )
}
export default Home