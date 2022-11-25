import React from 'react'
import "../style/About.css"

const About = () => {
  return (
    <div>
        <h1>About me</h1>
        {/* <h3>Maîtrise en Informatique (BAC+4)</h3> */}
        <br/>
        <div className='about_me'>
           <div className='my_picture'>
          <img src="me.jpg" alt='there is my_photo'/>
           </div>

           <div className='my_description'>
            <div className='boites_description'>
<div className='boite'>

</div>
<div className='boite'>
  
</div>
<div className='boite'>
  
</div>
            </div>
<p>Graduated from Higher Faculties of Studies in science and information technologies of communication. And recently, finished my training in FullStack JavaScript development at GO-MY-CODE . I'm seeking for a challenging position in a reputable organization to prove myself and improve my learning, skills and knowledge.</p>
     <br/>
     <div className='download'>
      <img src="diplome.jpg" alt="mon diplome" />     
         <div className='button_css'>
         <button> Download Certification </button>
         <br/>
         <button> Download CV </button> 
      </div> 
      </div>
           </div>
        </div>
    </div>
  )
}

export default About