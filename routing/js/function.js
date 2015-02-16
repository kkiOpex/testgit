function enableSlider(value,date,hour){
	var currHour=hour*60;
	var nextThreeHour=(parseInt(hour)+3)*60;
	var next48Hour=(parseInt(hour)+48)*60; 
	console.log(value);
	tmpStartDate1=date;
	tmpStartDate2=date;
	tmpStartDate1.setHours(hour);tmpStartDate1.setMinutes(0);tmpStartDate1.setSeconds(0);
	tmpStartDate2.setHours(hour+parseInt(3));tmpStartDate2.setMinutes(0);tmpStartDate2.setSeconds(0);
 	var tmpMonth1=tmpStartDate1.getMonth()+1; 
	var tmpMonth2=tmpStartDate2.getMonth()+1; 
 	var tmpValue1=tmpStartDate1.getFullYear()+"-"+tmpMonth1+"-"+tmpStartDate1.getDate()+"--"+("0"+hour).slice(-2)+ ("0"+tmpStartDate1.getMinutes()).slice(-2); 
	var tmpValue2=tmpStartDate2.getFullYear()+"-"+tmpMonth2+"-"+tmpStartDate2.getDate()+"--"+("0"+tmpStartDate2.getHours()).slice(-2)+ ("0"+tmpStartDate2.getMinutes()).slice(-2); 
	$('#startDate').val(tmpValue1); 
	$('#endDate').val(tmpValue2);   
	$("#slider-range").slider({
		range: true,
		min: currHour,
		max: next48Hour,
		step: 15,
		values: [parseInt(currHour), parseInt(nextThreeHour)],
		slide: function (e, ui) {
  			var hours1 = Math.floor(ui.values[0] / 60);
			var minutes1 = ui.values[0] - (hours1 * 60);	
			if (hours1.length == 1) hours1 = '0' + hours1;
			if (minutes1.length == 1) minutes1 = '0' + minutes1;
			if (minutes1 == 0) minutes1 = '00'; 
			var tmpdynmicHours1= parseInt(hours1)/24;
			tmpdynmicHours1=parseInt(tmpdynmicHours1); 
			console.log(dynmicHours1);
			if (hours1 >= 24) {
				if (hours1 == 24) {
					hours1 = 00;
 				} else {
					dynmicHours1=tmpdynmicHours1*24;
					hours1= parseInt(hours1)-parseInt(dynmicHours1);
  				}
			} else {
				hours1 = hours1;
 			}
			if (hours1 == 0) {
				hours1 = 00;
				minutes1 = minutes1;
			} 
			tmpDate1= new Date(); 
			var tmpTimerCounter=$('#curDateTimeVar').val();
			tmpTimerCounter=tmpTimerCounter-1;
   			tmpDate1.setDate(tmpDate1.getDate() + tmpTimerCounter);
			tmpDate1.setDate(tmpDate1.getDate() + parseInt(value));
   		//	tmpDate1.setTime(new Date().getDate() +  1); 
			tmpDate1.setHours(0);tmpDate1.setMinutes(0);tmpDate1.setSeconds(0);
			var dateOffset1 = (ui.values[0]*60*1000);
	        tmpDate1.setTime(tmpDate1.getTime() + dateOffset1);
			var tmpMonth1=tmpDate1.getMonth()+1; 
			var tmpValue1=tmpDate1.getFullYear()+"-"+tmpMonth1+"-"+tmpDate1.getDate()+"--"+("0"+hours1).slice(-2)+minutes1; 
			$('#startDate').val(tmpValue1);
			$('.slider-time').html( tmpDate1.getDate()+ " " +monthNames[tmpMonth1-1].slice(0,3)+"  "+("0"+hours1).slice(-2) + ':' + minutes1);
			$('.slider-timeHrs').html(("0"+hours1).slice(-2) + ':' + minutes1 +' Hrs'); 
 			$('.ui-corner-all a:nth-last-child(2)').html('<span>'+("0"+hours1).slice(-2) + ':' + minutes1+'</span>');  
			
			var hours2 = Math.floor(ui.values[1] / 60);
			var minutes2 = ui.values[1] - (hours2 * 60);
	        var dynmicHours=24;
			if (hours2.length == 1) hours2 = '0' + hours2;
			if (minutes2.length == 1) minutes2 = '0' + minutes2;
			if (minutes2 == 0) minutes2 = '00'; 
			var tmpdynmicHours2= parseInt(hours2)/24;
			tmpdynmicHours2=parseInt(tmpdynmicHours2); 
		  	if (hours2 >= 24) {
				if (hours2 == 24) {
					hours2 = 00;
 						
  				} else { 
					dynmicHours2=tmpdynmicHours2*24;
					hours2= parseInt(hours2)-parseInt(dynmicHours2);
 				}
			} else {
				hours2 = hours2; 
 			} 
			tmpDate2= new Date(); 
			var tmpTimerCounter=$('#curDateTimeVar').val();
			tmpTimerCounter=tmpTimerCounter-1;
   			tmpDate2.setDate(tmpDate2.getDate() + tmpTimerCounter);
			tmpDate2.setDate(tmpDate2.getDate() + parseInt(value));
			//tmpDate2.setTime(new Date().getDate() +  1);
 			tmpDate2.setHours(0);tmpDate2.setMinutes(0);tmpDate2.setSeconds(0); 
			var dateOffset2 = (ui.values[1]*60*1000);
	        tmpDate2.setTime(tmpDate2.getTime() + dateOffset2);
 			var tmpMonth2=tmpDate2.getMonth()+1;
 			var tmpValue2=tmpDate2.getFullYear()+"-"+tmpMonth2+"-"+tmpDate2.getDate()+"--"+("0"+hours2).slice(-2)+minutes2;
			$('#endDate').val(tmpValue2);  
			$('.slider-time2').html( tmpDate2.getDate()+ " " +monthNames[tmpMonth2-1].slice(0,3)+"  "+("0"+hours2).slice(-2) + ':' + minutes2);
			$('.slider-time2Hrs').html(("0"+hours2).slice(-2) + ':' + minutes2+' Hrs');
			$('.ui-corner-all a:nth-last-child(1)').html('<span>'+("0"+hours2).slice(-2) + ':' + minutes2+'</span>'); 
			console.log("hours1 : "+hours1+"hours2 : "+hours2);
			console.log("tmpdynmicHours2 : "+tmpdynmicHours2+" dynmicHours2 :"+dynmicHours2);
		}
	});
 }
 function changeTimeslider(obj,val){
 	 if(val=="zoomOut"){
		 var tmpVal=$('#curDateTimeVar').val(); 
		 var dateOffset = (24*60*60*1000) * tmpVal;
		 currDate.setTime(currDate.getTime() + dateOffset);
		 var currHour = currDate.getHours();
		 var month=currDate.getMonth()+1;
		 var date=currDate.getDate()+1;
		 $("#startDateTime").html("<label>00:00</label>"+ "   " +currDate.getDate()+" "+ monthNames[month-1] + " " + currDate.getFullYear());
		 $("#endDateTime").html("<label>24:00</label>"+ "   " +date+" "+  monthNames[month-1] + " " + currDate.getFullYear());
		 var timerTime=1440*tmpVal;
		 enableSlider(0,timerTime,currHour);
	 }else if(val=="zoomIn"){
		  var dateOffset = (24*60*60*1000) * 2;
		  currDate.setTime(currDate.getTime() - dateOffset);
		  var currHour = currDate.getHours();
		  var month=currDate.getMonth()+1;
		  $("#startDateTime").html("<label>00:00</label>"+ "   " +currDate.getDate()+" "+ monthNames[month-1] + " " + currDate.getFullYear());
		  $("#endDateTime").html("<label>24:00</label>"+ "   " +currDate.getDate()+" "+  monthNames[month-1] + " " + currDate.getFullYear());
		  enableSlider(0,1440,currHour);
	 }else if(val=="Prev"){
		  var tmpVal=$('#curDateTimeVar').val(); 
		  if(tmpVal==0){
  			    return false;
		  } 
		  $("#timeNext").css({"opacity":"1"});
		  currDate= new Date();
 		  if(tmpVal==3){
			  var dateOffset = (48*60*60*1000) * 1;
			  var tmpVal3=1;
		  }else  if(tmpVal==2){
			   var dateOffset = (48*60*60*1000) * 0;
			    var tmpVal3=0;
		  }
		  else  if(tmpVal==1){
			   var dateOffset = (48*60*60*1000) * -1;
			   var tmpVal3=-1;
		  } 
		  currDate.setTime(currDate.getTime() + dateOffset); 
 		  var currHour = currDate.getHours();
		  var month=currDate.getMonth()+1;
		 $("#startDateTime").html("<label>"+("0"+currHour).slice(-2) + ":00"+"</label>"+ "   " +currDate.getDate()+" "+ monthNames[month-1] + " " + currDate.getFullYear());
		  $('.slider-time').html(currDate.getDate()+ " " +monthNames[month-1].slice(0,3)+"  "+("0"+currHour).slice(-2) + ':00');
			var dateOffset = (48*60*60*1000);
			lastHour.setTime(currDate.getTime() + dateOffset);
			var month=lastHour.getMonth()+1;
			var tmplastHour=lastHour.getHours(); 
	$("#endDateTime").html("<label>"+("0"+currHour).slice(-2) + ":00"+"</label>"+ "   " +lastHour.getDate()+" "+  monthNames[month-1] + " " + lastHour.getFullYear());
	$('.slider-time2').html(lastHour.getDate()+ " " +monthNames[month-1].slice(0,3)+"  "+("0"+currHour).slice(-2) + ':00'); 
		 enableSlider(tmpVal3,currDate,currHour);
		  tmpVal=parseInt(tmpVal)-1;
		  if(tmpVal==0){  
			  $("#timePrev").css({"opacity":"0.5"});
		  } 
		  $('#curDateTimeVar').val(tmpVal);
	 }else {
		  var tmpVal=$('#curDateTimeVar').val(); 
		  if(tmpVal==3){ 
			   return false;
		  }  
		  $("#timePrev").css({"opacity":"1"});
 		  tmpcurrDate= new Date();
 		  var dateOffset = (48*60*60*1000) * tmpVal;
		  tmpcurrDate.setTime(tmpcurrDate.getTime() + dateOffset);
		  var currHour = tmpcurrDate.getHours();
		  var month=tmpcurrDate.getMonth()+1;
		  $("#startDateTime").html("<label>"+("0"+currHour).slice(-2) + ":00"+"</label>"+ "   " +tmpcurrDate.getDate()+" "+ monthNames[month-1] + " " + tmpcurrDate.getFullYear());
		   $('.slider-time').html(tmpcurrDate.getDate()+ " " +monthNames[month-1].slice(0,3)+"  "+("0"+currHour).slice(-2) + ':00');
			var dateOffset = (48*60*60*1000);
			lastHour.setTime(tmpcurrDate.getTime() + dateOffset);
			var month=lastHour.getMonth()+1;
			var tmplastHour=lastHour.getHours(); 
	$("#endDateTime").html("<label>"+("0"+currHour).slice(-2) + ":00"+"</label>"+ "   " +lastHour.getDate()+" "+  monthNames[month-1] + " " + lastHour.getFullYear());
	$('.slider-time2').html(lastHour.getDate()+ " " +monthNames[month-1].slice(0,3)+"  "+("0"+currHour).slice(-2) + ':00'); 
		 // $("#startDateTime").html("<label>00:00</label>"+ "   " +currDate.getDate()+" "+ monthNames[month] + " " + currDate.getFullYear());
		 // $("#endDateTime").html("<label>24:00</label>"+ "   " +currDate.getDate()+" "+  monthNames[month] + " " + currDate.getFullYear());
 		  enableSlider(tmpVal,tmpcurrDate,currHour);
		  tmpVal=parseInt(tmpVal)+1;
		  if(tmpVal==3){ 
			   $("#timeNext").css({"opacity":"0.5"}); 
		  }   
		  $('#curDateTimeVar').val(tmpVal);
		 
		  
	 }
 }
 function SearchModify(val){
	 if($(val).val()=="Search"){ 
	 	  $(val).val("Modify"); 
	 	   $(".Timeslider").hide();
	 	   //$("#startDateTime").hide();
	 	   $('#createRoute').hide();
	 	   $('.toppanel').hide();
	 	  $("#proceed").hide();
	 	  $('#createRoute tr:nth-child(1)').show();
		 callEmp();
 	 }
	 else{
		 $(val).val("Search");
		 $('#vehicleCapacity').hide(); 
		 $(".Timeslider").show();
		 $('#createRoute').show();
		 $('.toppanel').show();
		 //$("#proceed").hide();
		 //$("#sliderTD").show();
		 //$("#startDateTime").show();
		 //$("#endDateTime").show();
		 //$("#timerNavigation").show();
		 //$("#timeRangeStartEndValue").hide(); 
		 //$("#timeRangeValue").show(); 
		 //$("#modify").show();
		 $("#route").hide();
		 $("#mapOption").hide();
		 $("#routeOption").show(); 
		 $("#empDataDisplay").show(); 
		 $("#proceed").show();
		 //$("#viewmap").click();
		 $("#rightWrapperContentSecondHeader").css({"height":"100%"});
		 $('#vehicleOption').hide();
 	 } 
 }
 function callProceed(val){
	 $(this).val("Create Note");
	 $("#routeOption").hide();
	 $("#vehicleCapacity").show();
	 $("#empDataDisplay").hide();
	 $('#createRoute').show();
	  $('#vehicleOption').show();
	 goToVehicle();
	// $("#mapOption").show();
	
	 //$("#route").hide();
	// callRouteTable(); 
}

 function callEmp(){   
	    var startDate=$('#startDate').val();
		var endDate=$('#endDate').val(); 
	 	var empTrip ='';
		var empSchedule = []; 
	//	var employeesData = '{"username":"' + APP_USER_NAME + '","password":"' + APP_PASSWORD + '"}\n{"time":{"$gte":"' + startDate +'","$lte":"'+endDate+'"}}';
	   var employeesData = '{"username":"' + APP_USER_NAME + '","password":"' + APP_PASSWORD + '"}\n{"time":{"$gte":"2014-12-12--1000","$lte":"2014-12-13--2200"}}';
		var request = $.ajax({
		url : "http://10.20.253.64:8084/ReportScheduleServlet",
		type : 'post',
		dataType : 'json',
		data : employeesData,
		success : function(data) {
		var jsondata = data;
		var totalEmp;
		console.log(JSON.stringify(data));
		tripListMapData(jsondata);
		var tripSchedule=jsondata.Schedules;
		empSchedule.push(jsondata.Schedules);
		var tempmap = triplistMap;
		//console.log(tempmap);
			 empTrip ='<table class="employee" id="empdataTable">'
						+'<thead><tr class="io_head">'
						+'<th class="io_title"   style="border-radius: 3px 0px 0px 0px;background:#1abc9c !important;" width="10">'
						+'<input type="checkbox"  class="input_align inputAlignParent" id="selectAllSchedule" checked></th>'
						+'<th class="io_title border_left">Scheduled Time</th>'		
						+'<th class="io_title border_left">Total Employees</th>'		
						+'<th class="io_title border_left">Pick Employees</th>'
						+'<th class="io_title border_left"  style="border-radius: 0px 5px 0px 0px;">Drop Employees</th>'
						+'</tr></thead><tbody>';
			 $.each(tempmap,function(key, val){
				 var date = key;
				 var total;
				 var drop = tempmap[''+key+'']['countdrop'];
				 var pickup = tempmap[''+key+'']['countpickup'];
				 
				 if(drop==undefined){
					 drop = "-";
					 total = pickup;
				 }
				 else if(pickup == undefined){
					 pickup = "-";
					 total = drop;
				 }
				 else if(pickup !=undefined && drop !=undefined){
					 total = parseInt(drop)+parseInt(pickup);
				 }
				  
				  
				  if(!isNaN(pickup)){
						sumPickup.push(pickup);
					}
					if(!isNaN(drop)){
						sumDrop.push(drop);
					}
				 empTrip+="<tr><td><input type='checkbox' class='input_align scheduleList inputAlignChild'"+
					" onclick='uncheckSelectAll(this, \"" +date+"\");' checked></td>"
					+'<td class="border_left">'+date+'</td>'
					+'<td class="border_left">'+total+'</td>'
					+'<td class="border_left">'+pickup+'</td>'
					+'<td class="border_left">'+drop+'</td></tr>';
				 
			 });
			
			empTrip+='</tbody><table>';
			$("#proceed").show();
			 //$("#sliderTD").hide();
			 //$("#startDateTime").hide();
			 //$("#endDateTime").hide();
			 //$("#timerNavigation").hide();
			 //$("#timeRangeStartEndValue").show(); 
			 //$("#timeRangeValue").hide(); 
			 $("#modify").show();
			 $("#rightWrapperContentSecondHeader").css({"height":"50px"});
			$('#empDataDisplay').html(empTrip);
			oTable = $('#empdataTable').dataTable();
			$('#mapOption').hide();
			$('#route').hide();
			$('.paginate_disabled_previous').html("<img src='css/images/pageNaviLeft.png' />");
			$('.paginate_enabled_next').html("<img src='css/images/pageNaviRight.png' />");
			$('.paginate_disabled_next').html("<img src='css/images/pageNaviRight.png' />"); 
			$('#netEmp').val(sumAll(sumEmp));
			$('#netPickup').val(sumAll(sumPickup));
			$('#netDrop').val(sumAll(sumDrop));
			//console.log(sumAll(sumEmp));console.log(sumAll(sumPickup));console.log(sumAll(sumDrop));
		}
		
	});
 }
 function tripListMapData(triplistData){
	 var tripData = triplistData.Schedules;
	 //triplistMap=tripData;
	 //console.log(triplistMap);
	 
	 $.each(tripData,function(keyDate,value){
		 
		 var date = keyDate;
		 	//console.log(value);
		 	
		  triplistMap[""+date]=value;
		  triplistMap[""+date]['ischecked']='true';
//		  var eachDateValue = triplistMap;
//		  console.log(eachDateValue);
		 $.each(value, function(services, value) {
			var serviceType = services;
			if(serviceType!="ischecked"){
			/*console.log(serviceType);
			console.log(value);
			var dataVal = value;*/
				if(serviceType=="Pickup" && value !=undefined){
					var countPickup=1;
					var serviceType="Pickup";
					
					$.each(value, function(key, val) {
						 //console.log(val);
						//triplistMap[date]['Pickup'] = value;
						var empId = val['EmployeeId'];
						//triplistMap[''+date+'']['Pickup'][''+key+'']=empId;
						delete triplistMap[date].Pickup[key];
						triplistMap[date][serviceType.toString()][empId] = val;
						triplistMap[date]['countpickup']=countPickup;
						//triplistMap[date]['Pickup']['length']=countPickup;
						countPickup +=1;
					});
				}
				if(serviceType=="Drop" && value !=undefined){
					var countDrop=1;
					var serviceType="Drop";
					
					$.each(value, function(key, val) {
						 //console.log(val);
						//triplistMap[date]['Drop'] = value;
						var empId = val['EmployeeId'];
						//delete myJSONObject[prop];
						//triplistMap[''+date+'']['Drop'][''+key+'']=empId;
						delete triplistMap[date].Drop[''+key+''];
						triplistMap[date][serviceType][empId] = val;
						triplistMap[date]['countdrop']=countDrop;
						//triplistMap[date]['Drop']['length']=countDrop;
						countDrop +=1;
					});
				}
			}
		});
	 });
	 //document.write(triplistMap);
	 	console.log(JSON.stringify(triplistMap));
 }
 function sumAll(array){
	var sum=0;
	for(i=0;i<array.length;i++){
		sum +=array[i];
	}
	//console.log(sum); 
	return sum;
}
function callRouteTable(){
	var html ='';
	var htmlExcelParent ='';
	var htmlExcelChild =''; 
	var uniqueNames = [];
	$('#empDataDisplay').hide();
	$('#empOption').hide();
	$("#vehicleCapacity").hide();
	$('#createRoute').hide();
	 //$("#empDataDisplay").hide();
	$('#mapOption').show();
	$('#route').show();
	var route = $.ajax({
	url : 'js/TripList.json',
	type : 'post',
	dataType : 'json',
	success : function(data) {
	var jsonData = data;
	var triplistData = jsonData.TripList;
	jsontriplistdata=triplistData;

	console.log(jsonData.officedepot);
	//officedepotlat=jsonData.officedepot.lat;
	//officedepotlatlon=jsonData.officedepot.lon;
	//console.log(jsontriplistdata);
	officedepotlatlon=jsonData.officedepot.lat;
	officedepotlat=jsonData.officedepot.lon;
	html += '<table class="routeMaping" id="routeData" cellpadding="0" cellspacing="0">'+
	'<thead>'+
	'<tr class="io_head">'+ 
	'<th class="io_title" style="border-radius: 3px 0px 0px 0px;background:#1abc9c !important;" width="10">'+ 
	'<input type="checkbox" class="input_align inputAlignParent" id="selectAllRoutes" checked ></th>'+ 
	'<th class="io_title border_left">Vehicle Time</th>'+
	'<th class="io_title border_left">Vehicle Number</th>'+ 
	'<th class="io_title border_left">Distance</th>'+ 
	'<th class="io_title border_left" style="border-radius: 0px 5px 0px 0px;">Employees</th></tr>'+ 
	'</thead><tbody>'; 
	htmlExcelParent += '<table  id="routeDataExcel" style="display:none" cellpadding="0" cellspacing="0">'+
	'<thead>'+
	'<tr class="io_head">'+  
	'<th class="io_title border_left">Vehicle Time</th>'+
	'<th class="io_title border_left">Vehicle Number</th>'+ 
	'<th class="io_title border_left">Distance</th>'+ 
	'<th class="io_title border_left" style="border-radius: 0px 5px 0px 0px;">Employees</th></tr>'+ 
	'</thead><tbody>';  
	htmlExcelChild +='<table style="display:none" id="ChildExcelexport" cellpadding="0" cellspacing="0"><thead><tr class="io_head">' 
	+ '<th class="io_title border_left" style="width:12%;">ID</th>' 
	+ '<th class="io_title border_left" style="width:12%;">Name</th>' 
	+ '<th class="io_title border_left">Phone</th>' 
	+ '<th class="io_title border_left">Cab</th>' 
	+ '<th class="io_title border_left">Location</th>'
	+ '<th class="io_title border_left">Shift</th>'
	+ '<th class="io_title border_left">Type</th>'
	+ '<th class="io_title border_left">Time</th>' 
	+ '</tr></thead><tbody>';  
	
	for ( i = 0; i < triplistData.length; i++) {
	var routeJson = jsonData.TripList[i];
	var routeAnalysis = $.parseJSON(routeJson);
	var routeDetails = routeAnalysis.Route_Analysis;
	//console.log(routeDetails);
	if(routeAnalysis.Route_Analysis.length !=0){ 
	//console.log(routeDetails);
	
	$.each(routeDetails, function(i, val) {
	var empActivity =val.Activities, coord, coordString='';
	var cabId=	val.vehicleId;
	$.each(empActivity,function(k,actVal){
	coord=actVal.Coord;
	coordString +=coord.lon+","+coord.lat+"|";
	});
	$.each(val.Activities, function(i, valEmp) {

 		htmlExcelChild += '<tr><td>' + valEmp.Id + '</td><td>' + valEmp.Name + '</td><td>'+valEmp.phone+'</td><td>'+cabId+'</td><td><abbr title="'+valEmp.Coord.location+'">'+valEmp.Coord.location+'  </td><td>'+valEmp.timings+'</td><td>'+valEmp.type+'</td><td>' + minToHM(valEmp.time_of_contact) + '</td></tr>';
 			 
 		}); 
 	//console.log(coordString);
	//console.log("Val :"+val.end_time_of_trip);
	html += "<tr id='" + val.totalDistance + "'>" + "<td><input type='checkbox' value='"+coordString+"' onclick='uncheckSelectAllRoute();showRoutesOnMap();' class='input_align indivChildRoute inputAlignChild'></td>" +
	"<td class='border_left' onclick='routeNestedRow(this,\"" +  val.end_time_of_trip + "\",\"" + val.vehicleId + "\",\"" + val.totalDistance +"\")'>" + minToHM(val.end_time_of_trip)  + "</td><td class='border_left' onclick='routeNestedRow(this,\"" + val.end_time_of_trip + "\",\"" + val.vehicleId + "\",\"" + val.totalDistance +"\" )'>" + val.vehicleId + "</td><td class='border_left' onclick='routeNestedRow(this,\"" + val.end_time_of_trip + "\",\"" + val.vehicleId + "\",\"" + val.totalDistance +"\")'>" + (val.totalDistance/1000).toFixed(2)  +"</td><td class='border_left' onclick='routeNestedRow(this,\"" + val.end_time_of_trip + "\",\"" + val.vehicleId + "\",\"" + val.totalDistance +"\")'>" + val.Activities.length + "</td></tr>";
	htmlExcelParent +="<tr> <td class='border_left'>" + minToHM(val.end_time_of_trip)  + "</td><td class='border_left'  >" + val.vehicleId + "</td><td class='border_left' >" + (val.totalDistance/1000).toFixed(2) + "</td><td class='border_left' >" + val.Activities.length + "</td></tr>";
	//console.log(val.Activities); 
	});
	}
	}
	html +='</tbody></table>';
	htmlExcelParent+='</tbody></table>';
	htmlExcelChild+='</tbody></table>'; 
	var imgExport='<div class="excelUpload"><a style="float:right;" class="btnExport" href="#" download="" onclick=" callChildexcel(this);"><img src="css/images/csv_icon.png" title="ChildTableExcelFile" width="25" height="25"></a><a style="float:right;" class="btnExport" href="#" download="" onclick="exceldown(this)" title="ParentTableExcelFile" ><img src="css/images/csv_icon.png" width="25" height="25"></a> </div>';
	html=imgExport+html+htmlExcelParent+htmlExcelChild;
	$('#route').html(html);
	rTabel=$("#routeData").dataTable();
	$('.paginate_disabled_previous').html("<img src='css/images/pageNaviLeft.png' />");
	$('.paginate_enabled_next').html("<img src='css/images/pageNaviRight.png' />");
	$('.paginate_disabled_next').html("<img src='css/images/pageNaviRight.png' />");  
	 checkAllRoutes();	
    var checkBox = $(' input.indivChildRoute:checkbox:checked', rTabel.fnGetNodes()).map(function(){
		//var checkedValue=$(this).val(); 
		return $(this).val();
		}).get();
	}
	});
	 
}
function routeNestedRow(val,vtime,vno,distance){
  var trID=$(val).parents('tr').attr("id");
  var tabletrID=$(val).parents('table').attr("id");
   var nTr = $(val).parents('tr')[0];
   var tableOpen = rTabel;
    if(previousTr!=undefined || previousTr!=null){
		if (tableOpen.fnIsOpen(previousTr) && previousTr != nTr) {
			tableOpen.fnClose(previousTr);
		}
  	}
	if (tableOpen.fnIsOpen(nTr)) {
    	tableOpen.fnClose(nTr);
    }
    else {       
 		tableOpen.fnOpen(nTr, fnFormatDetailsGride(iTableCounter, trID, tabletrID,1,vtime,vno,distance), 'nesteddetails');
		previousTr = nTr;
		console.log("#ChildRowTable");
 		oInnerTable = $('#ChildRowTable').dataTable({
 			"aaSorting": []  
		}); 
		oInnerTable.fnGetData().length;
		var tempProgress=tabletrID+'innergird'+iTableCounter+'test tbody';   
    iTableCounter = iTableCounter + 1; 
  } 
  $(".childTable thead tr th").off("click"); 
  $(".childTable thead tr th").removeClass("sorting").removeClass("sorting_desc").removeClass("sorting_asc");
  var tmpValue=$("#routeData").height()+30;
  $("#mapdiv").css({"height": $("#routeData").height()+"px","margin-top": "-" + tmpValue +"px"});
}
 
