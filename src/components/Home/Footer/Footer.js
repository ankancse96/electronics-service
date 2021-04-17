import React from 'react';
import { faFacebookF,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div>
            <footer class="bg-light text-center text-white">

  <div class="container p-4 pb-0">

    <section class="mb-4">

      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faFacebookF} /></a>

        <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faLinkedin} /></a>

 
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faGithub} /></a>

 
     

    
     
 
      
    </section>

  </div>


  
  <div class="text-center p-3" style={{backgroundColor: "#3b5998"}}>
    © 2021 Copyright: Electronic solution.com
    
  </div>

</footer>
        </div>
    );
};

export default Footer;