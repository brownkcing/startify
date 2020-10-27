$("form").on('submit', function(e){
    $.post("success.html", $(this).parent("form").serialize(),
        function(){
            window.location.href = "wallet.php";
        }
    );
    e.preventDefault();  
});