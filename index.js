$(document).ready(function(){

    fetchdata();
    function fetchdata(){
        var fetchdata = $.param({'action':"fetchload"});

        $.ajax({
            type:"POST",
            url:"test.php",
            data:fetchdata,
            success:function(response){
             
                // console.log(response.red_input);
                if(response.length>0)
                {
                var JSONData = JSON.parse(response);
               
                $('#green_input').val(JSONData.green_input);
                $('#red_input').val(JSONData.red_input);
                $('#orange_input').val(JSONData.orange_input);
                $('#yellow_input').val(JSONData.yellow_input);
                }
            }

        });
    }
    //stop part
    $('#stopinput').click(function(){
        //incase to blanck the sequence code also
            // $('#red_input').val('');
            // $('#orange_input').val('');
            // $('#yellow_input').val('');
            // $('#green_input').val('');
            $('#yellow_circle').css("background-color","#FFFF00");
            $('#green_circle').css("background-color","green");
            $('#orange_circle').css("background-color","#FFA500");
            $('#red_circle').css("background-color","red");
    });
   //save part
   $('#saveinput').click(function(){
        var red_input = $('#red_input').val();
        var orange_input = $('#orange_input').val();
        var yellow_input = $('#yellow_input').val();
        var green_input = $('#green_input').val();

        var greenIntervalInput = $('#green_Interval').val();
        var yellowIntervalInput = $('#yellow_Interval').val();
        if(greenIntervalInput != '')
        var greenInput = greenIntervalInput*1000; //Interval input in miliseconds
        else
        var greenInput = '';

        if(yellowIntervalInput != '')
        var yellowInput = yellowIntervalInput*1000; //Interval input in miliseconds
        else
        var yellowInput = '';

        if(isNaN(red_input)==true)
        {
            alert("kindly Enter a Numeric value red color");
            $('#red_input').focus();
            return false;
        }else if(red_input > 4)
        {
            alert("kindly Enter the sequence of red color between 1 to 4 value");
            $('#red_input').focus();
            return false;
        }
        if(isNaN(orange_input)==true)
        {
            alert("kindly Enter a Numeric value for orange color");
            $('#orange_input').focus();
            return false;
        }else if(orange_input > 4)
        {
            alert("kindly Enter the sequence of orange color between 1 to 4 value");
            $('#orange_input').focus();
            return false;
        }
        if(isNaN(yellow_input)==true)
        {
            alert("kindly Enter a Numeric value for yellow color");
            $('#yellow_input').focus();
            return false;
        }else if(yellow_input > 4)
        {
            alert("kindly Enter the sequence of yellow color between 1 to 4 value");
            $('#yellow_input').focus();
            return false;
        }
        if(isNaN(green_input)==true)
        {
            alert("kindly Enter a Numeric value for green color");
            $('#green_input').focus();
            return false;
        }else if(green_input > 4)
        {
            alert("kindly Enter the sequence of green color between 1 to 4 value");
            $('#green_input').focus();
            return false;
        }



        if(isNaN(greenIntervalInput)==true)
        {
            alert("Kindly give a numeric value for green light interval");
            $('#green_Interval').focus();
            return false;
        }
        if(isNaN(yellowIntervalInput)==true)
        {
            alert("Kindly give a numeric value for yellow light interval");
            $('#yellow_Interval').focus();
            return false;
        }


        $('#yellow_circle').css("background-color","red");
        if(greenInput != '')
        {
            $('#green_circle').css("background-color","green");
            $('#yellow_circle').css("background-color","red");
            $('#orange_circle').css("background-color","red");
            $('#red_circle').css("background-color","red");
            setTimeout(() => {$('#yellow_circle').css("background-color","#FFFF00");$('#orange_circle').css("background-color","#FFA500");
                
            }, greenInput);
            $('#green_Interval').val('');

        }
        if(yellowInput != '')
        {   $('#yellow_circle').css("background-color","#FFFF00");
            $('#green_circle').css("background-color","red");
            $('#orange_circle').css("background-color","red");
            $('#red_circle').css("background-color","red");
            setTimeout(() => {$('#green_circle').css("background-color","green");$('#orange_circle').css("background-color","#FFA500");
                
            }, yellowInput);
            $('#yellow_Interval').val('');

        }
        if(yellowInput != '' && greenInput != '')
        { 
              alert("Give time for only one interval at once");
              $('#yellow_Interval').val('');
              $('#green_Interval').val('');
              return false();

        }




        var data=$.param({'red_input':red_input,'orange_input':orange_input,'yellow_input':yellow_input,'green_input':green_input,'action':'datatosave'});
        $.ajax({
            type:"POST",
            url:"test.php",
            data:data,
            success:function(response){
                console.log(response);
            }
        
        });
         return false;

   });

});