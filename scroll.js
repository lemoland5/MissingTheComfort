
const lenis = new Lenis({
    duration: 1.2,

    easing: function(x){
        let val =  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        return val;
    },

    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
        });



function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)