// custom dialog box built from scratch, controlled with JavaScript/jQuery

//  runs the custom alert/dialog box/popover   
    function CustomAlert(){
    
    //dialog passes in from Alert.render and opens dialog box
    this.render = function(dialog){
        
        //gets window size
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        //gets box holder div from page
        var boxholder = document.getElementById('boxholder');
        
        //creates dialog box in box holder, adds css
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
        $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        //gets box overlay holder from page
        var boxoverlay = document.getElementById('boxoverlay');
        
        //creates dialog overlay and adds css
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        //formats overlay
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        //formats dialog box on screen
        boxholder.style.left = (winW/2) - (550 * .5) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        //creates dialog box content, calls custom content from Alert.render()
        $('#dialogboxhead').text("Help?");
        $('#dialogboxbody').append(dialog);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    }//end render function
    
    //this closes the dialog
    this.ok = function(){
        
        //removes css classes, does not fully remove css though
        $('#boxholder').removeClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        $('#boxoverlay').removeClass('dialogoverlay');
        
        //removes css that formatted box and overlay on screen 
        $('#boxholder').css('top','').css('left','').css('display','none');
        $('#boxoverlay').css('display','none').css('height','');
        
        //empties boxholder and boxoverlay divs
        $('#boxholder').empty();
        $('#boxoverlay').empty();
        
    }//end okay function
    
}//end custom dialog function

//initiates dialog, used in Help menus for this application
var Alert = new CustomAlert();

//moves information in center table to left table
function moveCentertoLeft(){
    
  this.transfer = function(){
      
        $('#lb1').html($('#tbx1').val());
      
  };//end transfer
    
    this.transfer2 = function(){
        
        $('#lb2').html($('#tbx2').val());
        
    };//end transfer2
    
    this.transfer3 = function(){
     
        $('#lb3').html($('#tbx3').val());
        
    };//end transfer3
    
    this.transfer4 = function(){
     
        $('#lb4').html($('#tbx4').val());
        
    };//end transfer4
    
    this.transfer5 = function(){
     
        $('#lb5').html($('#tbx5').val());
        
    };//end transfer5
    
    this.transfer6 = function(){
     
        $('#lb6').html($('#tbx6').val());
        
    };//end transfer6
    
    this.transfer7 = function(){
     
        $('#lb7').html($('#tbx7').val());
        
    };//end transfer7
    
    this.transfer8 = function(){
     
        $('#lb8').html($('#tbx8').val());
        
    };//end transfer8
    
    this.transfer9 = function(){
     
        $('#lb9').html($('#tbx9').val());
        
    };//end transfer9
    
    this.transfer10 = function(){
     
        $('#lb10').html($('#tbx10').val());
        
    };//end transfer10
    
    this.transfer11= function(){
     
        $('#lb11').html($('#tbx11').val());
        
    };//end transfer11
    
    this.transfer12= function(){
     
        $('#lb12').html($('#tbx12').val());
        
    };//end transfer12
    
};//end move from center to the left

//initiates moving center input to left table
var moveCtoL = new moveCentertoLeft();

//moves center input to right table
function moveCentertoRight(){
    
  this.rtransfer = function(){
      
        $('#rlb1').html($('#tbx1').val());
    
  };//end transfer
    
    this.rtransfer2 = function(){
        
        $('#rlb2').html($('#tbx2').val());
        
    };//end transfer2
    
    this.rtransfer3 = function(){
     
        $('#rlb3').html($('#tbx3').val());
        
    };//end transfer3
    
    this.rtransfer4 = function(){
     
        $('#rlb4').html($('#tbx4').val());
        
    };//end transfer4
    
    this.rtransfer5 = function(){
     
        $('#rlb5').html($('#tbx5').val());
        
    };//end transfer5
    
    this.rtransfer6 = function(){
     
        $('#rlb6').html($('#tbx6').val());
        
    };//end transfer6
    
    this.rtransfer7 = function(){
     
        $('#rlb7').html($('#tbx7').val());
        
    };//end transfer7
    
    this.rtransfer8 = function(){
     
        $('#rlb8').html($('#tbx8').val());
        
    };//end transfer8
    
    this.rtransfer9 = function(){
     
        $('#rlb9').html($('#tbx9').val());
        
    };//end transfer9
    
    this.rtransfer10 = function(){
     
        $('#rlb10').html($('#tbx10').val());
        
    };//end transfer10
    
    this.rtransfer11= function(){
     
        $('#rlb11').html($('#tbx11').val());
        
    };//end transfer11
    
    this.rtransfer12= function(){
     
        $('#rlb12').html($('#tbx12').val());
        
    };//end transfer12
    
};//end move from center to the right

