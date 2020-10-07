function typewrite() { 
    var curPos =  
        document.getElementById("text1").selectionStart;
    let x = $("#text1").val(); 
    let text_to_insert = $("#insert").val(); 
    $("#text1").val( 
x.slice(0, curPos) + text_to_insert + x.slice(curPos)); 
}
