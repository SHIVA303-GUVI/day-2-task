var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload = function (){
    var countrydata = JSON.parse(this.response)
    console.log(countrydata)
 let total = countrydata.reduce((acc,ele)=>acc+ele.population, 0)
console.log(total)
}