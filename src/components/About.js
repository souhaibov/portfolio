import React from 'react'
import "../style/About.css"

const About = () => {
  return (
    <section id="about">
   
        <h1>About me</h1>
        {/* <h3>Maîtrise en Informatique (BAC+4)</h3> */}
        <br/>
        <div className='about_me'>
           <div className='my_picture'>
            <div className='pic'>
          <img src="me.jpg" alt='welcome'/>
           </div>
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
         <div className='button_css'><br/>
         <h4>Download</h4>
         <div className='down_button'>
          <a href='Souhaib Salem certification.pdf' download='Souhaib Salem certification.pdf'>
         <button>Academic Report </button>
         </a>
        
         <a href='CV-Salem-Souhaib.pdf' download='CV-Salem-Souhaib.pdf'>
         <button>Curriculum Vitae </button> 
         </a>
      </div>
      </div> 
      </div>
           </div>
        </div>

    </section>
  )
}

export default About