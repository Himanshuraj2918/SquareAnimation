var t1 = gsap.timeline();

t1.from("#nav img, #nav h3, #nav button",{
    y:-100,
    delay:0.5,
    stagger:0.2,
    duration:1,
    
})
t1.from("#main>img",{
    scale:0,
    opacity:0
})
t1.from("#img4,#cycle,#gate_eye,#volin_play,#krishna_girl,#woman-last,#about_sec2>img",{
    scale:0,
    opacity:0
})

t1.from("#sec-1 h1",{
    y:200,
    opacity:0,
    delay:0.5,
    stagger:0.2,
    duration:1,

})


t1.from("h5",{
    scale:0,
    opacity:0
   
})

t1.to("h5",{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true

})


gsap.from("h5",{
    scale:0,
    opacity:-1,
    duration:1,
    scrollTrigger:{
        trigger:"h5",
        scroller:"body",
        scrub:1,
        start:"top 75%",
        end:"top 80%"

    }
})

gsap.from("#part-1>h1",{
    y:200,
    delay:3,
    opacity:-1,
    duration:1,
    scrollTrigger:{
        trigger:"#part-1>h1",
        scroller:"body",
        scrub:2,
        
        start:"top 100%",
        end:"top 60%"

    }
   
})


