var imgFrame=document.querySelector('.carousel-inner')
var isActive=false;

postImage();
async function fetchImage(){
    let res=await fetch('https://picsum.photos/200/300?grayscale');
    let data=await res.json()
    return data;
}



function postImage(){
    fetchImage().then(function(images){
        let img='';
        let slide='';
        images.forEach(function(image){
            img=image.download_url;

            if(!isActive){
                slide+=`<div class="carousel-item active">
                <img class="d-block" src="${img}" alt="First slide" width = 60% height=600px>
                </div>`
                isActive=true
                continue
            }
            
            slide+=`<div class="carousel-item">
            <img class="d-block" src="${img}" alt="Slide" width = 60% height=600px>
            </div>`



        });  imgFrame.innerHTML=slide;
    })
    .catch(function(err){
        console.log(err);
    })
}