import React from 'react'
import k from './back1.webp'
import l from './back2.webp'
import m from './back3.webp'
import n from './back4.webp'
import o from './back5.webp'
import p from './back.webp'
export default function Dowbbar() {
  return (
   <>
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
 <img src={k} class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
 <img src={l} class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
 <img src={m} class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
 <img src={n} class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
 <img src={o} class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
 <img src={p} class="d-block w-100" alt="..." />
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
   </>
)
}
