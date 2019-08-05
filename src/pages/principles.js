import React, {useState} from 'react'

import {Link} from 'gatsby'


const Principles = ({children}) => {

  const  [readToggle, setToggle] = useState(false)

  const toggleReadMore = () => {
   setToggle(readToggle => !readToggle)
 
 }

    return (
      
 <div id="principles" className="container mx-auto w-auto sm:px-2 pt-1 sm:pt-24 pb-8 flex-grow">
               <div className="bg-white">
                  <div className="flex flex-col sm:px-56 mx-8 ">

                      <div className="flex flex-col pt-16">
                         <h1 className="text-2xl sm:text-4xl font-bold text-left tracking-normal">Our Principles</h1> 
                         <div className="bg-black h-2 w-24 -mt-2"></div>
                      </div>
                      
                    
                <div className="flex mt-8 sm:mt-16">
                <p className="max-w-full mb-6 text-lg text-left font-bold leading-relaxed tracking-normal sm:max-w-md  md:max-w-lg lg:max-w-2xl  sm:text-2xl ">
                Great poems were written before us. Great inventions were made before us. 
                Great software was written before us. We do believe by looking into the past,
                 we will be successful today. We as a team are highly inspired by the UNIX philosophy. 
                 UNIX was written fifty years ago and still does teaches us of the many aspects of business and software design. 
                 The principles of the UNIX philosophy are simple. They are so simple, in fact, that people tend to regard them as having little importance. 
                 That’s where the deception comes in. Their simplicity disguises the fact that these ideas are incredibly effective when carried out consistently.

                   </p>

                </div>
                <div className="flex -mt-1 ">
                    <button type="link" onClick={() => toggleReadMore()} className={`${readToggle ?  "hidden" : "flex underline text-black appearence-none"}`}>Read more</button>
                </div>
                {readToggle ? (
                   
                             <div className="container mx-auto w-auto flex-grow">
                             <div className="bg-white">
                                <div className="flex flex-wrap">
                                   <div className="text-left text-lg leading-relaxed">
                                   <p>
                                   Small is beautiful.
                                    Small things have tremendous advantages over their larger counterparts. 
                                    Among these is the ability to combine with other small things in unique and useful ways. 
                                   </p>
          
                                   <p>
                                   Build a prototype as soon as possible. 
                                   Most people would agree that prototyping is a valuable element of any project.
                                    But whereas prototyping is only a small part of the design phase under other methodologies, 
                                    it’s the principal vehicle for generating an effective design.

                                   </p>
          
                                  <p>
                                  Look for the 90 percent solution. Doing 100 percent of anything is difficult. 
                                  Doing only 90 percent is far more efficient and cost-effective.
                                   We often look for solutions that satisfy 90 percent of the target user base,
                                    leaving the other 10 percent to fend for itself. 


                                  </p>
                                  
                                  <p>
                                  Make each program do one thing well. 
                                  By focusing on a single task, a program can eliminate much extraneous code that often results in excess overhead, 
                                  unnecessary complexity, and lack of flexibility.
                                  </p>
          
                               <p>
                               The sum of the parts is greater than the whole. 
                               This principle stems from the idea that a large application built from a collection of smaller programs 
                               is more flexible and hence more useful than a single large program. 

                               </p>
          
                                <p>
                                Worse is better. A “least common denominator” system is the one most likely to survive. 
                                That which is cheap but effective is far more
                                 likely to proliferate than that which is high quality and expensive. 


                                </p>
          
                               <p>
                                  Our goal is to build simple, small, composable and cheap but effective data applications that leave no room for competition. 
                                  While the UNIX principles may sound radical for business folks who strive for perfection. We do tend to be more realistic,
                                   perfection is the enemy of the good.</p>
          
                               
                                   </div>
                                   
                                   <div className="flex underline -mt-1 text-black appearance-none">
                                     <button type="link" onClick={() => toggleReadMore()}>Read less</button>
                                  </div>
                                </div>
          
                             </div>
          
                          </div>
                ) : (
                   ''
                )}
        
                  
                  </div>
               </div>
            </div>

   
          
        
      
    
             
    )
}

export default Principles;
