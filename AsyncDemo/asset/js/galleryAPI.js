var imgFrame=document.querySelector('.carousel-inner')
var isActive=false;

postImage();
async function fetchImage(){
    let res=await fetch('https://picsum.photos/2000/1000?grayscale');
    let data=await res.blob()
    return data;
}



function postImage(){
    let slide='';
    for(let i=0;i<50;i++){
        fetchImage().then(function(image){
            let outside = URL.createObjectURL(image)
           
            if(!isActive){
                slide+=`<div class="carousel-item active">
                <img class="d-block w-100" src="${outside}" alt="First slide" width = 100% height=600px>
                </div>`
                isActive=true
               
            }
            else{
                slide+=`<div class="carousel-item">
                <img class="d-block w-100" src="${outside}" alt="Slide" width = 100% height=600px>
                </div>`
            }
            
    
             imgFrame.innerHTML=slide;
        })
        .catch(function(err){
            console.log(err);
        })
    }
   
}