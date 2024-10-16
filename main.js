console.log($('#box'));

let STop = 0; SLeft = 0;
course = true;

$(document).ready(function(){
    setInterval(()=> anim(), 40);
})

function anim() {
    if(course) {
        $templ.scrollTop(STop);STop+=3;
        $templ.scrollLeft(SLeft);SLeft+=3;
        if(SLeft>500) {course = false}
    } else {
        $templ.scrollTop(STop);STop-=3;
        $templ.scrollLeft(SLeft);SLeft-=3;
        if(SLeft<2) {course = true}
    }
}

let $templ = $('#box');
$templ.css({
    'border':'solid 1px',
    'color':'blue',
    'width':'300px',
    'height':'300px',
    'margin': '30px',
    'padding':'20px',
    'overflow':'scroll',
    'margin':'auto',
});
$templ.width('80%');
$templ.height('auto');
console.log($templ.height());
console.log($templ.innerHeight());
console.log($templ.outerHeight());

$templ.mousedown(function(){
    alert('mousedown');
})

$(document).keypress(function(eventObject) {
    console.log(eventObject.key);
} )