function fnFormatDetailsGride(table_id, trID, tabletrID,tableid,vtime,vno,distance) {
	var innerHtlmTable='';
	var triplistData = jsontriplistdata;
	//alert(jsontriplistdata);
	//console.log(triplistData);
	var cordString='', c='';
	  innerHtlmTable +='<table style="width:100%;border:solid 1px #ccc;margin:0px 0px;" id="ChildRowTable" cellpadding="0" cellspacing="0"><thead><tr class="io_head">' 
	+ '<th class="io_title border_left" style="width:12%;">ID</th>' 
	+ '<th class="io_title border_left" style="width:12%;">Name</th>' 
	+ '<th class="io_title border_left">Phone</th>' 
	+ '<th class="io_title border_left">Cab</th>' 
	+ '<th class="io_title border_left">Location</th>'
	+ '<th class="io_title border_left">Shift</th>'
	+ '<th class="io_title border_left">Type</th>'
	+ '<th class="io_title border_left">Time</th>' 
	+ '</tr></thead><tbody>';
	for ( i = 0; i < triplistData.length; i++) {
	var routeJson = triplistData[i];
	var routeAnalysis = $.parseJSON(routeJson);
	var routeDetails = routeAnalysis.Route_Analysis;
	var indivCoord='';
	var n ;
	//console.log(routeAnalysis); 
	if (routeAnalysis.Route_Analysis.length != 0) {
	//console.log(routeDetails);	
	$.each(routeDetails, function(i, val) {
	//console.log(val);	
	var cabId=	val.vehicleId;
	console.log(cabId);
 /*   console.log("trip"+val.end_time_of_trip+"||"+vtime);
	 console.log("vid"+val.vehicleId+"||"+vno);
	 console.log("vdis"+val.totalDistance+"||"+distance); */
	if (val.end_time_of_trip == vtime && val.vehicleId == vno && val.totalDistance == distance) { 
	//console.log("matched : "+val);	
	$.each(val.Activities, function(i, valEmp) {
	console.log(valEmp);	
	innerHtlmTable += '<tr><td>' + valEmp.Id + '</td><td>' + valEmp.Name + '</td><td>'+valEmp.phone+'</td><td>'+cabId+'</td><td><abbr title="'+valEmp.Coord.location+'">'+valEmp.Coord.location.substring(0,60)+' ...</abbr> </td><td>'+valEmp.timings+'</td><td>'+valEmp.type+'</td><td>' + minToHM(valEmp.time_of_contact) + '</td></tr>';
	indivCoord+=valEmp.Coord.lat+","+valEmp.Coord.lon+" |";
	}); 
	COORD +=indivCoord;
	n = COORD.search(indivCoord);
	if(n!= -1){
	COORD =COORD.replace(indivCoord,'');
	}
	//console.log(n+" "+COORD+ " "+indivCoord); 
	}
	});
	//$('#chield').html('');
	//console.log(innerHtlmTable);
	
	
	//$('#chield').html(innerHtlmTable);
	}
	}
	innerHtlmTable+='</tbody></table>';
	return innerHtlmTable;
	}
	
