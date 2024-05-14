cl = console.log;

var countryid = document.getElementById("countryid")

result = ``

countries.forEach(obj => {
    result += `
            <div class="col-3">
                <div class="countriesCard">
                    <div class="countryCard">                              
                        <div class="flag">
                            <img class="logo" src="${obj.flag}" alt="">
                        </div>

                        <h3 class="c-name">${obj.name}</h3>

                        <div class="c-Info">
                            <p><span>Capital :</span> ${obj.capital}</p>
                            <p><span>Languages :</span> ${obj.languages}</p>
                            <p><span>Population :</span> ${obj.population}</p>
                        </div>    
                    </div>                   
                </div>                    
            </div>
    `
})

cl(result)
countryid.innerHTML = result