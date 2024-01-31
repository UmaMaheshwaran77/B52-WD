

import React from 'react'

function CyberSecurity() {

const cyberDetails=[{
  img:"data:image/jpeg;base64,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",
title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
content:"Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!",
date:"27 December 2022",
comment:" No Comments",
},{
 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOruwtDe1aSXLlpcq6evd1W9TshQBNaBIsX5lp7wHOEbGEYVUaZtVJvJD85Tx1jvNTWyM&usqp=CAU",
  title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
  content:"With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform",
  date:"20 December 2022",
  comment:" 1 Comments",
 
},{
  img:"data:image/jpeg;base64,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",
title:"Top 7 Cyber Security Attacks in Real Life",
content:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.",
date:"10 June 2022 ",
comment:" 1 Comments",
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNvPj12KhFHtNnk69W34kVT1lo-WFfwvshGRKOu0rTVlqVSpDODjPGpuUZCUGLxvjxBI&usqp=CAU",
title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
content:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you",
date:"22 June 2022",
comment:" No Comments",
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxucvMxahenCFEuF0npWPKBdWEWTlNeloqdIHMNS7lpEthluDQDixAKO7eVQNypFUgXpw&usqp=CAU",
title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
content:"There are two types of companies: those that have been hacked, and those who don’t yet know they have been hacked.",
date:"1 March 2021",
comment:" No Comments",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-1200x571.webp",
title:"The Ultimate Cybersecurity Roadmap for Beginners",
content:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual growth rate of cybersecurity jobs as identified by LinkedIn is 30%.",
date:"1 March 2021",
comment:" No Comments",
}]


  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            cyberDetails.map((detail)=>{
                return  <div className="col mb-6 ">
                <div className="card h-100 border-0 ">
                  <img src={detail.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text"> {detail.content}
          </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">{detail.date} &ensp;  {detail.comment}
                   </small>
                  </div>
                </div>
              </div>
             
              
            })
          }
          
          </div>
          </div>
  )
}

export default CyberSecurity;