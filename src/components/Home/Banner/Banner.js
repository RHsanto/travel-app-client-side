import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <div>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-slider-img-2-.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h4>Come with us</h4>
        <h1>Relax and Enjoy</h1>
        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
           augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas</p>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-slider-img-1-.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h4>Let's go now</h4>
        <h1>Explore and travel</h1>
        <p>The Travel Episodes does not just take storytelling to the next level with their writings but also with video clips, sound effects, and photography. It's like reading a futuristic storybook that teleported you to the place.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
  </div>
  );
};

export default Banner;