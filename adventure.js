/* This is Jquery for the Name and Email of the 3rd Column. You can enter name or email and get a response or not Enter anything and 
    hit the Submit button and get a response. */
    
$(document).ready(function()
{
    $(document).on('click', '#btnSubmit', function(e)
    {
        e.preventDefault();
        var target = $(this),
            email = $('#email'), name = $('#name');
        if ($.trim(email.val()) === "")
        {
            alert('Try Again! Invalid Email');
            return;
        }
        if ($.trim(name.val()) === "")
        {
            alert('Try Again! Invalid Name');
            return;
        }
        alert('Thanks!');


    })
});	