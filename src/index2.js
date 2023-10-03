// Code here
function functionData(beers) {
    const ulList = document.querySelector('#beer-list');
    const beerhead = document.querySelector('#beer-name');
    const beerimage = document.querySelector('#beer-image');
    const beerdesc = document.querySelector('#beer-description');
    const beerReview = document.querySelector('#review-list');
    const reviewForm = document.querySelector('#review-form');
    const reviewTextarea = document.querySelector('#review');

    // Clear existing content
    ulList.innerHTML = '';
    beerhead.textContent = '';
    beerimage.src = '';
    beerdesc.textContent = '';
    beerReview.innerHTML = '';

    beers.forEach((beer, index) => {
        const listItems = document.createElement('li');
        listItems.textContent = beer.name;
        ulList.appendChild(listItems);

        listItems.addEventListener('click', () => {
            // Update details when a beer is clicked
            beerhead.textContent = beer.name;
            beerimage.src = beer.image_url;
            beerdesc.textContent = beer.description;

            // Clear and populate reviews
            beerReview.innerHTML = '';
            beer.reviews.forEach((review) => {
                const reviewItem = document.createElement('li');
                reviewItem.textContent = review;
                beerReview.appendChild(reviewItem);
            });

            // Add an event listener to the review form to handle submission
            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent the form from submitting

                const newReview = reviewTextarea.value;
                beer.reviews.push(newReview); // Add the new review to the beer's reviews array

                // Create a new review list item and append it to the reviews list
                const reviewItem = document.createElement('li');
                reviewItem.textContent = newReview;
                beerReview.appendChild(reviewItem);

                // Clear the textarea
                reviewTextarea.value = '';
            });
        });

        if (index === 0) {
            // Show details of the first beer by default
            beerhead.textContent = beer.name;
            beerimage.src = beer.image_url;
            beerdesc.textContent = beer.description;
            beer.reviews.forEach((review) => {
                const reviewItem = document.createElement('li');
                reviewItem.textContent = review;
                beerReview.appendChild(reviewItem);
            });
        }
    });
}