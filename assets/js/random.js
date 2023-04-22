document.querySelector('#cercami').addEventListener('click', getFetch)
//4e35b7b843f549b4b8ba014950f4dbc7 apiKey
// per usarew apikey url = alla fine ?apiKey=4e35b7b843f549b4b8ba014950f4dbc7
//https://api.spoonacular.com/food/products/search?query=${choice}&number=7&apiKey=4e35b7b843f549b4b8ba014950f4dbc7
function getFetch(){
  const choice = document.querySelector('#groce').value
  //console.log(choice)
  const url = `https://api.spoonacular.com/food/products/search?query=${choice}&number=12&apiKey=4e35b7b843f549b4b8ba014950f4dbc7`
  let arr
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        arr=data.products
        arr.forEach((e,i) => {
        document.querySelector(`img-${i}`).src=e.image
        document.querySelector(`.portamivia-${i}>h2`).innerHTML=e.title
        document.querySelector(`.portamivia-${i}`).id=e.id
        //posso mettere link alla pagina tipo generichtml parentesi id
        //aggiungo event listener che setta localstorstorage variable che usero in generichtml o wathever
        document.querySelector(`.portamivia-${i}`).addEventListener('click',getDetail)

          
        });
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getDetail(event){
let ins=event.target.id
let urs=`https://api.spoonacular.com/food/products/${ins}`
localStorage.setItem=(`link`,urs)


}