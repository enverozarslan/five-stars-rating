const emojis = document.querySelectorAll(".fa-regular");
const stars = document.querySelectorAll(".fa-star");
const colors = ["pink", "orange", "lightblue", "lightgreen", "green"];

stars.forEach((star, i)=>{
    star.addEventListener('click', ()=>{        
        
        emojis.forEach(emoji=>{
            emoji.style.transform = `translateX(-${i * 50}px)`;
            emoji.style.visibility = 'visible';
            emoji.style.color = colors[i];
        })
        
        stars.forEach((item, j)=>{
            if (j<i+1) 
                item.classList.add("active");
            else 
                item.classList.remove("active");
        })
    })
})


