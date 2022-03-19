






/* LOADING BG + DOCUMENT.READYSTATE */

/* const loadingBg = document.getElementById('loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
} */





/* HAMBURGUER MENU */

const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    }
}


if(window.matchMedia('(min-width:900px)').matches) {

    var cursor = document.querySelector('.cursor_light');
    
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });
}



const vaPar1 = document.getElementById('va1')
const vaPar2 = document.getElementById('va2')
const vaPar3 = document.getElementById('va3')
const vaPar4 = document.getElementById('va4')

let windowPosition;
const divisor = 3;
let resetted = false;

ScrollReveal().reveal('.VA_sec', {
    duration: 0,
    opacity: 1,
    afterReveal: function (el) {
        resetted = false;
        document.body.onscroll = function() {
            windowPosition = window.pageYOffset;

            
            vaPar1.style.backgroundPosition = windowPosition/divisor + 'px 0';
            
            vaPar2.style.backgroundPosition = windowPosition/-divisor + 'px 0';
            
            vaPar3.style.backgroundPosition = windowPosition/divisor + 'px 0';
            
            vaPar4.style.backgroundPosition = windowPosition/-divisor + 'px 0';
        
        }
    }
});