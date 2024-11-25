//day 1
/* Document Ready function: write all the  jquery code inside this function 
    !1. $(selector).action()
*/
// $(function () //Document Ready Function
// {
//     $('.btn').click((e) => 
//     {
//         console.log(e.target);
//     });
// });
 //!2. Types of Selectors : element, class, id, types, attributes, values of attributes... more: *, this (current html element), [attributeName], tr:even, tr:odd
 // selector starts with - $('selector') 
// $(function () {
//     $('.btn').click(() =>
//     {
//         $('tr:odd').addClass("color")
//         $('tr:even').addClass('color2');
//     })
//     $('div').bind('click', () => {
//         $('div').hide();
//     })
//     $('.btn').bind("mouseenter", function ()
//         {
//             $('div').show();
//             $('*').addClass('allColor');
//         }
//     )
//     $('.btn').bind('mouseleave', () => {
//         $("*").removeClass('allColor');
//         $('#myId').hide();
//     })
//     $('[name="username"]').bind('change', (e) => 
//     {
//         var value = "Email: " + e.target.value;
//         $('#showName').html(value);
//     })
// })
//Day 2
// $(function ()
// {
//     $('.box').on(
//         {
//             click : (e) => console.log(e.target),
//             dblclick : function ()
//             {
//                 $(this).css('background-color', 'green');
//             },
//             mouseenter : () => console.log("Mouse enter.."),
//             mouseleave : () => console.log("Mouse leave..."),
//             mouseup : () => console.log("mouseup"),
//             mousedown : () => console.log("mouse down"),
//         }   
//     )
//     $('.btn').on(
//         {
//             keyup : () => console.log("Key up"),
//             keydown : () => console.log("Key down"),
//             keypress : () => console.log("key press"),
//         }
//     )
//     $(window).bind('resize', (e) => 
//     {
//         console.log(e.target.innerWidth);
//     })
// })
// Day 3 
/*
    *Methods: show(), hide(), toggle(), fadeIn(), fadeOut(), fadeToggle(), fadeTo()
    * (speed, opcity(ony for fadeTo), callback)
    * speed = "slow", "fast", miliseconds
    * opacity = 0 - 1
    * callback = is a function that is passed as an argument to another function
*/
// $(function() 
// {
//     let show = $('#show');
//     let bird = $('#bird');
//     let hide = $('#hide');
//     show.bind('click', () => 
//     {
//         bird.show('slow', alertName("Show")).fadeIn("slow");
//     })
//     hide.bind('click', () => 
//     {
//         bird.hide(3000).fadeOut();
//     })
//     $('#toggle').bind('click', () => 
//     {
//         $('#bird2').toggle("slow")
//     })
//     $('.heading').click(() =>  
//     {
//         // $(".heading-body").fadeToggle("fast");
//         $('.heading-body').fadeToggle();
//     })
//     $('.btn').bind('click', () => {
//         $('.box').fadeTo("slow", .5, () => console.log("Fade to Done")).hide("slow");
//     });
// })
// function alertName(name)
// {
//     alert("image " + name);
// }
// $(function () 
// {
//     $('.olive-image').hide();
//     $('.olive-pic').hide();
//     $('.bars').bind('click', () => {
//         $('.olive-image').fadeToggle(2000); 
//         $('.olive-pic').show();
//     })
    // $('#s-up').bind('click', () => {
    //     $('.box').slideUp();
    // })
    // $('#s-down').bind('click', () => {
    //     $('.box').slideDown();
    // })
//     $('#s-toggle').bind('click', () => {
//         $('.box').slideToggle();
//     })
// })
$(function () {
    let start = $('#sta');
    let stop = $('#sto');
    let catchBox = $('.catch');
    
    start.bind('click', () => 
    {
        catchBox.animate({
            left: "+=400px",
            fontSize: "2rem"
        }, 4000);
        catchBox.fadeIn("slow");
    })
    stop.click(() => catchBox.stop(true, true))
})