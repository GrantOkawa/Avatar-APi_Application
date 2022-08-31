document.querySelector('button').addEventListener('click', avaterCharacter)

function avaterCharacter(){
    let character = document.querySelector('input').value


    fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${character}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[1])
        document.querySelector('h2').innerText = data[1].name
        document.querySelector('.affiliation').innerText = data[1].affiliation
        document.querySelector('.allies').innerText = data[1].allies
        document.querySelector('.enemies').innerText = data[1].enemies
        document.querySelector('img').src = data[1].photoUrl
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

    

   
   
   

   
