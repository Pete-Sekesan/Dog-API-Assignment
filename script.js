//function to get images from dogAPI
function getImages(numOfDogImages) {
    //if number of images asked for is less than 3, return 3 by default
    if (numOfDogs < 3){
        fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson()))
        .catch(error => alert('Oops! Try again Later'));
    }
    //if number asked for is greater than 50, create error and ask for number under 50
    else if (numOfDogImages > 50){
        return alert('Please select a number less than 50');
        }
        //return inputted number of dog images
        else {
            fetch('https://dog.ceo/api/breeds/image/random/${numOfDogs}')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson()))
        .catch(error => alert('Oops! Try again Later'));
 }
    }

//function to submit form input
function watchForm(){
    $('form').submit( event => {
        event.preventDefault()
        getImages()
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });

 