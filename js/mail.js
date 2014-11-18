$(document).ready(function() {
    
$('#teachermail-submit').click(function () {
    alert("Hello");
    var name = $('#form-name').val();
    var email = $('#form-email').val();
    var message = $('#form-feedback-questions').val();
    var varData = 'name=' + name + '&email=' + email + '&message=' + message;

    if((name != "") && (email != "") && (message != "")) {
        $.ajax({
            type: "POST",
            url: "sendmail/teach.php",
            data: varData,
            success: function() {
                $(".form-container").hide();
                $(".teacher-submit").show();
            }
        });
        return false;
    }
});

});
