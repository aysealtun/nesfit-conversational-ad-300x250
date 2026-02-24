
var isCta, isClickedBody, isClickedFood, isClickedEat, isClickedYesNo, isClickedSneak;
const OptionList1 = document.querySelectorAll("#question1 .options li");
const OptionList2 = document.querySelectorAll("#question2 .options li");
const OptionList3 = document.querySelectorAll("#question3 .options li");
const OptionList4 = document.querySelectorAll("#question4 .options li");
const OptionList5 = document.querySelectorAll("#question2_2 .options li");
const Cta = document.querySelectorAll("#arrow");

var init = function (event) {
    setupDOMElements();
    showAd();
    mainAnimation();
};

var setupDOMElements = function () {
    gsap.set("#content", { visibility: "visible" });
    gsap.set(".f2 .options li", { scale: 0 });
    gsap.set(".f3 .question, .f3 .options li, .f4 .question, .f4 .options li, .f5 .question, .f5 .options li, .f5 .headline2, .f6 .question, .f6 .circle,.f6 .image1, .f7 .question, .f7 .options li", { scale: 0 });
};

var showAd = function () {
    document.getElementById('content').className = "show";
    document.getElementById('loader').className = "hide";
};

// Timeline animation
var mainAnimation = function () {
    anime({
        targets: '.logo',
        scale: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.f1 .headline',
        scale: [0, 1],
        // translateY: [-50, 0],
        translateX: [-50, 0],
        duration: 3000,
        rotate: '1turn'
    });
    anime({
        targets: '.f1 .circle',
        scale: [0, 1],
        // translateY: [-50, 0],
        translateX: 0,
        duration: 3000,
        rotate: '1turn'
    });
    anime({
        targets: '.f1 .image1',
        scale: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });

    var relativeEl = document.querySelector('#funnyarrow path');
    relativeEl.style.transform = 'translateX(0px)';
    // Entrance animation for the first arrow
    anime({
        targets: '#funnyarrow',
        translateX: [-30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 100
    });

    // Looping path animation for both arrows
    anime({
        targets: '#funnyarrow path, #funnyarrow2 path',
        d: [
            { value: 'M52.7,8.7c0.4-0.4,0.4-1,0-1.4l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L50.6,8l-5.7,5.7c-0.4,0.4-0.4,1,0,1.4	c0.4,0.4,1,0.4,1.4,0L52.7,8.7z' },
            { value: 'M40.7,8.7c0.4-0.4,0.4-1,0-1.4l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L38.6,8l-5.7,5.7c-0.4,0.4-0.4,1,0,1.4	c0.4,0.4,1,0.4,1.4,0L40.7,8.7z' },
            { value: 'M52.7,8.7c0.4-0.4,0.4-1,0-1.4l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L50.6,8l-5.7,5.7c-0.4,0.4-0.4,1,0,1.4	c0.4,0.4,1,0.4,1.4,0L52.7,8.7z' },
        ],
        easing: 'easeOutCirc',
        duration: 2500,
        loop: true
    });

    // Looping width animation for both arrows
    anime({
        targets: '#funnyarrow rect, #funnyarrow2 rect',
        width: [
            { value: '50.9' },
            { value: '38.5' },
            { value: '50.9' },
        ],
        easing: 'easeOutCirc',
        duration: 2500,
        loop: true
    });

    setTimeout(() => {
        Cta.forEach(element => {
            element.addEventListener('click', function (e) {
                isCta = true;
                if (element.id == "arrow" && isCta) {
                    anime({
                        targets: '.f1',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    anime({
                        targets: '.f2 .options li',
                        scale: [0, 1],
                        duration: 1000,
                        easing: 'easeInOutQuad',
                    });
                    bodyFunction();
                }
            });
        });
    }, 500);
}

function bodyFunction() {
    setTimeout(() => {
        OptionList1.forEach(element => {
            element.addEventListener('click', function (e) {
                isClickedBody = true;
                if (element.id == "body1" && isClickedBody) {
                    anime({
                        targets: ['.f2', '.f7', '.headline'],
                        scale: 0,
                    });
                    anime({
                        targets: '.f3 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f3 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    foodFunction();
                }
                else if (element.id == "body2" && isClickedBody) {
                    anime({
                        targets: ['.f2', '.f3', '.headline'],
                        scale: 0,
                    });
                    anime({
                        targets: '.f7 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });

                    anime({
                        targets: '.f7 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    sneakFunction();
                }
            });
        });
    }, 500);
}

function foodFunction() {
    console.log("foodFunction()a geçildi")
    setTimeout(() => {
        OptionList2.forEach(element => {
            element.addEventListener('click', function (e) {
                isClickedFood = true;
                if (isClickedFood) {
                    anime({
                        targets: '.f3',
                        scale: 0,
                    });
                    anime({
                        targets: '.f4 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f4 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    eatFunction();
                }
            });
        });
    }, 500);
}
function sneakFunction() {
    setTimeout(() => {
        OptionList5.forEach(element => {
            element.addEventListener('click', function (e) {
                isClickedSneak = true;
                if (isClickedSneak) {
                    anime({
                        targets: '.f7',
                        scale: 0,
                    });
                    anime({
                        targets: '.f4 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f4 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    eatFunction();
                }
            });
        });
    }, 500);
}
function eatFunction() {
    setTimeout(() => {
        OptionList3.forEach(element => {
            element.addEventListener('click', function (e) {
                isClickedEat = true;
                if (isClickedEat) {
                    anime({
                        targets: '.f4',
                        scale: 0,
                    });
                    anime({
                        targets: '.f5 .headline2',
                        scale: [0, 1],
                        // translateY: [-50, 0],
                        translateX: [-50, 0],
                        duration: 3000,
                        rotate: '1turn'
                    });
                    anime({
                        targets: '.f5 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f5 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    yesNoFunction();
                }
            });
        });
    }, 500);
}

function yesNoFunction() {
    setTimeout(() => {
        OptionList4.forEach(element => {
            element.addEventListener('click', function (e) {
                isClickedYesNo = true;
                if (isClickedYesNo) {
                    anime({
                        targets: '.f5',
                        scale: 0,
                    });
                    anime({
                        targets: '.f6 .circle',
                        scale: [0, 1],
                        // translateY: [-50, 0],
                        duration: 3000,
                        rotate: '1turn'
                    });
                    anime({
                        targets: '.f6 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f6 .image1',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    // anime({
                    //     targets: '.f6 .cta',
                    //     scale: [0, 1],
                    //     translateY: [-10, 0],
                    //     duration: 2000
                    // });

                    // Entrance animation for the final arrow
                    anime({
                        targets: '#funnyarrow2',
                        translateX: [-20, 0],
                        opacity: [0, 1],
                        duration: 200,
                        easing: 'easeOutQuad',
                        delay: 100
                    });
                    // SVG Arrow animation handled globally below
                    anime({
                        targets: '.clickTag',
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        complete: function () {
                            // Animasyon tamamlandığında display özelliğini block yap
                            document.querySelector('.clickTag').style.display = 'block';
                        }
                    });
                }
            });
        });
    }, 500);
}

// #region Triggers
const trackingConfig = [
    { id: 'bg', nestle: 1 },
    { id: 'logo', nestle: 2 },
    { id: 'circle', nestle: 3 },
    { id: 'image1', nestle: 4 },
    { id: 'image2', nestle: 5 },
    { id: 'arrow', nestle: 6 },
    { id: 'funnyarrow2', nestle: 7 },
    { id: 'body1', nestle: 8 },
    { id: 'body2', nestle: 9 },
    { id: 'food1', nestle: 10 },
    { id: 'food2', nestle: 11 },
    { id: 'food3', nestle: 12 },
    { id: 'food4', nestle: 13 },
    { id: 'eat1', nestle: 14 },
    { id: 'eat2', nestle: 15 },
    { id: 'yes', nestle: 16 },
    { id: 'no', nestle: 17 },
    { id: 'sneak1', nestle: 18 },
    { id: 'sneak2', nestle: 19 },
    { id: 'sneak3', nestle: 20 },
    { id: 'sneak4', nestle: 21 },
    { id: 'circle2', nestle: 3 }
];

const trackClick = (id, nestle) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', () => {
            const floodlight = document.createElement("span");
            floodlight.id = `floodlight_${id}`;
            floodlight.innerHTML = `<img src='https://track.adform.net/Serving/TrackPoint/?nestle=${nestle}' width='1' height='1' alt='' />`;
            el.appendChild(floodlight);
        });
    }
};

trackingConfig.forEach(config => trackClick(config.id, config.nestle));

// CLICKTAG
const clickTAG_cta_img = dhtml.getVar('clickTag1', 'https://www.nestle.com.tr');
window.clickTag1 = clickTAG_cta_img;

document.getElementById('clickTag1').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(window.clickTag1, dhtml.getVar('landingPageTarget', '_blank'));
});


// #endregion 

window.addEventListener('load', init);