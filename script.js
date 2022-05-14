const main = document.getElementById("wrap")
wrap.className ="main-wrap"

fetch("./assets/JSON.json")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
        
        let content = data;
        console.log(content)
        
        content.map(function(apiData) {
          
            // wrap.innerHTML = `${apiData.title}`

            var div = document.createElement("div")
            div.id = "book-wrap";
            div.className = "Book-wrap";
            document.getElementsByTagName("body")[0].appendChild(div);
            div.innerHTML = `${apiData.title}`;

            var img = document.createElement("img")
            img.className = "bookImg";
            img.src = `${apiData.imageLink}`;
            div.appendChild(img);


            var h3 = document.createElement("h3");
            h3.className = "h3";
            div.appendChild(h3);
            h3.innerHTML = `${apiData.author}`

            var h4 = document.createElement("h4");
            h4.className = "h4"
            h4.id = "h4"
            div.appendChild(h4)
            h4.innerHTML = ` ${apiData.price}` + " USD"

       
        })
        
    });