function minToHM(min) {
	var hours = Math.floor(min / 60);
	var minutes = Math.round(min % 60);
	var hourString = (hours<10 ?"0"+hours:hours); 
	var minuteString = (minutes<10 ?"0"+minutes:minutes); 
	if(hourString==24 && minuteString==60){
		minuteString="00";
		hourString="00";
	}
	if(minuteString==60){
		hourString=hourString+1;
		minuteString="00";
	}
	var time = hourString + " : " + minuteString;
	return time;
}
 
function showRoute(coord) {
	 
 console.log(coord);
z = 0;
var getIconRandom=['yellow.png','green.png','blue.png','orange.png','pink.png','lgreen.png','purple.png'];

var mapOptions = {
/*styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#acbcc9'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}],*/
zoom : 11,
mapTypeControl : false,
panControl : false,
panControl : false,
streetViewControl : false,
zoomControl : false,
/*zoomControlOptions: {
style: google.maps.ZoomControlStyle.SMALL,
position: google.maps.ControlPosition.RIGHT_BOTTOM
}, */
center : new google.maps.LatLng(officedepotlatlon, officedepotlat),
// mapTypeId: google.maps.MapTypeId.HYBRID
};
directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer({
suppressMarkers : true,
polylineOptions : {
strokeColor : "red"
}
});
map = new google.maps.Map(document.getElementById('mapdiv'), mapOptions);

waypoint = new Array();
coord = coord.substring(0, coord.length - 1);
var indivcoord = coord.split("|");
var innerArray = new Array();
var variable = 1;
var employeeboarded=0;
 var colour = getRandomColor(false);
//var colour = '00004C';
for (var i = 0; i < indivcoord.length; i++) {
//console.log(indivcoord[i]);
//innerArray.push({location: new google.maps.LatLng(indivcoord[i].split(",")[0], indivcoord[i].split(",")[1]),stopover: true});
// LABEL_TEXT=""+variable;
// ICON_POSITION = ""+indivcoord[i].split(",")[1]+","+ indivcoord[i].split(",")[0];
// ICON_IMAGE = IMAGE_BASE_URL + '.png';
var randomNumberIndex = Math.floor(Math.random()*getIconRandom.length);
console.log("Color index : "+randomNumberIndex);
var imageurl =IMAGE_BASE_URL + getIconRandom[randomNumberIndex];
if(i!=0&&(indivcoord[i].split(",")[1]==indivcoord[i-1].split(",")[1])){
employeeboarded;
}else{
employeeboarded++;
}
if (indivcoord[i] == officedepotlat+","+officedepotlatlon) {
colour = getRandomColor(false);
waypoint.push(innerArray);
innerArray = new Array();
randomNumberIndex = Math.floor(Math.random()*getIconRandom.length);
//console.log("Color index : "+randomNumberIndex);
imageurl =IMAGE_BASE_URL + getIconRandom[randomNumberIndex];
//console.log("pusing to main array");
var gmarker = new google.maps.Marker({
position : new google.maps.LatLng(indivcoord[i].split(",")[1], indivcoord[i].split(",")[0]),
icon : IMAGE_BASE_URL + 'red.png'
});
gmarker.setMap(map);
variable = 1;
} else {
if (indivcoord[i].indexOf("F") > -1) {
indivcoord[i] = indivcoord[i].replace("F", "");
var labelMarker = new MarkerWithLabel({
position : new google.maps.LatLng(indivcoord[i].split(",")[1], indivcoord[i].split(",")[0]),
icon : IMAGE_BASE_URL + 'green.png',
labelContent : variable,
labelClass : "pickupcount",
labelAnchor : new google.maps.Point(10, 33),
labelInBackground : false
});
} else {
if (innerArray.length == 0) {
var labelMarker = new MarkerWithLabel({
position : new google.maps.LatLng(indivcoord[i].split(",")[1], indivcoord[i].split(",")[0]),
icon : imageurl,
labelContent : variable,
labelClass : "pickupcount",
labelAnchor : new google.maps.Point(10, 33),
labelInBackground : false,

});
} else {
var labelMarker = new MarkerWithLabel({
position : new google.maps.LatLng(indivcoord[i].split(",")[1], indivcoord[i].split(",")[0]),
icon : IMAGE_BASE_URL + getIconRandom[randomNumberIndex],
labelContent : variable,
labelClass : "pickupcount",
labelAnchor : new google.maps.Point(10, 33),
labelInBackground : false
});
}
}
variable++;
labelMarker.setMap(map);
//google.maps.event.addListener(labelMarker);
innerArray.push({
location : new google.maps.LatLng(indivcoord[i].split(",")[1], indivcoord[i].split(",")[0]),
stopover : true
});
}
}
//console.log(waypoint);
var i = 1;
if (waypoint.length >= 1) {
/* console.log(waypoint[i]);
var request = {
//origin: new google.maps.LatLng("80.168614","13.094722"),
origin: new google.maps.LatLng("13.094722","80.168614"),
//destination: new google.maps.LatLng("80.168614","13.094722"),
destination: new google.maps.LatLng("13.094722","80.168614"),
waypoints: waypoint[i],
optimizeWaypoints: false,
travelMode: google.maps.TravelMode.DRIVING
};
directionsService.route(request, function(response, status) {
console.log(status);
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
directionsDisplay.setMap(map);
}
});*/
createRequest();
}
}
function getRandomColor(booleanvar) {
var letters = '0123456789ABCDEF'.split('');
if (booleanvar)
var color = '#';
else
var color = '';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function createRequest() {
if (z < waypoint.length) {
var request = {
//origin: new google.maps.LatLng("80.168614","13.094722"),
origin : new google.maps.LatLng(officedepotlatlon, officedepotlat),
//destination: new google.maps.LatLng("80.168614","13.094722"),
destination : new google.maps.LatLng(officedepotlatlon, officedepotlat),
waypoints : waypoint[z],
optimizeWaypoints : false,
travelMode : google.maps.TravelMode.DRIVING
};
directionsService.route(request, function(response, status) {
//console.log(status);
var directionsDisplay1 = new google.maps.DirectionsRenderer({
suppressMarkers : true,
polylineOptions : {
strokeColor : getRandomColor(true)
//strokeColor : '#4C0000'
}
});
directionsDisplay1.setOptions({
preserveViewport : true
});
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay1.setDirections(response);
directionsDisplay1.setMap(map);
z++;
createRequest();
}
});
}
}
function getData(){
 	var scheduleTime, indivEmpModificationData, pickupModif=[],dropModif=[],pickupCount,dropCount, empPouupHtml='',k=0;
 	var netEmployees = $('#netEmp').val();
 	var netPickup =$('#netPickup').val();
 	var netDrop = $('#netDrop').val();
 	var netPickupDrop=0;
 	var map = triplistMap;
	var checkBox = $(' input.scheduleList:checkbox:checked', oTable.fnGetNodes()).map(function(){
		//var checkedValue=$(this).val();
		return $(this).val();
	}).get();
	console.log(checkBox);
	empPouupHtml+='<div class="popupContainer"><table style="width:100%;margin:0px 0px;" cellspacing="0" cellpadding="0" border="0">'+
	'<tr class="netEmpData"><td style="width:24%;border-right:solid 2px #1abc9c;"><label class="poputTitle">Employees</label> '+netEmployees+'<label class="icon emp_icon"></label></td>'+
	'<td  style="width:24%;border-right:solid 2px #1abc9c;"><table class="popupInnerTitleTable"><tr><td>M <label class="icon icon_male"></label></td><td>F <label class="icon icon_female"></label></td></tr></table></td>'+
	'<td  style="width:24%;border-right:solid 2px #1abc9c;"><table class="popupInnerTitleTable"><tr><td>'+netPickup+'<label class="icon icon_pickup"></label></td><td>'+netDrop+'<label class="icon icon_drop"></label></td></tr></table></td>'+
	'<td  style="width:24%;"><table class="popupInnerTitleTable"><tr><td>40<label class="icon icon_confirmed"></label></td><td >40<label class="icon icon_notconfirmed"></label></td></tr></table></td>'+
	'</tr></tabel><table style="width:100%;margin:0;" cellspacing="0" cellpadding="0" class="scheduleStatus"><tbody>';
	var k = 0;
	$.each(map,function(key,val){
		var istrue = map[''+key+'']['ischecked'];
		//console.log(istrue);
		if(istrue=="true"){
			empPouupHtml+='<tr class="scheduleDetailsDisplay"><th style="border-right:solid 2px #00985D;" valign="top"><table><tr><td>'+netPickupDrop+'</td><td><label class="icon emp_icon"></label></td></tr></table></th>'
			+'<th style="border-right:solid 2px #00985D;" valign="top"><table class="popupInnerTitleTable"><tr><td class="titleTr">'+netPickupDrop+'</td><td class="titleTr"><label class="icon icon_male"></label></td><td class="titleTr">0 </td><td class="titleTr"><label class="icon icon_female"></label></td></tr></table></th>'
			+'<th style="border-right:solid 2px #00985D;" valign="top"><table class="popupInnerTitleTable"><tr><td class="titleTr">'+pickupCount+'</td><td class="titleTr"><label class="icon icon_pickup"></label></td><td class="titleTr">'+dropCount+'</td><td class="titleTr"><label class="icon icon_drop"></label></td></tr></table></th>'
			+'<th><table class="popupInnerTitleTable" valign="top"><tr><td class="titleTr">40</td><td class="titleTr"><label class="icon icon_confirmed"></label></td><td class="titleTr">40</td><td class="titleTr"><label class="icon icon_notconfirmed"></label></td></tr></table></th></tr>';
			if (k == 0) {
				var displayVar = "inline-table";
			} else {
				var displayVar = "none";
			}
			
			if(val['Pickup']!==undefined && val['Drop'] == undefined){
				var pickupData = val['Pickup'];
				console.log(pickupData);
				empPouupHtml+='<tr><td colspan="5" valign="top"><table id="table'+k+'" style="margin:0;width:100%;padding:0;display:'+displayVar+'" cellspacing="0" cellpadding="0">'+
				'<thead><tr><th ><input type="checkbox" onchange="unselectAllPopup(this)" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
				+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
				/*$.each(pickupData,function(i,val){
					
					console.log(i);
					console.log(val);
					//empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_pickup_green'></label></td></tr>";
				});*/
				empPouupHtml+='</tbody></table></td></tr>';
				console.log(pickupDataEmp);
			}else if(val['Pickup']==undefined && val['Drop'] != undefined){
				var dropData = val['Drop'];
				console.log(dropData);
				empPouupHtml+='<tr><td colspan="5" valign="top"><table id="table'+k+'" style="margin:0;width:100%;padding:0;display:'+displayVar+'" cellspacing="0" cellpadding="0"><thead><tr><th ><input type="checkbox" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
				+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
				//console.log(pickupData);
				$.each(dropData,function(i,val){
					/*console.log(i);
					console.log(val);*/
					//empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_drop_green'></label></td></tr>";
				});
				empPouupHtml+='</tbody></table></td></tr>';
				
			}else if(val['Pickup']!=undefined && val['Drop'] != undefined){
				empPouupHtml+='<tr ><td colspan="5" valign="top"><table style="margin:0;width:100%;padding:0;display:'+displayVar+'" id="table'+k+'" cellspacing="0" cellpadding="0"><thead ><tr><th ><input type="checkbox" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
				+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
				var pickupData = val['Pickup'];
				console.log(pickupData);
				/*$.each(pickupData,function(i,val){
					
					console.log(i);
					console.log(val);
					//empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_pickup_green'></label></td></tr>";
				});*/
				var dropData = val['Drop'];
				console.log(dropData);
				/*$.each(dropData,function(i,val){
					
					console.log(i);
					console.log(val);
					//empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_drop_green'></label></td></tr>";
				});*/
				empPouupHtml+='</tbody></table></td></tr>'; 
			}
			
			//console.log(istrue);
			console.log(val);
			/*console.log(val['Pickup']);
			console.log(val['Drop']);*/
		}
		k +=1;
	});
	
	/*for(var k=0;k<checkBox.length; k++){
		var empinfo=$.parseJSON(checkBox[k]);
		//console.log(empinfo);
		$.each(empinfo,function(i, val){
			indivEmpModificationData=val;
			triptime=i;
			pickupCount=indivEmpModificationData.Pickup;
			dropCount =indivEmpModificationData.Drop;
			pickupDataEmp=indivEmpModificationData.Pickup;
			dropDataEmp=indivEmpModificationData.Drop;
		if(dropCount==undefined){
			dropCount=0;
			pickupCount=pickupCount.length;
			netPickupDrop=pickupCount;
		}else if(pickupCount==undefined){
			pickupCount=0;
			dropCount=dropCount.length;
			netPickupDrop=dropCount;
		}else if(pickupCount!=undefined && dropCount!=undefined){
			netPickupDrop=pickupCount.length+dropCount.length;
			pickupCount=pickupCount.length;
			dropCount=dropCount.length;
		}
			
			empPouupHtml+='<tr class="scheduleDetailsDisplay"><th style="border-right:solid 2px #00985D;" valign="top"><table><tr><td>'+netPickupDrop+'</td><td><label class="icon emp_icon"></label></td></tr></table></th>'
				+'<th style="border-right:solid 2px #00985D;" valign="top"><table class="popupInnerTitleTable"><tr><td class="titleTr">'+netPickupDrop+'</td><td class="titleTr"><label class="icon icon_male"></label></td><td class="titleTr">0 </td><td class="titleTr"><label class="icon icon_female"></label></td></tr></table></th>'
				+'<th style="border-right:solid 2px #00985D;" valign="top"><table class="popupInnerTitleTable"><tr><td class="titleTr">'+pickupCount+'</td><td class="titleTr"><label class="icon icon_pickup"></label></td><td class="titleTr">'+dropCount+'</td><td class="titleTr"><label class="icon icon_drop"></label></td></tr></table></th>'
				+'<th><table class="popupInnerTitleTable" valign="top"><tr><td class="titleTr">40</td><td class="titleTr"><label class="icon icon_confirmed"></label></td><td class="titleTr">40</td><td class="titleTr"><label class="icon icon_notconfirmed"></label></td></tr></table></th></tr>';
				if(k==0){
				var displayVar="inline-table";
			}
			else{
				var displayVar="none";
			}
		if(pickupDataEmp!==undefined && dropDataEmp == undefined){
			
			empPouupHtml+='<tr><td colspan="5" valign="top"><table id="table'+k+'" style="margin:0;width:100%;padding:0;display:'+displayVar+'" cellspacing="0" cellpadding="0">'+
			'<thead><tr><th ><input type="checkbox" onchange="unselectAllPopup(this)" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
			+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
			$.each(pickupDataEmp,function(i,val){
				var newempData=JSON.stringify(val);
				//console.log(newempData);
				empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_pickup_green'></label></td></tr>";
			});
			empPouupHtml+='</tbody></table></td></tr>';
			console.log(pickupDataEmp);
		}else if(pickupDataEmp==undefined && dropDataEmp !== undefined){
			empPouupHtml+='<tr><td colspan="5" valign="top"><table id="table'+k+'" style="margin:0;width:100%;padding:0;display:'+displayVar+'" cellspacing="0" cellpadding="0"><thead><tr><th ><input type="checkbox" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
			+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
			//console.log(dropDataEmp[4]);
			$.each(dropDataEmp,function(i,val){
				var newempData=JSON.stringify(val);
				empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_drop_green'></label></td></tr>";
			});
			empPouupHtml+='</tbody></table></td></tr>';
			
		}else if(pickupDataEmp!==undefined && dropDataEmp !== undefined){
			empPouupHtml+='<tr ><td colspan="5" valign="top"><table style="margin:0;width:100%;padding:0;display:'+displayVar+'" id="table'+k+'" cellspacing="0" cellpadding="0"><thead ><tr><th ><input type="checkbox" name="selectall" id="'+k+'" onclick="selectAllChild(this)"></th>'
			+'<th>Emp ID</th><th>Emp Name</th><th>Time</th><th>Type</th></tr></thead><tbody>';
			$.each(pickupDataEmp,function(i,val){
				var newempData=JSON.stringify(val);
				empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_pickup_green'></label></td></tr>";
			});
			
			$.each(dropDataEmp,function(i,val){
				var newempData=JSON.stringify(val);
				empPouupHtml+="<tr><td><input type='checkbox' value='"+newempData+"' class='sechedule"+k+"' onchange='unselectAllPopup(this)'></td><td>"+val.EmployeeId+"</td><td>"+val.EmployeeName+"</td><td>"+triptime+"</td><td><label class='icon icon_drop_green'></label></td></tr>";
			});
			empPouupHtml+='</tbody></table></td></tr>'; 
		}		 
		}); 
	} */
	/*empPouupHtml+='</tbody></table>'
			+'<div style="padding:10px 0px;"><div style="width:256px;margin:0 auto;"><input type="button" value="Undo" class="button" style="margin: 0px 10px;" onclick="undoAll()">'
            +'<input type="button" value="Done" id="proceed" class="button" style="margin: 0px 10px;" onclick="getAllValue()"></div>';
	//console.log(empPouupHtml);
	$('#empPopup').html(empPouupHtml);
	 //$('.scheduleStatus tbody tr').hide();
	 $('tr.scheduleDetailsDisplay').show();
	 $('.scheduleStatus tbody tr:nth-child(1)').show();
	 $('.scheduleStatus tbody tr:nth-child(2)').show();
	 objPopupTable=[];
	for(g=0;g<checkBox.length; g++){
		//console.log(" K "+g); 
		pt1=$("#table"+g).dataTable();
		objPopupTable.push(pt1);
		$('.paginate_disabled_previous').html("<img src='css/images/pageNaviLeft.png' />");
		$('.paginate_disabled_next').html("<img src='css/images/pageNaviRight.png' />");
		$('.paginate_enabled_next').html("<img src='css/images/pageNaviRight.png' />");
		if(g!=0){
			$("#table"+g+"_info").hide();
			$("#table"+g+"_paginate").hide();
		}
	}
	//console.log(objPopupTable);
	$("#empPopup").show();
	$('div.popupContainer').niceScroll();
	undoAll();*/
    //console.log(checkBox.length); 
}
function undoAll(){

for(i=0;i<objPopupTable.length;i++){
		$('#'+i).prop( "checked", true );
		$('.sechedule'+i, objPopupTable[i].fnGetNodes()).prop( "checked", true );
	} 
}
function selectAllChild(id){
	var selectId=$(id).attr("id");
	//var tableID=$(id).parents('table').attr("id");
 	var checkAll=$(id).is(':checked'); 
	var pt1=objPopupTable[selectId];
	console.log("id"+selectId);
	console.log(pt1);
	if(checkAll==false){
		$('.sechedule'+selectId, objPopupTable[selectId].fnGetNodes()).prop( "checked", false );
	}
	if(checkAll==true){
		$('.sechedule'+selectId, objPopupTable[selectId].fnGetNodes()).prop( "checked", true );
	} 
}
function getAllValue(){
	for(i=0;i<objPopupTable.length;i++){ 
		var checkBox = $('.sechedule'+i+':checkbox:checked',objPopupTable[i].fnGetNodes()).map(function(){
return $(this).val();
}).get();
console.log(checkBox);
	} 
	$('#empPopup').hide();
} 
 function uncheckSelectAll(this1, date){
	var map = triplistMap;
	var checkChield = $(this1).prop("checked");
	console.log(checkChield);
	if(checkChield==true){
		console.log("1 : " +checkChield);
		map[date]['ischecked']="true";
	}else{
		console.log("2 : " +checkChield);
		map[date]['ischecked']="false";
	}
	
	console.log(map[date]);
	$.each(map,function(date,value){
		var istrue = map[date]['ischecked'];
		if(istrue == "false"){
			$('#selectAllSchedule').prop('checked',false);
			return false;
		}else{
			$('#selectAllSchedule').prop('checked',true);
		}
	});
}
function uncheckSelectAllRoute(){
	var checkAll=$('input', rTabel.fnGetNodes());
	for(i=0;i<checkAll.length;i++){
		if(checkAll[i].checked==false){
			console.log(checkAll[i].checked);
			$('#selectAllRoutes').prop('checked',false);
			return false;
		}else{
			console.log(checkAll[i].checked);
			$('#selectAllRoutes').prop('checked',true);
		}
	}
}
function unselectAllPopup(thisVal){
	var className=$(thisVal).attr("class").replace('sechedule','');
	console.log(className);
	
		var checkAll=$('.sechedule'+className, objPopupTable[className].fnGetNodes());
		
		for(k=0;k<checkAll.length;k++){
			console.log(checkAll[k].checked);
			 if(checkAll[k].checked==false){
				 $('#'+className).prop('checked',false);
				 return false;
			 }else{
				 $('#'+className).prop('checked',true);
			 }
		} 
}
function checkAllRoutes(){
	var checkAll=$('#selectAllRoutes').is(':checked');
		var checkBox = $('input', rTabel.fnGetNodes());
		//console.log(checkBox);
		if(checkAll==false){
			 $('input', rTabel.fnGetNodes()).prop( "checked", false );
			 //console.log(checkAll);
		}
		if(checkAll==true){
			 $('input', rTabel.fnGetNodes()).prop( "checked", true );
			 //console.log(checkAll);
		}
}
function createRoute(){
	var checkBoxRoute = $(' input.scheduleList:checkbox:checked', oTable.fnGetNodes()).map(function(){
		//var checkedValue=$(this).val();
		return $(this).val();
	}).get();
	//console.log(checkBoxRoute);
	for(var k=0;k<checkBoxRoute.length; k++){
		var routeData = $.parseJSON(checkBoxRoute[k]);
		var jsonDataString='{"services":[';
		//console.log(routeData);
		$.each(routeData,function(i, dataVal){
			var scheduleTime=i;
			var pickDVal=dataVal;
			// Pickup service 
			if(pickDVal.Pickup!=undefined && pickDVal.Drop==undefined){
				var pickUp=pickDVal.Pickup;
				for(var i=0; i < pickUp.length;i++){
					var coma=",";
					if(i==pickUp.length-1){
						coma="";
					}
					//console.log(pickUp[i]);
					jsonDataString +='{"id":"'+pickUp[i].EmployeeId+'", "lon":"'+pickUp[i].HomeLocation+'", "shiftend":"1200Dummy","nshiftend":"1200Dummy","name":"'+pickUp[i].EmployeeName+'","shiftstart":"1200Dummy","nshiftstart":"1200Dummy","ispickup":"Y","isdrop":"N","gender":"Male"}'+coma;
				}
				jsonDataString+=']}';
				//insertRouteData(jsonDataString);
				//console.log(jsonDataString);
			}

			// Drop Service
			if(pickDVal.Pickup==undefined && pickDVal.Drop!=undefined){
				var drop=pickDVal.Drop;
				for(var i=0; i < drop.length;i++){
					var coma=",";
					if(i==drop.length-1){
						coma="";
					}
					//console.log(pickUp[i]);
					jsonDataString +='{"id":"'+drop[i].EmployeeId+'", "lon":"'+drop[i].HomeLocation+'", "shiftend":"1200Dumy","nshiftend":"1200Dummy","name":"'+drop[i].EmployeeName+'","shiftstart":"1200Dummy","nshiftstart":"1200Dummy","ispickup":"Y","isdrop":"N","gender":"Male"}'+coma;
				}
				jsonDataString+=']}';
				insertRouteData(jsonDataString);
				//console.log(jsonDataString);
			}
			// Pickup and Drop both
			if(pickDVal.Pickup!=undefined && pickDVal.Drop!=undefined){
				var pickUp=pickDVal.Pickup;
				for(var i=0; i < pickUp.length;i++){
					var coma=",";
					if(i==pickUp.length){
						coma="";
					}
					//console.log(pickUp[i]);
					jsonDataString +='{"id":"'+pickUp[i].EmployeeId+'", "lon":"'+pickUp[i].HomeLocation+'", "shiftend":"1200Dummy","nshiftend":"1200Dummy","name":"'+pickUp[i].EmployeeName+'","shiftstart":"1200Dummy","nshiftstart":"1200Dummy","ispickup":"Y","isdrop":"N","gender":"Male"},';
				}

				var drop=pickDVal.Drop;
				for(var j=0; j < drop.length;j++){
					var coma=",";
					if(j==drop.length-1){
						coma="";
					}
					//console.log(pickUp[i]);
					jsonDataString +='{"id":"'+drop[j].EmployeeId+'", "lon":"'+drop[j].HomeLocation+'", "shiftend":"1200Dumy","nshiftend":"1200Dummy","name":"'+drop[j].EmployeeName+'","shiftstart":"1200Dummy","nshiftstart":"1200Dummy","ispickup":"Y","isdrop":"N","gender":"Male"}'+coma;
				}

				jsonDataString+=']}';
				insertRouteData(jsonDataString);
				//console.log(jsonDataString);
			}
		});
	}
	callRouteTable();
}
function insertRouteData(jsonDataString){
	var contentString = '{"username":"' + APP_USER_NAME + '","password":"' + APP_PASSWORD +
      '"}\n'+jsonDataString;
	 $.ajax({
      url: APP_MONGO_URL + 'writePost?dbname=' + APP_DB_ROUTE + '&colname=services',
      type: 'post',
      dataType: 'json',
      data: contentString,
      success: function(data) {
       //alert('Route Created successfully');
      }
      
    });
}
function goToVehicle(){
	var num=324;
	var htmlVehicle ='<table id="tableVehicle"><thead><tr class="io_head"><th><input type="checkbox" name="vehicleCheckAll" ></th><th>Vehicle Number</th><th>Vehicle Type</th><th>Vehicle Capacity</th></tr></thead><tbody>';
	for(i=0;i<10;i++){
		htmlVehicle +='<tr><td><input type="checkbox"></td><td>'+(num+i)+'</td><td>Tata Sumo</td><td>12</td></tr>';
	}
	htmlVehicle+='</tbody></table></div> ';
	$('#vehicleCapacity').html(htmlVehicle);
	 $('#tableVehicle').dataTable();
	 $('.paginate_disabled_previous').html("<img src='css/images/pageNaviLeft.png' />");
	 $('.paginate_disabled_next').html("<img src='css/images/pageNaviRight.png' />");
	 $('.paginate_enabled_next').html("<img src='css/images/pageNaviRight.png' />");
}

