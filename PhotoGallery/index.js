const btnEl = document.getElementById("btn");
const errorMessageEl=document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");
async function fetchImage(){
    const inputvalue = document.getElementById("input").value;
    
    if(inputvalue >10 || inputvalue <1) {
        errorMessageEl.style.display="block";
        errorMessageEl.innerText="No should be between 0 and 11";
        return

    }
    //fetch('./data/items.json').then((response)=>response.json()).then((json)=>console.log(json))
    imgs="";
    try {
        btnEl.style.display="none";
        await fetch(`https://api.unsplash.com/photos?per_page=${inputvalue}&page=${Math.round(Math.random()*1000)}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`).then((res)=>res.json().then((data)=>{
           if(data){
            //console.log(data);
            data.forEach((pic)=>{
                // console.log(pic.urls.small);
                imgs +=`
                <img src=${pic.urls.small} 
                alt="image"/>
                `;
                galleryEl.style.display="block";
                galleryEl.innerHTML=imgs;
                btnEl.style.display="block";
                
            })
           }
        }))
        errorMessageEl.style.display="none";
    
    } catch (error) {
        errorMessageEl.style.block="block";
        errorMessageEl.innerText="An error happened"
    }
   }

btnEl.addEventListener("click",fetchImage);
