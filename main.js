






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

if(window.matchMedia('(min-width:900px)').matches) {

    var cursor = document.querySelector('.cursor_light');
    
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 70%), calc(${e.clientY}px - 75%), 0)`
    });
}



const vaPar1 = document.getElementById('va1')
const vaPar2 = document.getElementById('va2')
const vaPar3 = document.getElementById('va3')
const vaPar4 = document.getElementById('va4')

let windowPosition;
const divisor = 5;
let resetted = false;

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;

    
    vaPar1.style.backgroundPosition = windowPosition/divisor + 'px 0';
    
    vaPar2.style.backgroundPosition = windowPosition/-divisor + 'px 0';
    
    vaPar3.style.backgroundPosition = windowPosition/divisor + 'px 0';
    
    vaPar4.style.backgroundPosition = windowPosition/-divisor + 'px 0';

    
    if(showingNav == true) {
        toggleNav()
    }
}



const h1ChangingTxt = document.getElementById('h1_changing_word')

h1ChangingTxt.innerHTML = "";

const backspaceSpeed = 70;
const typeSpeed = 100;
const pause = 600;
const longPause = 3500;

function typeWrite() {

setTimeout(() => {
    h1ChangingTxt.innerHTML = "D";
    setTimeout(() => {
        h1ChangingTxt.innerHTML = "De";
        setTimeout(() => {
            h1ChangingTxt.innerHTML = "Des";
            setTimeout(() => {
                h1ChangingTxt.innerHTML = "Desp";
                setTimeout(() => {
                    h1ChangingTxt.innerHTML = "Despe";
                    setTimeout(() => {
                        h1ChangingTxt.innerHTML = "Desper";
                        setTimeout(() => {
                            h1ChangingTxt.innerHTML = "Despert";
                                        setTimeout(() => {
                                            h1ChangingTxt.innerHTML = "Desperte";
                                            setTimeout(() => {
                                                h1ChangingTxt.innerHTML = "Desperte";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Despert";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Desper";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Despe";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Desp";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Des";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "De";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "D";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Al";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ali";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alim";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alime";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimen";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Aliment";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Aliment";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimen";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alim";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ali";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Al";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ab";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abr";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abra";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrac";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrac";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abra";
                                        setTimeout(() => {
                                            h1ChangingTxt.innerHTML = "Abr";
                                            setTimeout(() => {
                                                h1ChangingTxt.innerHTML = "Ab";
                                                setTimeout(() => {
                                                    h1ChangingTxt.innerHTML = "A";
                                                    setTimeout(() => {
                                                        h1ChangingTxt.innerHTML = "";
                                        
                                                        typeWrite()
                                                    }, backspaceSpeed);
                                                }, backspaceSpeed);
                                            }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, longPause);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, pause);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                            }, longPause);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                            }, pause);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, longPause);
                                    }, typeSpeed);
                        }, typeSpeed);
                    }, typeSpeed);
                }, typeSpeed);
            }, typeSpeed);
        }, typeSpeed);
    }, typeSpeed);
}, pause);

    
}

typeWrite()





























const submitChangingText = document.querySelector('.changing_txt p')


function changeSubmitText() {
    setTimeout(() => {
        submitChangingText.innerHTML = "começou um<br>projeto bacana,";
        setTimeout(() => {
            submitChangingText.innerHTML = "tem grande destaque<br>na cãomunidade,";
            setTimeout(() => {
                submitChangingText.innerHTML = "batalhou muito pelo<br>que tem hoje,";
                setTimeout(() => {
                    submitChangingText.innerHTML = "fez e faz diferença<br>na vida de alguém,";
                    changeSubmitText()
                }, 2500);
            }, 2500);
        }, 2500);
    }, 2500);
}



changeSubmitText()
























const form = document.querySelector("form");
const formInputs = document.querySelectorAll('form input')
const submitWarning = document.querySelector('.submit_warning')

function submitSuccess() {
    submitWarning.innerHTML = "Boa! Indicação enviada."

    for(i=0;i<formInputs.length;i++) {
        formInputs[i].value = ""
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => submitSuccess)
      .catch((error) => alert(error));
  };

form.addEventListener("submit", handleSubmit);