const butt = document.querySelector('button.No-Button');
const bud = document.querySelector('.hi');

butt.addEventListener("mouseover", mouseHover);

function mouseHover()
{

    const w = bud.getBoundingClientRect();
    console.log("Hello");

    var i = Math.floor(Math.random()*w.width) ;
    var j = Math.floor(Math.random()*w.height) ;


    butt.style.left = i + 'px';
    butt.style.top = j + 'px';

}
   
    