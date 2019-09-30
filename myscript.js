$(document).ready(function () {
    var controller = new ScrollMagic.Controller();




    var pinstep1 = new ScrollMagic.Scene({
            triggerElement: '.step1',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step1', {
            pushFollowers: false,
        })

        .addTo(controller);

    var pinstep2 = new ScrollMagic.Scene({
            triggerElement: '.step2orig',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step2orig', {
            pushFollowers: false,
        })
        .addTo(controller);

    var pinstep3 = new ScrollMagic.Scene({
            triggerElement: '.step3orig',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step3orig')
        .addTo(controller);


    var pinstep4 = new ScrollMagic.Scene({
            triggerElement: '.step4',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step4')
        .addTo(controller);

    var pinstep5 = new ScrollMagic.Scene({
            triggerElement: '.step5orig',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step5orig')
        .addTo(controller);

    var pinstep6 = new ScrollMagic.Scene({
            triggerElement: '.step6',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step6')
        .addTo(controller);

    var pinstep7 = new ScrollMagic.Scene({
            triggerElement: '.step7origin',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step7origin')
        .addTo(controller);

    var pinstep8 = new ScrollMagic.Scene({
            triggerElement: '.step8',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step8')
        .addTo(controller);

    var pinstep9 = new ScrollMagic.Scene({
            triggerElement: '.step9',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step9')
        .addTo(controller);

    var pinstep10 = new ScrollMagic.Scene({
            triggerElement: '.step10',
            triggerHook: 0.03,
            duration: '46%'
        })
        .setPin('.step10')
        .addTo(controller);



    var pinbar = new ScrollMagic.Scene({
            triggerElement: '.bar',
            triggerHook: 0.03
        })
        .setPin('.bar')
        .addTo(controller);

});