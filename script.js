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

            var leftDiv = document.createElement("div")
            leftDiv.className = "Left-wrap";
            div.appendChild(leftDiv)

           

            var img = document.createElement("img")
            img.className = "bookImg";
            img.src = `${apiData.imageLink}`;
            leftDiv.appendChild(img);

            var rightDiv = document.createElement("div")
            rightDiv.className = "rightDiv"
            div.appendChild(rightDiv)

            var bookTitle = document.createElement("h2")
            bookTitle.className = "book-title";
            rightDiv.appendChild(bookTitle)
            bookTitle.innerHTML = `${apiData.title}`;

            var h3 = document.createElement("h3");
            h3.className = "h3";
            rightDiv.appendChild(h3);
            h3.innerHTML = `${apiData.author}`

            var h4 = document.createElement("h4");
            h4.className = "h4"
            h4.id = "h4"
            rightDiv.appendChild(h4)
            h4.innerHTML = ` ${apiData.price}` + " USD"

       
        })
        
    });



