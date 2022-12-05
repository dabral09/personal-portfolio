import React from 'react';

const Testimonial = () => {
  return (
    <div id="testimonial">
        <h2>Testimonial</h2>
        
        <section>

            <TestimonialCard name={"Vinay Pathak"} feedback={"Your way of designing is Awesome"} />
            <TestimonialCard name={"Akhilesh Kukreti"} feedback={"Delivered product before time"} />
            <TestimonialCard name={"Aman Singh"} feedback={"Excellent use of component in UI"} />
            
            
        </section>
        </div>
  );
}

const TestimonialCard =({name,feedback}) => {
   return <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
}

export default Testimonial;