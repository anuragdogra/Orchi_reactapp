import { motion } from "framer-motion"
const NewsLetter = ()=>{
   return(
    <div className="md:px-12 p-4 mx-auto mt-27 overflow-hidden">
    <div className="bg-gradient-to-r  from-sky-300 to-pink-300 rounded-xl rounded-br-[80px] px-4 py-9 md:p-9">
       <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
           
           <div class="iframe-container"><motion.iframe initial={{ x:100 }} whileInView={{x:0}} viewport={{ once: true }}  transition={{type:"tween",duration:1}}
           className='w-full  h-[300px] sm:h-[300px] sm:w-[400px] md:h-[386px] md:w-[550px]'src="https://lottie.host/embed/32f29232-29a4-4b1e-b534-c33739a5dc57/mOCxUg320H.json"></motion.iframe>
           
           </div>
           <div className="headerline md:w-3/5">
              <h2 className="md:text-7xl text-4xl  font-semibold bg-gradient-to-r bg-clip-text leading-relaxed text-transparent from-indigo-550 via-black to-indigo-550 animate-text ">Each student can share their discount code for friends</h2>
              <p className="text-[#020705] text-2xl mt-8">
                 A simple paragraph is comprised of three major components. The first senetence, which is often a declarative
                 sentence, is called the "topic sentence".
              </p>
              <div className="space-x-5">

                  <motion.button className="bg-blue-400 mt-10 text-white rounded font-semibold px-8 py-2"  whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}}>I have a code</motion.button>
              </div>
           </div>
      
       </div>
    </div>
</div>
   )
}
export default NewsLetter;