//initiates moving center input to right table
var moveCtoR = new moveCentertoRight();

//removes user placed text in side labels
function emptyLabel(){
    
    this.noText = function(){
  
    $('#lb1').html("");
    
    };//end noText
    
    this.noText2 = function(){
  
    $('#lb2').html("");
    
    };//end noText2
    
    this.noText3 = function(){
  
    $('#lb3').html("");
    
    };//end noText3
    
    this.noText4 = function(){
  
    $('#lb4').html("");
    
    };//end noText4
    
    this.noText5 = function(){
  
    $('#lb5').html("");
    
    };//end noText5
    
    this.noText6 = function(){
  
    $('#lb6').html("");
    
    };//end noText6
    
    this.noText7 = function(){
  
    $('#lb7').html("");
    
    };//end noText7
    
    this.noText8 = function(){
  
    $('#lb8').html("");
    
    };//end noText8
    
    this.noText9 = function(){
  
    $('#lb9').html("");
    
    };//end noText9
    
    this.noText10 = function(){
  
    $('#lb10').html("");
    
    };//end noText10
    
    this.noText11 = function(){
  
    $('#lb11').html("");
    
    };//end noText11
    
    this.noText12 = function(){
  
    $('#lb12').html("");
    
    };//end noText12
    
    this.noTextr = function(){
  
    $('#rlb1').html("");
    
    };//end noTextr
    
    this.noTextr2 = function(){
  
    $('#rlb2').html("");
    
    };//end noTextr2
    
    this.noTextr3 = function(){
  
    $('#rlb3').html("");
    
    };//end noTextr3
    
    this.noTextr4 = function(){
  
    $('#rlb4').html("");
    
    };//end noText4
    
    this.noTextr5 = function(){
  
    $('#rlb5').html("");
    
    };//end noText5
    
    this.noTextr6 = function(){
  
    $('#rlb6').html("");
    
    };//end noText6
    
    this.noTextr7 = function(){
  
    $('#rlb7').html("");
    
    };//end noText7
    
    this.noTextr8 = function(){
  
    $('#rlb8').html("");
    
    };//end noText8
    
    this.noTextr9 = function(){
  
    $('#rlb9').html("");
    
    };//end noText9
    
    this.noTextr10 = function(){
  
    $('#rlb10').html("");
    
    };//end noText10
    
    this.noTextr11 = function(){
  
    $('#rlb11').html("");
    
    };//end noText11
    
    this.noTextr12 = function(){
  
    $('#rlb12').html("");
    
    };//end noText12
    
    this.noTextm = function(){
  
    $('#tbx1').val("");
    
    };//end noTextm
    
    this.noTextm2 = function(){
  
    $('#tbx2').val("");
    
    };//end noText2m
    
    this.noTextm3 = function(){
  
    $('#tbx3').val("");
    
    };//end noText3m
    
    this.noTextm4 = function(){
  
    $('#tbx4').val("");
    
    };//end noText4
    
    this.noTextm5 = function(){
  
    $('#tbx5').val("");
    
    };//end noText5m
    
    this.noTextm6 = function(){
  
    $('#tbx6').val("");
    
    };//end noText6m
    
    this.noTextm7 = function(){
  
    $('#tbx7').val("");
    
    };//end noText7m
    
    this.noTextm8 = function(){
  
    $('#tbx8').val("");
    
    };//end noText8m
    
    this.noTextm9 = function(){
  
    $('#tbx9').val("");
    
    };//end noText9m
    
    this.noTextm10 = function(){
  
    $('#tbx10').val("");
    
    };//end noTextm10
    
    this.noTextm11 = function(){
  
    $('#tbx11').val("");
    
    };//end noTextm11
    
    this.noTextm12 = function(){
  
    $('#tbx12').val("");
    
    };//end noTextm12
    
};//end empty label

