const common = {
    "api_key": "AIzaSyCex-4bQ2wYJnDV-258CN-Vs7twaUOin_c",
    "public_key": "public_5xMjjGHwTUyQ0kf5XE9af/oTrXE=",
    "end_point": "https://ik.imagekit.io/i80pdhj15",
    //"api_url": "http://localhost:3000/"
    "api_url": "https://api.bmf.net.in/"
}

const validation = (form_name) => {
    flagSet = 0;
    var regTxt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regNum = /^[0-9]+$/;
    $('#'+form_name+' input.required,#'+form_name+' .checkbox.required,#'+form_name+' textarea.required').each(function(){
        var classname = $(this).attr("class");

        if(classname.indexOf("checkbox") !== -1){
            if($(this).is(':checked')){       
                $(this).next("span").hide();
            }else{
                flagSet++;
                $(this).next("span").show();
            }
        }else if(classname.indexOf("email") !== -1){
            if(regTxt.test($(this).val()) == false){
                flagSet++;
                $(this).next("span").show();
            }else{
                $(this).next("span").hide();
            }
        }else if(classname.indexOf("number") !== -1){
            if(regNum.test($(this).val()) == false){
                flagSet++;
                $(this).next("span").show();
            }else{
                $(this).next("span").hide();
            }
        }else if(classname.indexOf("text") !== -1){
            if($(this).val() == '' || $(this).val() == 0 || $(this).val() == null){
                $(this).next("span").show();
                flagSet++;
            }else{
                $(this).next("span").hide();
            }
        }
    });
    if(flagSet > 0){
        return false;
    }else{                   
        return true;
    }
}
