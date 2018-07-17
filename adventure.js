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