const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
let holder = document.getElementsByClassName('imageHolder')[0].getElementsByTagName('img')[0];
let buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('li');
let m = 0;
holder.setAttribute('src', images[images.length-1]);
buttons[images.length-1].style.backgroundColor = "black";



setInterval(()=>{
    if(m===images.length){
        m=0;
        holder.setAttribute('src', images[m]);
        buttons[m].style.backgroundColor = "black";
        let n =m-1;
        if(n===-1){
            n=images.length-1;
            buttons[n].style.backgroundColor = "";
        }else{
            buttons[n].style.backgroundColor = "";
        }
        m++;

    }else{
        holder.setAttribute('src', images[m]);
        buttons[m].style.backgroundColor = "black";
        let n =m-1;
        if(n===-1){
            n=images.length-1;
            buttons[n].style.backgroundColor = "";
        }else{
            buttons[n].style.backgroundColor = "";
        }
        m++;
    }
}, 3000);

for(let j=0;j<buttons.length;j++){
    switch(j){
        case 0:
            buttons[j].onclick = ()=>{
                holder.setAttribute('src', images[j]);
            }
            break;
        case 1:
            buttons[j].onclick = ()=>{
                holder.setAttribute('src', images[j]);
            }
            break;
        case 2:
            buttons[j].onclick = ()=>{
                holder.setAttribute('src', images[j]);
            }
            break;
        case 3:
            buttons[j].onclick = ()=>{
                holder.setAttribute('src', images[j]);
            }
            break;
        case 4:
            buttons[j].onclick = ()=>{
                holder.setAttribute('src', images[j]);
            }
            break;
        default:
            alert('Switch Error');
            break;    
    }
}