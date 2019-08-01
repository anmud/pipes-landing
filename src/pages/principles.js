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

                      <div className="flex flex-col">
                         <h1 className="text-2xl sm:text-4xl font-bold text-left tracking-normal">Our Principles</h1> 
                         <div className="bg-black h-2 w-24 -mt-2"></div>
                      </div>
                      
                    
                <div className="flex mt-8 sm:mt-16">
                <p className="max-w-full mb-6 text-lg text-left font-bold leading-relaxed tracking-normal sm:max-w-md  md:max-w-lg lg:max-w-2xl  sm:text-2xl ">
                We don’t believe in the traditional way of doing business: 
                using common sense as our guide, 
                we reject convention and try to break with it as much as we can.
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
                                   First, we’re not subject to fixed schedules: we find that working every day at the same hour and time is absurd.
                                    For us, sitting in front of the computer until the bell rings is senseless. 
                                   We prefer to work when we’re at our best.</p>
          
                                   <p>
                                   We love what we do; it’s what we’re passionate about. 
                                   Therefore at The Agile Monkeys it is not necessary to keep an eye on everybody to make sure they’re working, 
                                   because everyone does their best and each of us does it our own way.
                                   </p>
          
                                  <p>
                                  Our time is precious, so we try to make the most of it. 
                                  We do not hold unnecessary meetings, but only well-prepared, 
                                  interesting meetings in which new ideas are proposed 
                                  and discussed in a highly creative environment.
                                  </p>
                                  
                                  <p>We are especially fond of nerds, geeks, and shy, creative, and different individuals. 
                                     However, we do not like people who claim to know the one truth and believe they are above everything and everybody.
                                      We wouldn’t work with the best programmer in the world if he or she were a lone-wolf programmer who didn’t appreciate other people’s opinions. 
                                     We believe that a good team is a thousand times better than any individual. Also, we have fun working together and that is absolutely priceless.
                                  </p>
          
                               <p>
                               We don’t have any investment from outsiders, so we don’t need to justify anything or account to anyone.
                                We are in control: we can be agile and think in the long-term, about the real business and real stuff. 
                               We are always trying to run far from what smells like tech bubble behaviours, projects, and people.
                               </p>
          
                                <p>
                                We are not zealots about any technology, process, or method. 
                                We tend to constantly question any issue. 
                                We even question whether we shouldn’t be questioning everything.
                                </p>
          
                               <p>We hate buzzwords and marketing bullshit.</p>
          
                                 <p>We prefer to talk about real stuff, go deep into every matter, 
                                    understand it, criticise it, simplify it, and then execute.
                                 </p>
          ‍
                               <p>
                               We believe that discussions about which technology is better are mostly held by developers who are only defending what they know and what benefits them.
                                Of course, we recognise that there are obsolete technologies. But we believe that it’s important to learn new things, 
                               and constantly start from scratch. We think that while this may not necessarily make us better in the near future, 
                               it certainly will in the medium- and long-term.
                               </p>
                                
                                <p>
                                Among other tools, we use Swift, Haskell, C, C++, Ruby on Rails, 
                                Objective-C, Go, Java, PHP, Scala, React, Angular, R, Python, TensorFlow among many others. 
                                We do not stick to any of them all the time, and we don't like them all equally.
                                </p>
          
                               <p>
                               We like to do pair programming and code review, 
                               and we are crazy about the quality of everything we do, from the code to the design.
                               </p>
                             
                              <p>
                              We love pragmatic programmers. We don’t like “code-crunchers.”
                              The most important tasks of a programmer are thinking, being creative, and problem-solving—that’s what we get paid for.
                               Thus, we do not believe in locking programmers in a cave: we believe that they must understand the project and its goals, 
                               and that the best way to meet deadlines is to understand the environment and simplify to the max (haste makes waste). 
                               Spaghetti code is not one of our favourite meals.
                              </p>
          
                             <p>
                             We love talking about the impossible, about the future, about how we can change it, and what we can do to create that change. 
                             We enjoy talking about nerd stuff, robots, sidereal space, AI, the brain, energy, psychology, 
                             what’s going to happen some day, and how we can participate; 
                             but above all what we love is our business and our team.
                             </p>
          
                             <p>
                             We do care about society, and we would like to do something meaningful and make a real contribution to the world.
                              We realise that what we’re currently doing has almost no impact on society right now. But we have plans for the future. 
                              In the short-term we want to move into the field of medical technology; in the long-term, we’re interested in environmental impact
                               (like the efficient and sustainable creation of products). We believe that AI, data management,
                              and robotics are going to be crucial and therefore we strongly believe that businesses 
                              like ours can play a fundamental role in the construction of a better future.
                             </p>
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
