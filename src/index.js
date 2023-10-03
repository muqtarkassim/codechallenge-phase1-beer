
function fetchData(){

    fetch(' http://localhost:3000/beers')
    .then(res=> res.json())
    .then(data=> functionData(data))
}

function functionData(beers){
const ulList=document.querySelector('#beer-list');
const beerhead=document.querySelector('#beer-name')
const beerdesc=document.querySelector('#beer-description')
const beerReview=document.querySelector('#review-list')
const beerimage=document.querySelector('#beer-image')
const form=document.querySelector('#review-form');
const textarea=document.querySelector('#review');

ulList.textContent='';
beerdesc.textContent='';
beerimage.src='';
beerReview.textContent='';

beers.forEach((beer,index) => {
   
   const listItems=document.createElement('li')
   listItems.textContent=beer.name;
   ulList.appendChild(listItems)
  

// display beer details when clicked 
   listItems.addEventListener('click',() =>{
    
    beerhead.textContent=beer.name;
    beerimage.src=beer.image_url;
    beerdesc.textContent=beer.description;
    beerReview.textContent='';

    beer.reviews.forEach(review =>{
        const beerlist=document.createElement('li')
        beerlist.textContent=review;
        beerReview.appendChild(beerlist)

      
    })
    //   add review 
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newreview = textarea.value;
        beer.reviews.push(newreview);
        const beerlist = document.createElement('li');
        beerlist.textContent = newreview;
        beerReview.appendChild(beerlist);
        textarea.value = '';
    });

   
   })
 

if (index===0){
    beerhead.textContent=beer.name;
    beerimage.src=beer.image_url;
    beerdesc.textContent=beer.description;
    beerReview.textContent='';
    beer.reviews.forEach(review =>{
        const beerlist=document.createElement('li')
        beerlist.textContent=review;
        beerReview.appendChild(beerlist)

      
    })

}
    
});

   
}
document.addEventListener('DOMContentLoaded',fetchData)



