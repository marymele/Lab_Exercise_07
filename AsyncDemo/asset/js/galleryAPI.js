var imgFrame=document.querySelector('.carousel-inner')

async function fetchImage(){
    let res=await fetch('https://picsum.photos/200/300?grayscale');
    let data=await res.json()
    return data;
}



