import { useState } from "react";
import tick from '../Assets/tick.png'
import cross from '../Assets/remove.png'
import { motion } from "framer-motion"
const Pricing = ()=>{
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name:"start", monthlyPrices:19,yearlyPrice:199,description:"A common form of Lorem ipsum reads:Lorem ipsum dolor sit FaAsymmetrik, consectetur adipiscing ElementInternals."},
        {name:"premium", monthlyPrices:39,yearlyPrice:399,description:"A common form of Lorem ipsum reads:Lorem ipsum dolor sit FaAsymmetrik, consectetur adipiscing ElementInternals."},
        {name:"advance", monthlyPrices:59,yearlyPrice:599,description:"A common form of Lorem ipsum reads:Lorem ipsum dolor sit FaAsymmetrik, consectetur adipiscing ElementInternals."},
    ]
    return(
        <div className="md:px-14 p-4 max-w-s mx-auto py-10 " id="pricing">
            <div className="text-center">
                  <h2 className="md:text-2xl text-3xl font-extrabold text-pink-800 mb-2">
                      Here are all our planets
                  </h2>
                  <p className="md:w-1/3 mx-auto px-4">A simple paragraph is comprised of three major components. The which is often a declarative senetence.</p>
            </div>

            <div className="mt-16 flex justify-center items-center">
                  <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                   <span className="mr-8 text-2xl font-semibold">Monthly</span>
                   <div className="w-14 h-6 rounded-full bg-gray-300 transition duration-300 ease-in-out" >
                     <div className={`w-6 h-6 rounded-full transition duration-300 ease-in-out ${isYearly?"bg-pink-400 ml-8":"bg-gray-500"}`}>

                     </div>
                   </div>
                   <span className="ml-8 text-2xl font-semibold">Yearly</span>
                  </label>
                 <input type="checkbox" id="toggle"  className="hidden" checked={isYearly} onChange={()=>{
                    setIsYearly(!isYearly)
                 }}/>
            </div>

            <div className="grid sm:grid:cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {packages.map((pkg,index)=>(
                    <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80,  }}
                    className="border py-20 md:px-6 px-4 rounded-lg shadow-2xl font-light" key={index}>
                    <h3 className="text-3xl font-bold text-center text-primary">
                        {pkg.name}
                    </h3>
                    <p className="text-tartiary text-center my-5">{pkg.description}</p>
                    <p className="mt-5 text-center text-pink-400 text-4xl font-bold">
                        ${isYearly?`${pkg.yearlyPrice}`:`${pkg.monthlyPrices}`} <span className="">/{isYearly?'year':'month'}</span>
                    </p>
                    <ul className="mt-4 space-y-2 px-4"> 
                      <li className="flex gap-3 items-center"><img className="w-4 h-4" src={tick} alt=""/>Videos of Lessons</li>
                      <li className="flex gap-3 items-center"><img className="w-4 h-4" src={tick} alt=""/>HomeWork Check</li>
                      <li className="flex gap-3 items-center"><img className="w-4 h-4" src={tick} alt=""/>Addtional practical task</li>
                      <li className="flex gap-3 items-center"><img className="w-4 h-4" src={cross} alt=""/>Monthly Conferences</li>
                      <li className="flex gap-3 items-center"><img className="w-4 h-4" src={cross} alt=""/>Personal advice from teacher</li>
                    </ul>
                     <motion.button className="bg-pink-400 mt-10 mx-auto flex items-center justify-center text-white rounded font-semibold px-8 py-2"  whileHover={{scale:1.1,textShadow:"0px 0px 0px rgb(255,255,255",boxShadow:"0px 0px 8px rgb(255,255,255)"}}    >Discount</motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Pricing;