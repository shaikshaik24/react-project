import React from 'react';
import  c5 from '../images/c5.jpeg';  
import  c4 from '../images/c4.jpeg';  
import  c3 from '../images/c3.jpeg';  
import  th1 from '../images/th1.jpeg';  
import  th2 from '../images/th2.jpeg';  
import  th3 from '../images/th3.jpeg';  
import  th4 from '../images/th4.jpeg';    
const Home=()=>{
    return(
        <div>
             {/* carousel start */}
             <center>
            <div id="carousel-id" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-id" data-slide-to="1" class=""></li>
                    <li data-target="#carousel-id" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active">
                        <img src={c4} alt="First slide" />
                        
                    </div>
                    <div class="item">
                        <img  alt="Second slide" src={c5}/>
                    </div>
                    <div class="item">
                        <img  alt="Third slide" src={c3}/>
                    </div>
                    </div>
                <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
                <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
            </div>
            </center>

            {/* carousel end */}
            <br></br>
            <div>
            <h2 class="text-info">
                <i><center><b>Combos</b></center></i>
            </h2>
            </div>
           
            <br></br>
            <div className='thumbnail'>
                <div className='col-md-3'>
                <a href="#" class="thumbnail">
                <img  src={th4} alt="First slide" />
                </a>
                <div class="caption">
                <a href="#" class="thumbnail">
            <h2>COLD PRESS</h2>
            <p class="text-muted">Category: Classic</p>
            
            <p>May your International Coffee Day be filled with the rich flavours and delightful aromas of the finest coffee beans. Enjoy every sip!</p>
            <p><strong>Price: $199.99</strong></p>
            <button class="btn btn-primary">Add to Cart</button>
            </a>
        </div>
            
            
                </div>
                

               {/* thumbnail start */}
               <div className='thumnail'>
            <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img  src={th1} alt="First slide" />
            </a>
            <div class="caption">
                <a href="#" class="thumbnail">
            <h2>COLD PRESS</h2>
            <p class="text-muted">Category: Classic</p>
            
            <p>May your International Coffee Day be filled with the rich flavours and delightful aromas of the finest coffee beans. Enjoy every sip!</p>
            <p><strong>Price: $199.99</strong></p>
            <button class="btn btn-primary">Add to Cart</button>
            </a>
        </div>
            </div>
            <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img  src={th2} alt="second slide"/>
            </a>
            <div class="caption">
                <a href="#" class="thumbnail">
            <h2>COLD PRESS</h2>
            <p class="text-muted">Category: Classic</p>
            
            <p>May your International Coffee Day be filled with the rich flavours and delightful aromas of the finest coffee beans. Enjoy every sip!</p>
            <p><strong>Price: $199.99</strong></p>
            <button class="btn btn-primary">Add to Cart</button>
            </a>
        </div>
            </div>
            <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img  src={th3} alt="third slide"/>
            </a>
            <div class="caption">
                <a href="#" class="thumbnail">
            <h2>COLD PRESS</h2>
            <p class="text-muted">Category: Classic</p>
            
            <p>May your International Coffee Day be filled with the rich flavours and delightful aromas of the finest coffee beans. Enjoy every sip!</p>
            <p><strong>Price: $199.99</strong></p>
            <button class="btn btn-primary">Add to Cart</button>
            </a>
        </div>
            </div>
            </div>
            </div>
         {/* thumbnail End */}
        </div>
       
        
        
        
    )
    
}
export default Home;