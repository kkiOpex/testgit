var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var currDate=''; 
var rTabel,oTable;
var COORD='';
var oInnerTable;
var previousTr;
var oInnerTable;
var officedepotlat='';
var officedepotlatlon='';
var iTableCounter = 1;
var dynmicHours1=0;
var dynmicHours2=0;
var sumEmp=[], sumPickup=[], sumDrop=[];
APP_USER_NAME = "pm1";
APP_PASSWORD = "iopex@!23";
APP_DB_NAME = "safetrexMeteor";
APP_DB_ROUTE="routing";
APP_MONGO_URL='http://10.20.253.64:8081/';
var map;
var waypoint,ICON_IMAGE,ICON_POSITION, ANCHOR, LABEL_TEXT;
var i = 0;
var z = 0;
var directionsService;
var IMAGE_BASE_URL = "http://10.20.254.26/routescreenUI/css/images/"; 
$(document).ready(function() {	  
	/*$("#viewmap").click(function() {
		if($(this).val()=="View in Map"){
			$("#routeData").css({"width":"70%","float":"left"});
			$(this).val("Hide Map");
			var tmpValue=$("#routeData").height()+30;
			$("#route").append("<div id='mapdiv' style='height:"+$("#routeData").height()+"px;margin-top:-"+tmpValue+"px'></div>"); 

			 var checkBox = $(' input.indivChildRoute:checkbox:checked', rTabel.fnGetNodes()).map(function(){
				return $(this).val();
			}).get();

			 var locationCoord='';
			//console.log(checkBox);
			$.each(checkBox,function(i, cordval){
				locationCoord+=cordval+'80.168614,13.094722|';
			});
			//locationCoord +="80.168614,13.094722|";
			showRoute(locationCoord);
			
		}
		else{
			$("#routeData").css({"width":"99%","float":"none"});
		    $(this).val("View in Map");
			$("#mapdiv").remove();
		} 
 	});*/	
	$('#viewmap').click(function(){
		if($(this).val()=="View in Map"){
			
			showRoutesOnMap();
		$(this).val("Hide Map");
		}else if($(this).val()=="Hide Map"){
			$(this).val("View in Map");
			$("#routeData").css({"width":"99%","float":"none"});
			$("#mapdiv").remove();
		}
 	})
	//showRoutesOnMap()
	currDate = new Date();
	tmpcurrDate = new Date();
 	nextThreeHour = new Date();
	lastHour = new Date();
	var currHour = currDate.getHours();
	enableSlider(0,currDate,currHour);
	var month=currDate.getMonth();
	var dateOffset = (3*60*60*1000);
	nextThreeHour.setTime(nextThreeHour.getTime() + dateOffset);
 	var nextThreeHour=nextThreeHour.getHours();
 	$('.slider-time').html(currDate.getDate()+ " " +monthNames[month].slice(0,3)+"  "+("0"+currHour).slice(-2) + ':00');
	$('.slider-time2').html(currDate.getDate()+ " " +monthNames[month].slice(0,3)+"  "+("0"+nextThreeHour).slice(-2) + ':00'); 
	$('.slider-timeHrs').html(("0"+currHour).slice(-2) + ':00 Hrs');
	$('.slider-time2Hrs').html(("0"+nextThreeHour).slice(-2) + ':00 Hrs'); 
	$('.ui-corner-all a:nth-last-child(2)').html('<span>'+ ("0"+currHour).slice(-2) + ':00 </span>');
	$('.ui-corner-all a:nth-last-child(1)').html('<span>'+("0"+nextThreeHour).slice(-2) + ':00 </span>'); 
 	$("#startDateTime").html("<label>"+("0"+currHour).slice(-2)  + ":00"+"</label>"+ "   " +currDate.getDate()+" "+ monthNames[month] + " " + currDate.getFullYear());
	var dateOffset = (48*60*60*1000);
	lastHour.setTime(lastHour.getTime() + dateOffset);
	var month=lastHour.getMonth();
 	var tmplastHour=lastHour.getHours(); 
	$("#endDateTime").html("<label>"+("0"+tmplastHour).slice(-2)  + ":00"+"</label>"+ "   " +lastHour.getDate()+" "+  monthNames[month] + " " + lastHour.getFullYear());  
$('body').on('click','#selectAllRoutes',function(){
		 checkAllRoutes();
		});
$('body').on('click','#selectAllSchedule',function(){
		var checkAll=$('#selectAllSchedule').is(':checked');
		var checkBox = $('input', oTable.fnGetNodes());
 		if(checkAll==false){
			 $('input', oTable.fnGetNodes()).prop( "checked", false );
 		}
		if(checkAll==true){
			 $('input', oTable.fnGetNodes()).prop( "checked", true );
 		} 
	});
$('body').on('click','.scheduleDetailsDisplay',function(){
		 $('tr.scheduleDetailsDisplay').next().hide();
		 $(this).next().children().find('.dataTable').show();
		 $(this).next().children().find('.dataTables_paginate').show();
		 $(this).next().children().find('.dataTables_info').show();
		 $(this).next().show();
		 $(".popupContainer").getNiceScroll().resize();
	});
$('#empPopup').click(function(e){
    if (e.target == this) {
        $(this).hide();
    }

	});


}); 
