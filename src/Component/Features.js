import { motion } from "framer-motion"
const Features = ()=>{
    return(
        <div className="my-24 md:px-24 px-4 mx-auto" id="feature">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div 
                 initial={{ x: -150}}
                 whileInView={{ x: 0 }}
                 viewport={{ once: true }}
                 transition={{type:"tween", bounce: 0.1, duration: 1 }}
                className="md:w-1/4 ">
                  <h3 className="text-3xl text-black font-bold lg:w-1/2 mb-3">
                    Why we are better than others
                  </h3>
                  <p className="text-base text-tartiary">
                    A simple paragraph is comprised of three major components. The first senetence, which is often a declarative senetence,
                    is called the "topic senetence."
                  </p>
                </motion.div>
                <div className="w-full lg:w-3/4">
                   <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 ">
                   <motion.div whileHover={{scale:1.1,boxShadow:"0px 4px 15px rgba(255, 105, 180, 0.6)"}}  className="bg-[rgba(255,255,255,0.04)]  rounded-[35px] md:h-96   shadow-2xl cursor-pointer p-8 justify-center flex items-center">
                        <div  >
                           <iframe       title="Description of content"                                                                                                                                                         
                            src="https://lottie.host/embed/5e4689bb-7264-4704-bd46-3010467003dc/wTylrqBM7x.json"></iframe>
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule.
                            </h5>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1,boxShadow:"0px 4px 15px rgba(255, 105, 180, 0.6)"}}  className="bg-[rgba(255,255,255,0.04)] rounded-[35px] md:h-96   shadow-2xl cursor-pointer p-8 md:mt-16 justify-center flex items-center">
                        <div  >
                           <iframe  title="Description of content"
                            src="https://lottie.host/embed/5e4689bb-7264-4704-bd46-3010467003dc/wTylrqBM7x.json"></iframe>
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule.
                            </h5>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1,boxShadow:"0px 4px 15px rgba(255, 105, 180, 0.6)"}}  className="bg-[rgba(255,255,255,0.04)] rounded-[35px] md:h-96  shadow-2xl cursor-pointer p-8 justify-center flex items-center">
                        <div  >
                           <iframe title="Description of content"
                            src="https://lottie.host/embed/5e4689bb-7264-4704-bd46-3010467003dc/wTylrqBM7x.json"></iframe>
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                                Conventient study schedule.
                            </h5>
                        </div>
                    </motion.div>
                   </div>
                </div>
            </div>
            

        </div>
    )
}
export default Features;