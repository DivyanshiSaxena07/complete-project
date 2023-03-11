import MoreProduct from "./MoreProduct"

function Home(){
    return<>
    
    <section className="slider_section">
               <div className="banner_main">
                  <div className="container">
                     <div className="row d_flex">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                           <div className="text-bg">
                              <h1>Jewellery</h1>
                              <span>Free Multipurpose Responsive <br/> 
                              <strong className="land_bold">Landing Page 2019</strong></span>
                              <a href="#">Contact Us</a>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="text-img">
                              <figure><img src="images/img.png" /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         
         </section>
         <MoreProduct/>
    </>
}
export default Home