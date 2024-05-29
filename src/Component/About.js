import { motion } from "framer-motion"
const About  = ()=>{
    return(
        <div className="md:px-14 mx-auto max-w-s overflow-hidden space-y-40 p-8 " id="about">
              <div className="flex flex-col md:flex-row justify-center  md:gap-60 ">
                <div className=" md:w-1/2 flex justify-center  overflow-hidden">
                <motion.iframe   initial={{ x: 150}}
                whileInView={{ x: -7 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.3, duration: 1 }} className="h-[200px]  sm:items-center sm:h-[300px] sm:w-[0px] md:h-[340px] md:w-[500px]" src="https://lottie.host/embed/e97adf96-e14d-4e7c-97d1-65608a55620c/PW4xjWrlro.json"></motion.iframe>
                </div>
                <div className="md:w-2/5"> 
                 <h2 className="md:text-5xl  text-3xl font-bold text-pink-500 mb-5 leading-normal">
                 We have been improving our product <span className="text-blue-400"> for many years.</span>
                 </h2>
                 <p className="text-primary text-lg mb-7">
                    A good example of a paragraph conatins a topic conclusion. There are many different
                    kinds of animals that live in china.
                 </p>
                 <motion.button
                    initial={{ x: 150}}
                    whileInView={{ x: -7 }}
                    viewport={{ once: true }}
                    whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}} 
                    transition={{type:"spring", bounce: 0.3, duration: 1 }}                       
                    className="px-8 py-2 bg-pink-400 font-semibold text-white rounded  ">Get started</motion.button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse justify-center md:gap-60  ">
                <div className="w-full lg:w-1/3 md:w-1/2 flex justify-center  overflow-hidden">
                <motion.iframe   initial={{ x: 150}}
                whileInView={{ x: -7 }}
                viewport={{ once: true }}
                transition={{type:"spring", bounce: 0.3, duration: 1 }} className="h-[200px]  sm:items-center sm:h-[300px] sm:w-[0px] md:h-[340px] md:w-[460px]" src="https://lottie.host/embed/932f4ed9-7c8b-43aa-9258-b2120cdec732/sbtEAC3SkH.json"></motion.iframe>
                </div>
                <div className="md:w-2/5">
                 <h2 className="md:text-5xl  text-3xl font-bold text-pink-500 mb-5 leading-normal">
                  You can practice at any<span className="text-blue-400"> time Conventient for you</span>
                 </h2>
                 <p className="text-primary text-lg mb-7">
                    A good example of a paragraph conatins a topic conclusion. There are many different
                    kinds of animals that live in china.
                 </p>
                 <motion.button
                    initial={{ x: 150}}
                    whileInView={{ x: -7 }}
                    viewport={{ once: true }}
                    whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}}  
                    transition={{type:"spring", bounce: 0.3, duration: 1 }}                      
                    className="px-8 py-2 bg-pink-400 font-semibold text-white rounded  ">Get started</motion.button>
                </div>
              </div>
        </div>
    )
}
export default About;