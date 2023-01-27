// get filter element
const filterElement = document.querySelector('header input');
// get cards elements
const cards = document.querySelectorAll('.cards li');
// add input event for the filter element
filterElement.addEventListener('input', elementFilter);
   

// filter function
function elementFilter(){
// if the filter is not empty
if(filterElement.value != ''){
    // for each card of cards
    for(card of cards){
            // get card heading (title)
            let title = card.querySelector('h2')
            // tranform to lower case
            title = title.textContent.toLowerCase()
            
            // transform filter text to lower case
            let lowerElementFilter = filterElement.value.toLowerCase()
            // if card title does not include the filter text
            if(!title.includes(lowerElementFilter)){
                // hide the card element
                console.log('oi')
            }
            // else
        
        // unhide the card element
  // else
}}else{
 
    // for each card of cards
      // unhide the card element
    }

}      