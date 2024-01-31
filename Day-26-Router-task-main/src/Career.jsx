

import React from 'react'

function Career() {
  const careerDetails=[{
   
    img:"https://dgosxlrnzhofi.cloudfront.net/custom_page_images/549/page_images/SoftwareCareerGraph.jpg?1452894587",
  title:"Top Career Options in India in 2023",
  content:"In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes a transformation fueled by technological advancements and the growing need for sustainable practices, it’s essential to navigate the shifting landscape strategically.",
  date:"2 November 2023 ",
  comment:" No Comments",
  },{
  
    img:"https://media.licdn.com/dms/image/C4E12AQF5RW3zi60VKg/article-cover_image-shrink_600_2000/0/1520060131341?e=2147483647&v=beta&t=dmJOdlHV04YfWkl9xXIHbjz7kyYoSoIQe8_CaIIQ-Mk",
  title:"Machine Learning Must-Knows: Reliable Models and Techniques",
  content:"Machine Learning (ML) is a field of Artificial Intelligence (AI) that focuses on the development of algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed",
  date:"10 November 2023",
  comment:" No Comments",
  },{
    
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wRJPTEqxjjch2YbhjcUULo5LzKYOnsQnKdTPqY8-yEdU02AhJTDJaCngGaWluCDFLQk&usqp=CAU",
    title:"Is AWS Certification Worth It? | Best AWS Certifications 2023",
  content:"IT runs the world and is everywhere. And if you’re someone who’s least interested in coding and still wants to get into it. You’ve come to the right place. In this blog, we’ll be talking about AWS Certifications.",
  date:"14 August 2023",
  comment:" No Comments",
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/05/How-to-prepare-for-any-job-interview-1200x675.webp",
  title:"How To Prepare for Any Job Interview? | 7 Best Hacks",
  content:"Getting through a job interview opens the gateway to your dream job. But did you know that interview preparation is the real game-changer?",
  date:"14 September 2023",
  comment:" No Comments",
  },{
   
    img:"data:image/jpeg;base64,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",
  title:"Graphic Designer vs. UI/UX Designer: Key Differences You Should Know",
  content:"It has always been confusing for people to understand the key differences between Graphic designers vs. UI/UX designers. To help you clear your confusion and clear your way to becoming one, this blog has been articulated",
  date:"13 September 2023 ",
  comment:" No Comments",
  },{
   
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2U7pQ0alulfR1qRXNKDGAoTecGgILg6nxM2XdsRP94qrGLIawwpgPkGbxp7ZDzCE7XQ&usqp=CAU",
  title:"Can Mechanical Engineers Become Software Engineers? | Yes!",
  content:"This is a must-read for you if your educational background is in mechanical engineering & yet you aspire for a software engineer job title. ",
  date:"29 July 2023 ",
  comment:" No Comments",
  }]
  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            careerDetails.map((detail)=>{
                return  <div className="col mb-6 ">
                <div className="card h-100 border-0">
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

export default Career;