
import marquee from './vanilla-marquee'
import "../sass/main.scss";
import './ticker'
console.log('hello')

//https://codepen.io/unetic/pen/QrbbWR
// /https://css-tricks.com/reverse-text-color-mix-blend-mode/
//https://www.cssscript.com/demo/smooth-marquee-like-scroller-pure-javascript-marquee3000/
$(window).on('scroll', function () {
    const $windows = $(window)
    const $body = $('body')
    const $section = $('.section')

    let scroll = $windows.scrollTop() + ($windows.height() / 3)
    $section.each(function () {
        let $this = $(this)
        console.log($this)
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            console.log('body', $body)
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)background-\S+/g) || []).join('')
            })
            $body.addClass('background-' + $(this).data('color'))
        }
    })


})

$('.js-conveyor-1').jConveyorTicker();

// const myScroller = new marquee(document.querySelector(".menu-carousel"), {
//     // CSS easing
//     css3easing: 'linear',
//     // time to wait before starting the animation
//     delayBeforeStart: 0,
//     // dulicate the content to create a continuous flow
//     duplicated: false,
//     // duration of animation
//     duration: 5000,
//     // space between tickers
//     gap: 20,
//     // pause on hover
//     pauseOnHover: true,
//     // re-calculate on window resize
//     recalcResize: false,
//     // animation speed
//     speed: 0,
//     // if is visibile from thestart
//     startVisible: true,
// })

document.querySelectorAll('.tickerItem').forEach(item=>{
    item.addEventListener('mouseover',function(){
        
         const imageSource = $(item).data('image')
         const image = $('#menuImage')
            image.attr('src',`assets/images/${imageSource}`)
            image.fadeIn('fast');
        
        // console.log(imageSource)
      
       
    })
})




$('#openToggler').on('click', function () {
    $('.nav-collapse').addClass('toggled')
})
$('#closeToggler').on('click', function () {
    if($('.nav-collapse').hasClass('toggled')){
        $('.nav-collapse').removeClass('toggled')
    }
})


const aboutSection = document.getElementById('about')
const about2Section = document.getElementById('about2')
const about2LeftSection = document.getElementById('about2Left')
const about2BottomSection = document.getElementById('about2Bottom')
const menuSection = document.getElementById('menu')
const orderSection = document.getElementById('order')



if (aboutSection) {
    const aboutSectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            aboutSectionAnimation()
            aboutSectionObserver.unobserve(entries[0].target)
        }
    })
    aboutSectionObserver.observe(aboutSection)
    function aboutSectionAnimation() {
        anime
            .timeline({
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
                duration: 1000,
            })
            .add({
                targets: ['#about .about-description'],
                translateY: [25, 0],
                opacity: [0, 1],
            })
            
    }
    anime.timeline({
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
                duration: 2000,
    }).add({
        targets:'.about-image',
        translateY:[100,0],
        opacity:[0,1],
        delay:0
    })
    .add({
        targets:'.about-textbox',
        opacity:[0,1],
        delay:0
    })
    
    anime.timeline({
        easing: 'linear',
        duration: 2000,
    }).add({
        targets:'.logo',
        opacity:[0,1],
        delay:0
    })
    
    
}



if (about2Section) {
 
    const about2SectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0 ) {    
          
            about2SectionAnimation()
            about2SectionObserver.unobserve(entries[0].target)
        }
    },{threshold:.3})
    about2SectionObserver.observe(about2Section)
    function about2SectionAnimation() {
        anime
            .timeline({
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
                duration: 2000,
            }).add({
                targets:['#about2'],
                opacity:1
            },"-=2000")
            .add({
                targets: ['#about2 .about2-description' ],
                translateY: [25, 0],
                opacity: [0, 1]
            }).add({
                targets: '.about2-img',
                translateY: ['100%', 0],
                opacity: [0, 1],
            },"-=3000")
            .add({
                targets: '.about2-text',
                opacity: [0, 1],
            },"-=2000")

            
    }
    
    
    
}

if(about2LeftSection){
    const about2LeftSectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0 ) {    
            about2LeftSectionAnimation()
            about2LeftSectionObserver.unobserve(entries[0].target)
        }
    },{threshold:1})
    about2LeftSectionObserver.observe(about2LeftSection)
    function about2LeftSectionAnimation() {
        anime
            .timeline({
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
            })
            .add({
                targets:['#about2Left'],
                opacity:1,
            },"-=1000").add({
                targets:['.leftImage'],
                opacity:1,
                duration:3000,
                translateX:['-200%',0]
            },"-=100").add({
                targets:['#about2Left .textbox'],
                opacity:[0,1],
            })

            
    }
}


if(about2BottomSection){
    const about2BottomSectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0 ) {   
            about2BottomSectionAnimation()
            about2BottomSectionObserver.unobserve(entries[0].target)
        }
    },{threshold:.6})
    about2BottomSectionObserver.observe(about2BottomSection)
    function about2BottomSectionAnimation() {
        anime
            .timeline({
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
            })
            .add({
                targets:['#about2Bottom'],
                opacity:1,
            },"-=2000").add({
                targets:['#about2Bottom .composition-img'],
                opacity:1,
                duration:3000,
                translateY:['200%',0]
            },"-=100").add({
                targets:['#about2Bottom .textbox'],
                opacity:[0,1],
            })

            
    }
}

if (orderSection) {
    const orderSectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            orderSectionAnimation()
            orderSectionObserver.unobserve(entries[0].target)
        }
    })
    orderSectionObserver.observe(orderSection)
    function orderSectionAnimation() {
        anime
            .timeline({
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
                duration: 2000,
            })
            .add({
                targets:['#order'],
                opacity:1,
            },"-=2000")
            .add({
                targets: ['#order .description' ,'#order .description1'],
                translateY: [25, 0],
                opacity: [0, 1],
                delay: (el, i) => 500 * i,
            }).add({
                targets:'#order .composition-img',
                translateY:[400,0],
                opacity:[0,1],
                delay:0
            },"-=2500")
            .add({
                targets:'#order .textbox',
                opacity:[0,1],
                delay:0
            })
            
    }
    
    
 
    
    
}

function handleNavigation(){
    alert()
    return true
}
export {handleNavigation}