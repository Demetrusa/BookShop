

fetch("./assets/JSON.json")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json()
    })
    .then((data) => {
        
        let content = data;
        
        content.map(function(apiData) {

            var wrap =document.createElement("main")
            
   
            var mainDiv = document.createElement("div")
            mainDiv.classList= "main-div"
            wrap.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].appendChild(mainDiv);

                // var pageHeading = document.createElement("h1")
                // pageHeading.className = "page-heading";
                // pageHeading.textContent = "BookShop";
                // body.appendChild(pageHeading);

            // main div
            var div = document.createElement("div")
            div.id = "book-wrap";
            div.className = "Book-wrap";
            mainDiv.appendChild(div)
            // inner div
            var leftDiv = document.createElement("div")
            leftDiv.className = "Left-wrap";
            div.appendChild(leftDiv)
            
            // left-side of book
            var img = document.createElement("img")
            img.className = "bookImg";
            img.src = `${apiData.imageLink}`;
            leftDiv.appendChild(img);
            // right side of book
            var rightDiv = document.createElement("div")
            rightDiv.className = "rightWrap"
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
            h4.innerHTML = ` ${apiData.price}` + " $"
            
            // button section

            var buttonDiv = document.createElement("div");
            buttonDiv.style = "button-div";
            rightDiv.appendChild(buttonDiv);
            

            var showMoreBtn = document.createElement("button");
            showMoreBtn.className = "showMoreBtn";
            showMoreBtn.textContent = "Show more ";
            buttonDiv.appendChild(showMoreBtn);
            
            var addCartBtn = document.createElement("button");
            addCartBtn.className = "add-cart-btn";
            addCartBtn.textContent = "add To Cart";
            buttonDiv.appendChild(addCartBtn);

               // Modal section 
    
            var modal = document.createElement("div");
            modal.className = "modal";
            modal.id = "myModal";

            document.getElementsByTagName("body")[0].appendChild(modal);

            var modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            modal.appendChild(modalContent);

            var modalImg =document.createElement("img");
            modalImg.className ="modal-img";
            modalImg.src=`${apiData.imageLink}`;
            modalContent.appendChild(modalImg);
            
            var modalRightWrap = document.createElement("div")
            modalRightWrap.className = "modal-right-wrap";
            modalContent.appendChild(modalRightWrap);

            var modalAuthor = document.createElement("h2");
            modalAuthor.className = "modal-title";
            modalAuthor.innerHTML = `${apiData.author}`
            modalRightWrap.appendChild(modalAuthor);

            var modalText = document.createElement("p");
            modalText.className="modal-text";
            modalText.innerHTML = `${apiData.description}`
            modalRightWrap.appendChild(modalText);

            var close = document.createElement("span");
            close.className = "close";
            close.textContent= "X"
            modalContent.appendChild(close);

            // button click
       
                    
            showMoreBtn.onclick = function(){
                modal.style.display = "block";
            }
            close.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick =function(event){
                if(event.target == modal){
                    modal.style.display="none";
                }
            }
          
        })
        
    });

