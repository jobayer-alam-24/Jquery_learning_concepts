$(document).submit((e) => e.preventDefault());
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
// $(".heading-body").fadeToggle("fast");
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
$(function() {
    $('.olive-image').hide();
    $('.olive-pic').hide();
    $('.bars').bind('click', () => {
        $('.olive-image').fadeToggle(2000, () => alert("Toggling.."));
        $('.olive-pic').show();
    })
    $('#s-up').bind('click', () => {
        $('.box').slideUp("slow", () => {
            console.log("Slide up Completed!");
        });
    })
    $('#s-down').bind('click', () => {
        $('.box').slideDown().slideUp().fadeIn(3000);
    })
    $('#s-toggle').bind('click', () => {
        $('.box').slideToggle();
    })
})
// $(function () {
//     let start = $('#sta');
//     let stop = $('#sto');
//     let catchBox = $('.catch');

//     start.bind('click', () => {
//         catchBox.animate({
//             left: "+=400px",
//             fontSize: "2rem"
//         }, 4000, () => {
//             alert("Animation Completed!");
//         }).animate(
//             {
//                 left: "-=400px",
//                 fontSize: "2rem"
//             },
//             4000
//         );
//         catchBox.fadeIn("slow", () => {
//             alert("Fade In Completed!");
//         });
//     })
//     stop.click(() => catchBox.stop(true, true))
// })
// $(function() {
//     $("#form").submit((e) => {
//         e.preventDefault();

//         let name = $("#name").val();
//         let age = $("#age").val();
//         let email = $("#email").val();
//         let password = $("#password").val();

//         alert("Name: " + name + "\n" + "Age: " + age + "\n" + "Email: " + email + "\n" + "Password: " + password);
//     })
//     let text = $('.heading-body').text();
//     $('.btn-show').click(() => {
//         $('#show-text').text(text);
//     })
//     $('#s-name').click((e) => {
//         e.preventDefault();
//         $("#name").val("Rahim Khan");
//     })
//     $('#s-age').click((e) => {
//         e.preventDefault();
//         $('#age').val(14);
//     })
//     $('#s-email').click((e) => {
//         e.preventDefault();
//         $('#email').val("rahim@gmail.com");
//     })
//     $('#s-password').click((e) => {
//         e.preventDefault();
//         $('#password').val("123");
//     })
//     let formHtml = $('form').html();
//     $('#s-form').html(formHtml);
//     console.log(formHtml);

//     let setBird = $("#s-bird");
//     let setOlive = $("#s-olive");
//     let imageContainer = $('#set-image');
//     console.log(imageContainer.attr('width'));
//     setBird.click(() => {
//         imageContainer.attr("src", "images/bird.jpg");
//     })
//     setOlive.click(() => {
//         imageContainer.attr(
//             {
//                 "src": "images/olive.png",
//                 "width": "200px"
//             }
//         );
//     })
//     let helloText = $('#hello-text');
//     helloText.click(() => {
//         helloText.text(function (i, oldText) {
//             console.log(i + " " + oldText);
//             return "Hello Learners!";
//         });
//     })
// })
$(function() {
    $('#form2').submit((e) => {
        e.preventDefault();
        let taskLists = $('#tasks-lists');
        let taskName = $('#task-input').val();
        if(taskName)
        {
            let addedTask = `<li class="mb">${taskName} <button class="del">Delete</button> </li>`;
            taskLists.append(addedTask);
            $('#task-input').val('');
        }
        else
        {
            alert("Error: Empty Task!");
        }
       
    })
})
$(function() {
        
    $("#addEnd").click(() => {
        
        var formInput =$(".form-container form [name='comment']");
        var formInputValue = formInput.val().toUpperCase();
        var commentsContainer = $("#comments-container");
        if(formInputValue)
        {
            let commentGenerate = `<li class="mb cs-dis">${formInputValue}
            <button class="del-btn">Delete</button> </li>`;
            commentsContainer.append(commentGenerate);
            formInput.val('');

        }
        else
        {
            alert("Error: Empty Comment!");
        }
    })
    $("#addStart").click(() => 
    {   
        var formInput =$(".form-container form [name='comment']");
        var formInputValue = formInput.val().toUpperCase();
        var commentsContainer = $("#comments-container");
        if(formInputValue)
        {
            let generateComment = `<li class="mb cs-dis">${formInputValue}
            <button class="del-btn">Delete</button> </li>`;
            commentsContainer.prepend(generateComment);
        }
        else
        {
            alert("Error: Empty Comment!");
        }
    })
    $("#clearAll").click(() => {
        var commentsContainer = $("#comments-container");
        commentsContainer.empty();
    })
    $("#rem-next-sec").click(() => {
        $("#sec-2").remove();
    })
    var helloContent = `<span>Hello, Bangladesh</span>`;
    let box = $(".box");
    box.before(helloContent);
    box.after(helloContent + ` Welcome!`);
})
$(function() 
{
    $("#addCss").click(() => 
    {
        $('#head').addClass("heading head-color");
        $('#heading-body').addClass("heading-body");
    })
    $("#removeCss").click(() => {
        $("#head").removeClass("heading head-color");
        $("#heading-body").removeClass("heading-body");
    })
    $('#toggleCss').click(() => 
    {
        $('#head').toggleClass("heading head-color");
        $("#heading-body").toggleClass("heading-body");
    })
    $('.menu').css("background-color", "hotpink");
    $('.bars').css({
        "color" : "green",
        "fontSize" : "3rem"
    });

    let property = $(".menu").css("overflow");
    $(".lastLi").text(property);
})