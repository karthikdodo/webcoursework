$(document).ready(function(){
    $('#translate').click(translate);
});
 
function translate(){
        var APIkey = "trnsl.1.1.20180619T214130Z.cbb8e0f336b4ec64.89fa3770896ae5bb33bea990320dc1e98190ac9e";
        var language = $('#language').val();
        var translateText = $("#en-text").val().replace(" ","+");
        $.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key="
		+APIkey+"&lang=en-"+language
		+"&text="+ translateText +"&callback=?", 
		function(data){
                $('#output').empty();
                $('#output').html(data.text[0]);
        });
}