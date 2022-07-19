let mlm = new XMLHttpRequest();
mlm.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
mlm.send();
mlm.onload=function(){
    var data =JSON.parse(mlm.response);
    //Get all the countries from Asia continent /region using Filter function
    let res=data.filter((element)=>element.region==="Asia");
    for(let i=0; i<res.length; i++){
        console.log(res[i].name);
    }
    //Get all the countries with a population of less than 2 lakhs using Filter function
    let popu=data.filter((element)=>{
        return element.population<200000;
    });
    console.log(popu);

    //Print the following details name, capital, flag using forEach function
    Object.keys(data).forEach((ele)=>{
    console.log(`${data[ele].name} ${data[ele].capital} ${data[ele].flag}`);
    });
    
    //Print the total population of countries using reduce function
    let population=data.reduce((acc,element)=>{
        return acc+element.population;},0)
    console.log(population);

    //Print the country which uses US Dollars as currency.
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log(`name: ${data[i].name} - ${data[i].currencies[0].code}`)
            }
        }
}