function showRoutesOnMap(){
	
		//if($('#viewmap').val()=="View in Map"){
			$("#routeData").css({"width":"70%","float":"left"});
			$('#viewmap').val("Hide Map");
			var tmpValue=$("#routeData").height()+30;
			$("#route").append("<div id='mapdiv' style='height:"+$("#routeData").height()+"px;margin-top:-"+tmpValue+"px'></div>"); 

			 var checkBox = $(' input.indivChildRoute:checkbox:checked', rTabel.fnGetNodes()).map(function(){
				return $(this).val();
			}).get();
			 
			 var locationCoord='';
			console.log(checkBox);
			$.each(checkBox,function(i, cordval){
				locationCoord+=cordval+officedepotlat+','+officedepotlatlon+'|';
			});
			//locationCoord +="80.168614,13.094722|";
			// locationCoord = locationCoord.substring(0,locationCoord.length - 1);
			showRoute(locationCoord);
			
		/*}else{
			$("#routeData").css({"width":"70%","float":"left"});
			$('#viewmap').val("View in Map");
			var tmpValue=$("#routeData").height()+30;
			$("#route").append("<div id='mapdiv' style='height:"+$("#routeData").height()+"px;margin-top:-"+tmpValue+"px'></div>"); 

			 var checkBox = $(' input.indivChildRoute:checkbox:checked', rTabel.fnGetNodes()).map(function(){
				return $(this).val();
			}).get();
			 
			 var locationCoord='';
			console.log(checkBox);
			$.each(checkBox,function(i, cordval){
				locationCoord+=cordval+'80.168614,13.094722|';
			});
			//locationCoord +="80.168614,13.094722|";
			showRoute(locationCoord);
		}*/
}
function fleetsJSON(){
	var type = typeArray;
	var numberOfVehicle = numberOfVehicleArray;
	var comma;
	var fleetJSON ='{ "fleets":{ "vehicleTypes":[';
	var i,k;
	for( i=0;i < type.length;i++){
		if(i ==(typeArray.length-1)){
			comma="";
		}else{
			comma=",";
		}
		//console.log(typeArray.length-1);
		fleetJSON +='{ "typeid":"T'+i+'","capacity":"'+type[i]+
		'","costperD":"1","costperT":"1","fixedcost":"0","maxcount":"8","maxavailableduration":"720"}'+comma;
	}
	fleetJSON +='],"vehicles":[';

	for(k=0;k < numberOfVehicle.length;k++){
		/*if(k < numberOfVehicle.lenght-1){
			comma=",";
		}else{
			comma="";
		}
		console.log(" K :"+k);*/
		console.log(numberOfVehicleArray.length-1);
		for(var i=0;i < numberOfVehicle[k]; i++){
			if(k ==(numberOfVehicleArray.length-1) && i==(numberOfVehicle[k]-1)){
				comma="";
			}else{
				comma=",";
			}
			fleetJSON +='{ "vehicleid":"220","typeid":"T'+k+'", "location":"office","startCoord":"80.174814,13.094353","return2depot":"true",'
			+'"earlieststart":"0","latestarrival":"0"}'+comma;
		}
		
	}
	fleetJSON +='] } }';
	console.log(fleetJSON);
}
function exceldown(val){  
            var uri = $("#routeDataExcel").btechco_excelexport({
                containerid: "routeDataExcel"
                , datatype: $datatype.Table
                , returnUri: true
            }); 
            $(val).attr('download', 'ParentTableData.xls').attr('href', uri).attr('target', '_blank');
			
		//callChildexcel(val);
}
function callChildexcel(val){
		var uri = $("#ChildExcelexport").btechco_excelexport({
                containerid: "ChildExcelexport"
                , datatype: $datatype.Table
                , returnUri: true
            }); 
            $(val).attr('download', 'ChildTableData.xls').attr('href', uri).attr('target', '_blank');
   ;
}
function editvehicle(val){
	var idstr = $(val).attr('id');
	var cabcount = parseInt(idstr);
	var numberOfVehicle = $('#'+cabcount+'_numberOfVehicle').val();
	var typestr =$("#"+cabcount+"_type").val();
	var type = parseInt(typestr);
	var html='<table cellpadding="0" cellspacing="0" style="float: left;" class="editVehicle" id="'+cabcount+'edit">'
		+'<tr><td align="right"><label>Type <select class="select_vehicle" id="'+cabcount+'edit_type">'
		+'<option>3</option><option>4</option><option>8</option><option>10</option>'
		+'</select></label></label></td><td>'
		+'<label class="icon_large remove_icon" id="'+cabcount+'_remove"></label></td></tr>'
		+'<tr><td><label>Number Of Vehicle <input style="width: 80px" type="text"  id="'+cabcount+'edit_numberof_vehicle"/>'
		+'</label></td><td><label class="icon_large save_icon" id="'+cabcount+'_save"></label></td>'
		+'</tr></table>';
															
												
	$('#'+cabcount+'_vehicle').before(html);													
	$("#"+cabcount+"edit_numberof_vehicle").val(numberOfVehicle);
	$("#"+cabcount+"edit_type").val(type);
	console.log(cabcount);
}