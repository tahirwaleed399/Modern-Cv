console.log(' i stopped at 19:36 video 1');

let date = new Date();

let fyear = date.getFullYear();


let set = document.querySelector("footer p");
set.innerText = `ChWaleed Cv copyright &copy; ${fyear}`;


let print = document.querySelector("#print");

print.addEventListener("click", () => {
    window.print();
})

$('.profile').ripples({
    resolution: 700,
    dropRadius: 30,
    perturbance: 0.4,
});

let d = new Date()
let year = d.getFullYear();
let span = document.querySelector("#year");
span.innerHTML = year;



let bars_con = document.querySelector(".skills-right");
let bars = document.querySelectorAll(".progress-bar");
// bars.forEach((e, i) => {
//     let data = e.dataset.percent;
//     let tool = e.children[0];
//     toolt.innerHTML = data + "%"
//     e.syle.width = `${data}%`


// });

// let counters = document.querySelectorAll(".count-content h3 span");
// let speeds = [1, 30, 20];
// let increament = [20, 1, 1];


// function run() {
//     counters.forEach((count, i) => {
//         let data = count.dataset.count;
//         increase(data, count, speeds[i], increament[i]);
//     })
// }

// function increase(data, count, speed, increamentNo) {
//     let k = 0;
//     let interval = setInterval(() => {
//         k += increamentNo;
//         if (k > data) {
//             clearInterval(interval);
//         } else {
//             count.innerHTML = k;
//         }

//     }, speed);

// }
// run();
// An efficient method
let counters = document.querySelectorAll(".count-content h3 span");

function RunCount() {
    counters.forEach((counter, i) => {

        counter.innerText = 0;
        let target = +counter.dataset.count;
        let step = target / 2000;
        let counted = function() {

            let displayedCount = +counter.innerText;
            if (displayedCount < target) {



                counter.innerText = Math.ceil(displayedCount + step);

                setInterval(counted, 100);
            } else {

                counter.innerText = target;
            }

        }

        counted();



    })
}

// RunCount();

let counter_section = document.querySelector(".counter");
let options = {
    rootMargin: "0px 0px -200px 0px"
        // rootMargin: "0px 0px -100px 0px"
}

let done = 0;
const sectionObserver = new IntersectionObserver(function(entries, observes) {

    if (entries[0].isIntersecting && done == 0) {
        RunCount();
        done = 1;

    }


}, options);
const barsObserver = new IntersectionObserver(function(enter, observes) {

    if (enter[0].isIntersecting) {

        bars.forEach((e, i) => {

            let data = e.dataset.percent;
            let tool = e.children[0];
            tool.innerHTML = data + "%"

            e.style.transition = `all 1s ease-out;`

            e.style.width = `${data}%`



        });
    }


}, options);

sectionObserver.observe(counter_section);
barsObserver.observe(bars_con);



let $wrapper = $(".portfolio-wrapper");

$wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
        duration: 750,
        easing: "linear"
    }


});
let links = document.querySelectorAll(".tabs a");
console.log(links);

links.forEach((e, i) => {
    e.addEventListener("click", (event) => {
        event.preventDefault();
        let selector = e.dataset.filter;
        let $wrapper = $(".portfolio-wrapper");

        $wrapper.isotope({
            filter: selector,
            layoutMode: "masonry",
            animationOptions: {
                duration: 750,
                easing: "linear"
            }


        });
        links.forEach(k => {
            k.classList.remove("active");
        });
        event.target.classList.add("active");
    })

})

$('.magnify-img').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enable: true
    }
    // other options
});
$('.slider-container').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: false
});