//initiates clearing the label when "X" button clicked
var clearX = new emptyLabel();

//moves object from right to left table on click
function moveRighttoLeft(){
    
    this.moveL = function(){
        
      $('#lb1').html($('#rlb1').html());
        
    };//end move left
    
    this.moveL2 = function(){
      
        $('#lb2').html($('#rlb2').html());
        
    };//end move left 2
    
    this.moveL3 = function(){
        
        $('#lb3').html($('#rlb3').html());
        
    };//end move left 3
    
    this.moveL4 = function(){
        
        $('#lb4').html($('#rlb4').html());
        
    };//end move left 4
    
    this.moveL5 = function(){
        
        $('#lb5').html($('#rlb5').html());
        
    };//end move left 5
    
    this.moveL6 = function(){
        
        $('#lb6').html($('#rlb6').html());
        
    };//end move left 6
    
    this.moveL7 = function(){
        
        $('#lb7').html($('#rlb7').html());
        
    };//end move left 7
    
    this.moveL8 = function(){
        
        $('#lb8').html($('#rlb8').html());
        
    };//end move left 8
    
    this.moveL9 = function(){
        
        $('#lb9').html($('#rlb9').html());
        
    };//end move left 9
    
    this.moveL10 = function(){
        
        $('#lb10').html($('#rlb10').html());
        
    };//end move left 10
    
    this.moveL11 = function(){
        
        $('#lb11').html($('#rlb11').html());
        
    };//end mmove left 11
    
    this.moveL12 = function(){
        
        $('#lb12').html($('#rlb12').html());
        
    };//end move left  12
    
};//end move right table items to left table

//initiates new instance of moving from right table to left
var moveRtoL = new moveRighttoLeft();

//moves object from left table to right
function moveLefttoRight(){
    
    this.moveR = function(){
        
      $('#rlb1').html($('#lb1').html());
        
    };//end move right
    
    this.moveR2 = function(){
      
        $('#rlb2').html($('#lb2').html());
        
    };//end move right 2
    
    this.moveR3 = function(){
        
        $('#rlb3').html($('#lb3').html());
        
    };//end move right 3
    
    this.moveR4 = function(){
        
        $('#rlb4').html($('#lb4').html());
        
    };//end move right 4
    
    this.moveR5 = function(){
        
        $('#rlb5').html($('#lb5').html());
        
    };//end move right 5
    
    this.moveR6 = function(){
        
        $('#rlb6').html($('#lb6').html());
        
    };//end move right 6
    
    this.moveR7 = function(){
        
        $('#rlb7').html($('#lb7').html());
        
    };//end move right 7
    
    this.moveR8 = function(){
        
        $('#rlb8').html($('#lb8').html());
        
    };//end move right 8
    
    this.moveR9 = function(){
        
        $('#rlb9').html($('#lb9').html());
        
    };//end move right 9
    
    this.moveR10 = function(){
        
        $('#rlb10').html($('#lb10').html());
        
    };//end move right 10
    
    this.moveR11 = function(){
        
        $('#rlb11').html($('#lb11').html());
        
    };//end mmove right 11
    
    this.moveR12 = function(){
        
        $('#rlb12').html($('#lb12').html());
        
    };//end move right 12
    
};//end move left table items to right table

//initiates new instance of moving from left table to right
var moveLtoR = new moveLefttoRight();
