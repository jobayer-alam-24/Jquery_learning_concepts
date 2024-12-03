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
// $(function() {
//     $('.olive-image').hide();
//     $('.olive-pic').hide();
//     $('.bars').bind('click', () => {
//         $('.olive-image').fadeToggle(2000, () => alert("Toggling.."));
//         $('.olive-pic').show();
//     })
//     $('#s-up').bind('click', () => {
//         $('.box').slideUp("slow", () => {
//             console.log("Slide up Completed!");
//         });
//     })
//     $('#s-down').bind('click', () => {
//         $('.box').slideDown().slideUp().fadeIn(3000);
//     })
//     $('#s-toggle').bind('click', () => {
//         $('.box').slideToggle();
//     })
// })
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
q
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
$(function() {  
    let box = $(".box-model");
    let boxWidth = box.width();
    let boxHeight = box.height();
    let innerBox1 = $('#innerBox1');
    let innerBox2 = $('#innerBox2');
    let innerBox3 = $('#innerBox3');
    let innerBox4 = $('#innerBox4');
    innerBox1.width(boxWidth / 2);
    innerBox1.height(boxHeight / 2);
    innerBox2.width(innerBox1.width() / 2);
    innerBox2.height(innerBox1.height() / 2);
    innerBox3.width(innerBox2.width() / 2);
    innerBox3.height(innerBox2.height() / 2);
    innerBox4.width(innerBox3.width() / 2);
    innerBox4.height(innerBox3.height() / 2);
    
    //Selectors---
    // let mike = $('.mike');
    // let head = mike.parents('.children').prev();
    // let childrenChild = head.next().children().eq(1);
    // let mikeChildren = mike.parents('.children');
    // let mikeMember1 = mike.parents('.member');
    // let mikeMember2 = mikeMember1.next();
    // let mem3 = mikeMember2.next();
    // console.log(mikeMember1);
    // console.log(mikeMember2);
    // console.log(mem3);

    /*Challenge Accepted*/
    let children = $(".children");
    let mem1 = children.find('.member').eq(0);
    let mem2 = mem1.next();
    let mem3 = mem2.next();
    let head = children.prev().eq(0);
    let memParent = head.parent();
    let familyTree = memParent.parent();
    let nameMike = mem1.children('.name');
    let memChildren = nameMike.next();
    let children1 = memChildren.children().eq(0);
    let children2 = children1.next();
    let mem2Children1 = mem2.children().eq(0);
    let mem2Children2 = mem2Children1.next();
    let mem3Children1 = mem3.children('.name');
    let mem3Children2 = mem3Children1.next();
    let mem3ChildrenMiddle = mem3Children2.children().eq(1);
    let first1 = mem3ChildrenMiddle.prev();
    let last1 = mem3ChildrenMiddle.next();
    let mem3First = mem3.children().first();
    let mem3Last = mem3.children().last();
    console.log(mem3.children().eq(1));

    $('div').filter('.spg').css('color', 'red'); //matched Item
    $('div').not('.spg').css('color', 'green'); //Opposite
    
    // innerBox3.parent().css("border-color", "red");
    // innerBox3.parents().css("border-color", "red");
    // innerBox3.parents("#innerBox2").css("border-color", "red");
    // innerBox3.parentsUntil(box).css("border-color", "red");
    // console.log("Width: " + box.width() + "px");
    // console.log("Height: " + box.height() + "px");
    // console.log("Inner Width: " + box.innerWidth() + "px");
    // console.log("Inner Height: " + box.innerHeight() + "px");
    // console.log("Outer Width: " + box.outerWidth() + "px");
    // console.log("Outer Height: " + box.outerHeight() + "px");
    // console.log("Outer Width (true): " + box.outerWidth(true) + "px");
    // console.log("Outer Height (true): " + box.outerHeight(true) + "px");
})
$(function () 
{
    //not working..i will try in ASP.NET MVC
    // const person = {name: "Rahim", age: 15, roll: 1};

    // let txt_data = $('#txt_data');
    // let json_data = $("#json_data");
    // let html_data = $('#html_data');
    

    // txt_data.load('server/data.txt', null, (response, statusTxt, xhr) => 
    // {
    //     if(statusTxt == "success") 
    //         console.log("Data Loaded Successfully!");
    //     else
    //         console.log("Error: Data did not load!");
    // });
    // html_data.load("server/data.html #para"); //partial data

    // txt_data.load('server/data.txt', null, (content, statusTxt, xhr) =>
    // {
    //     PrintData(content, statusTxt, xhr);
    // });
    // json_data.load('server/data.json', null, (content, statusTxt, xhr) => {
    //     PrintData(content, statusTxt, xhr);
    // });
    // html_data.load('server/data.html', null, (content, statusText, xhr) => {
    //     if(statusText == "error")
    //     {
    //         console.log(`An error: ${xhr.status} ${xhr.statusText}`)
    //     }
    // });
    
    //Get method for only statuc files
    $.get('server/data.json', (data, statusT) => 
    {
        console.log(data);
    });
    $.get('server/data.txt', (response, statusText) => {
        console.log(response);
    } )
    $.get("/next.html", (data, statusText) => {
        // console.log(data);
    })
    


    function PrintData(content, statusText, xmlRequest){
        console.log(`Content: ${content}`);
        console.log(`Status Messege: ${statusText}`);
        console.log(xmlRequest);
    }
})