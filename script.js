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
$(function ()
{
    $('.box').on(
        {
            click : (e) => console.log(e.target),
            dblclick : function ()
            {
                $(this).css('background-color', 'green');
            },
            mouseenter : () => console.log("Mouse enter.."),
            mouseleave : () => console.log("Mouse leave..."),
            mouseup : () => console.log("mouseup"),
            mousedown : () => console.log("mouse down"),
        }   
    )
    $('.btn').on(
        {
            keyup : () => console.log("Key up"),
            keydown : () => console.log("Key down"),
            keypress : () => console.log("key press"),
        }
    )
    $(window).bind('resize', (e) => 
    {
        console.log(e.target.innerWidth);
    })
})
