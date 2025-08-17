export const Contact = () => {

    const handleFormSubmit = (formData)=>{
       const formInputData = Object.fromEntries(formData.entries())
       console.log(formInputData)
    }

    return(
        <section className="section-contact">
            <h2 className="container-title">Contact us</h2>

            
            <div className="contact-wrapper container">
            
             <form action={handleFormSubmit}>

                <input 
                type="text"
                placeholder="Enter your name"
                className="form-control"
                required 
                autoComplete="false"
                name="Username"/>
                
                <input 
                type="email"
                placeholder="Enter your email"
                className="form-control"
                required 
                autoComplete="false"
                name="email"/>
                
                <textarea 
                rows="10"
                placeholder="Enter your message"
                className="form-control"
                required 
                autoComplete="false"
                name="message"/>

                <button type="submit" value="send">Send</button>

            </form>

            </div> 

        </section>
    )
 
};