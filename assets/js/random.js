window.onload=getFetch

function getFetch(){
 
  const url = `https://api.spoonacular.com/recipes/random?number=1&limitLicense=true&tags=vegetarian&apiKey=4e35b7b843f549b4b8ba014950f4dbc7`
  
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data.recipes[0])
       document.querySelector('#atene').src=data.recipes[0].image
       document.querySelector('#titolo').innerHTML=data.recipes[0].title
       document.querySelector('#somario').innerHTML=data.recipes[0].summary
       document.querySelector('#istruzioni').innerHTML=data.recipes[0].instructions
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

