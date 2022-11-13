//print contacts json data
function print_Contacts() {
	var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten2);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="contact-print"><table><tbody><tr><td class="ContactFirst"></td><td></td></tr></tbody></table></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {		
		var row = print_row[i];		
		html += '<div class="contact-print">';
		html += '<table><tbody>';
		html += '<tr><td class="ContactFirst">Name:</td><td>';
		if (json[row].FirstName !== '') {
			html += json[row].FirstName;
			if (json[row].LastName !== '') {
				html += json[row].LastName;
			}
		} else {
			html += json[row].MobileNumber;
		}
		html += '</td></tr>';
		if (json[row].NickName !== '') {
			html += '<tr><td class="ContactFirst">NickName:</td><td>' + json[row].NickName + '</td></tr>';
		}
		if (json[row].MobileNumber !== '') {
			html += '<tr><td class="ContactFirst">MobileNumber:</td><td>' + json[row].MobileNumber + '</td></tr>';
		}
		if (json[row].HomeNumber !== '') {
			html += '<tr><td class="ContactFirst">HomeNumber:</td><td>' + json[row].HomeNumber + '</td></tr>';
		}
		if (json[row].WorkNumber !== '') {
			html += '<tr><td class="ContactFirst">WorkNumber:</td><td>' + json[row].WorkNumber + '</td></tr>';
		}
		if (json[row].HomePage !== '') {
			html += '<tr><td class="ContactFirst">HomePage:</td><td>' + json[row].HomePage + '</td></tr>';
		}
		if (json[row].Email !== '') {
			html += '<tr><td class="ContactFirst">Email:</td><td>' + json[row].Email + '</td></tr>';
		}
		if (json[row].Birthday !== '') {
			html += '<tr><td class="ContactFirst">Birthday:</td><td>' + json[row].Birthday + '</td></tr>';
		}
		if (json[row].Group !== '') {
			html += '<tr><td class="ContactFirst">Group:</td><td>' + json[row].Group + '</td></tr>';
		}
		if (json[row].Note !== '') {
			html += '<tr><td class="ContactFirst">Note:</td><td>' + json[row].Note + '</td></tr>';
		}
		if (json[row].Organzation !== '') {
			html += '<tr><td class="ContactFirst">Organzation:</td><td>' + json[row].Organzation + '</td></tr>';
		}
		if (json[row].Department !== '') {
			html += '<tr><td class="ContactFirst">Department:</td><td>' + json[row].Department + '</td></tr>';
		}
		if (json[row].CreateDate !== '') {
			html += '<tr><td class="ContactFirst">CreateDate:</td><td>' + json[row].CreateDate + '</td></tr>';
		}
		if (json[row].HomeAddress !== '') {
			html += '<tr><td class="ContactFirst">HomeAddress:</td><td>' + json[row].HomeAddress + '</td></tr>';
		}
		if (json[row].WorkAddress !== '') {
			html += '<tr><td class="ContactFirst">WorkAddress:</td><td>' + json[row].WorkAddress + '</td></tr>';
		}
		if (json[row].HomeFax !== '') {
			html += '<tr><td class="ContactFirst">HomeFax:</td><td>' + json[row].HomeFax + '</td></tr>';
		}
		if (json[row].WorkFax !== '') {
			html += '<tr><td class="ContactFirst">WorkFax:</td><td>' + json[row].WorkFax + '</td></tr>';
		}
		if (json[row].WorkEmail !== '') {
			html += '<tr><td class="ContactFirst">WorkEmail:</td><td>' + json[row].WorkEmail + '</td></tr>';
		}
		html += '</tbody></table></div>';
	}
//	$('.print').on('click', function() {
		$.print(html);
//	});

}

//print message json data
function print_Message() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten1);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="message-print"><table><tbody><tr><td class="MessageFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];	    
	    for (rows in json[row]){
            html += '<div class="message-print"><table><tbody>';
            if(json[row][rows].flags == '2'){
				html += '<tr><td class="MessageFirst">From:</td><td>';
			}
			else{
				html += '<tr><td class="MessageFirst">To:</td><td>';
			}
            html += json[row][rows].Phone;
            if ($.trim(json[row][rows].Name) !== '') {
                html += '('+json[row][rows].Name+')';                        
            }
            html += '</td></tr>';                    
            html += '<tr><td class="MessageFirst">Date:</td><td>' + json[row][rows].Date + '</td></tr>';
            html += '<tr><td class="MessageFirst">Content:</td><td>';
            if(json[row][rows].Type == 0){
                html += json[row][rows].Text;    
            }else if(json[row][rows].Type == 1){
                html += '<img src="'+json[row][rows].Text + '">';
            }else if(json[row][rows].Type == 3){
                html += json[row][rows].Text + '(Voice)';
            }else if(json[row][rows].Type == 4){
                html += json[row][rows].Text + '(Video)';                        
            }
            html += '</td></tr>';
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}


//print call log json data
function print_callLog() {
    var print_array = arguments[0] ? arguments[0] : "all";
    var html = '';
    var json = eval(Conten3);
    delete json.Version;
    var row_array = new Array();
    for (row in json) {
        row_array.push(row);
    }
    if(print_array == 'all'){
        var print_row = row_array;
    }else{
        var print_row = print_array;
    }
    
    if(print_row.length == 0){        
        html = '<div class="calllog-print"><table><tbody><tr><td class="CalllogFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
    
    for (i = 0; i < print_row.length; i++) {
        var row = print_row[i];
        for (rows in json[row]){                    
            var call_date = json[row][rows].Duration;
            var call_date_hours = Math.floor(call_date/3600);                    
            var call_date_minute = Math.floor((call_date/60)%60);
            var call_date_seconds = Math.floor(call_date%60);
            if(call_date_hours < 10){
                call_date_hours = '0' + call_date_hours;
            }
            if(call_date_minute < 10){
                call_date_minute = '0' + call_date_minute;
            }
            if(call_date_seconds < 10){
                call_date_seconds = '0' + call_date_seconds;
            }
            var call_date_time = call_date_hours + ':' + call_date_minute + ':' +  call_date_seconds;                    
            html += '<div class="calllog-print"><table><tbody>';   
            if(json[row][rows].CallStatus == 1){
                html += '<tr><td class="CalllogFirst">Outgoing:</td><td>';
            }else if(json[row][rows].CallStatus == 2){
                html += '<tr><td class="CalllogFirst">Incoming:</td><td>';                
            }else if(json[row][rows].CallStatus == 3){
                html += '<tr><td class="CalllogFirst">Missed:</td><td>';                                                                
            }else if(json[row][rows].CallStatus == 4){
                html += '<tr><td class="CalllogFirst">Canceled:</td><td>';                                                                                        
            }            
            html += json[row][rows].Phone;
            if ($.trim(json[row][rows].Name) !== '') {
                html += '('+json[row][rows].Name+')';                        
            }
            html += '</td></tr>';
            html += '<tr><td class="CalllogFirst">Date:</td><td>' + json[row][rows].CallDate + '</td></tr>';                    
            if(json[row][rows].CallStatus == 1){
                html += '<tr><td class="CalllogFirst">Duration:</td><td>'+call_date_time+'</td></tr>';                        
            }else if(json[row][rows].CallStatus == 2){
                html += '<tr><td class="CalllogFirst">Duration:</td><td>'+call_date_time+'</td></tr>';                        
            }else if(json[row][rows].CallStatus == 3){
                html += '<tr><td class="CalllogFirst">Duration:</td><td>00:00:00</td></tr>';                                                
            }else if(json[row][rows].CallStatus == 4){
                html += '<tr><td class="CalllogFirst">Duration:</td><td>00:00:00</td></tr>';                                                                        
            }                    
            html += '</table></tbody></div>';                    
        }
    }
    $.print(html);
}

//print whatsapp json data
function print_Whatsapp() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten5);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="whatsapp-print"><table><tbody><tr><td class="WhatsappFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];	    
	    for (rows in json[row]){
            html += '<div class="whatsapp-print"><table><tbody>';
            if(json[row][rows].flags == '2'){				
				html += '<tr><td class="WhatsappFirst">From:</td><td>';
			}
			else{
				html += '<tr><td class="WhatsappFirst">To:</td><td>';
			}            
            html += json[row][rows].DisplayName;
            html += '('+json[row][rows].Phone+')';
            html += '</td></tr>';                    
            html += '<tr><td class="WhatsappFirst">Date:</td><td>' + json[row][rows].Date + '</td></tr>';            
            if(json[row][rows].Type == 0){
            	html += '<tr><td class="WhatsappFirst">Content:</td><td>';
                html += json[row][rows].Text;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 1){
            	html += '<tr><td class="WhatsappFirst">Image:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 3){
            	html += '<tr><td class="WhatsappFirst">Audio:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
                html += '<tr><td class="WhatsappFirst">Duration:</td><td>';
                html += json[row][rows].duration;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 4){
            	html += '<tr><td class="WhatsappFirst">Video:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
                html += '<tr><td class="WhatsappFirst">Duration:</td><td>';
                html += json[row][rows].duration;
                html += '</td></tr>';
            }
            
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}

//print SafariBook json data
function print_SafariBook() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten9);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="SafariBook-print"><table><tbody><tr><td class="SafariBookFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];
	    for (rows in json[row]){
            html += '<div class="SafariBook-print"><table><tbody>';
            html += '<tr><td class="SafariBookFirst">Title:</td><td>';
            html += json[row][rows].Title;
            html += '</td></tr>';
            html += '<tr><td class="SafariBookFirst">URL:</td><td>';
            html += json[row][rows].URL;
            html += '</td></tr>';
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}


//print Calendar json data
function print_Calendar() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten7);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="Calendar-print"><table><tbody><tr><td class="CalendarFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];
	    for (rows in json[row]){
            html += '<div class="Calendar-print"><table><tbody>';
            if (json[row].Title !== '') {
				html += '<tr><td class="CalendarFirst">Title:</td><td>'+json[row].Title+'</td></tr>';			
			} 
			if (json[row].Text !== '') {
				html += '<tr><td class="CalendarFirst">Text:</td><td>'+json[row].Text+'</td></tr>';			
			}
			if (json[row].StartDate !== '') {
				html += '<tr><td class="CalendarFirst">Start Date:</td><td>'+json[row].StartDate+'</td></tr>';			
			}
			if (json[row].EndDate !== '') {
				html += '<tr><td class="CalendarFirst">End Date:</td><td>'+json[row].EndDate+'</td></tr>';			
			}
			if (json[row].Location !== '') {
				html += '<tr><td class="CalendarFirst">Location:</td><td>'+json[row].Location+'</td></tr>';			
			}
			if (json[row].TimeZone !== '') {
				html += '<tr><td class="CalendarFirst">TimeZone:</td><td>'+json[row].TimeZone+'</td></tr>';			
			}
			if (json[row].HasAlarm !== '') {
				html += '<tr><td class="CalendarFirst">HasAlarm:</td><td>'+json[row].HasAlarm+'</td></tr>';			
			}
			if (json[row].Minutes !== '') {
				html += '<tr><td class="CalendarFirst">Minutes:</td><td>'+json[row].Minutes+'</td></tr>';			
			}
			if (json[row].Rrule !== '') {
				html += '<tr><td class="CalendarFirst">Rrule:</td><td>'+json[row].Rrule+'</td></tr>';			
			}
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}


//print Reminder json data
function print_Reminder() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten8);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="Calendar-print"><table><tbody><tr><td class="ReminderFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];
	    for (rows in json[row]){
            html += '<div class="Reminder-print"><table><tbody>';
            if (json[row].Title !== '') {
				html += '<tr><td class="ReminderFirst">Title:</td><td>'+json[row].Title+'</td></tr>';			
			} 
			if (json[row].Text !== '') {
				html += '<tr><td class="ReminderFirst">Text:</td><td>'+json[row].Text+'</td></tr>';			
			}
			if (json[row].StartDate !== '') {
				html += '<tr><td class="ReminderFirst">Start Date:</td><td>'+json[row].StartDate+'</td></tr>';			
			}
			if (json[row].EndDate !== '') {
				html += '<tr><td class="ReminderFirst">End Date:</td><td>'+json[row].EndDate+'</td></tr>';			
			}
			if (json[row].Location !== '') {
				html += '<tr><td class="ReminderFirst">Location:</td><td>'+json[row].Location+'</td></tr>';			
			}
			if (json[row].TimeZone !== '') {
				html += '<tr><td class="ReminderFirst">TimeZone:</td><td>'+json[row].TimeZone+'</td></tr>';			
			}
			if (json[row].HasAlarm !== '') {
				html += '<tr><td class="ReminderFirst">HasAlarm:</td><td>'+json[row].HasAlarm+'</td></tr>';			
			}
			if (json[row].Minutes !== '') {
				html += '<tr><td class="ReminderFirst">Minutes:</td><td>'+json[row].Minutes+'</td></tr>';			
			}
			if (json[row].Rrule !== '') {
				html += '<tr><td class="ReminderFirst">Rrule:</td><td>'+json[row].Rrule+'</td></tr>';			
			}
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}

//print Notes json data
function print_Notes() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conten6);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="Notes-print"><table><tbody><tr><td class="NotesFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];
	    for (rows in json[row]){
            html += '<div class="Notes-print"><table><tbody>';
            if (json[row].Title !== '') {
				html += '<tr><td class="NotesFirst">Title:</td><td>'+json[row].Title+'</td></tr>';			
			} 
			if (json[row].Text !== '') {
				html += '<tr><td class="NotesFirst">Text:</td><td>'+json[row].Text+'</td></tr>';			
			} 
			if (json[row].Date !== '') {
				html += '<tr><td class="NotesFirst">Date:</td><td>'+json[row].Date+'</td></tr>';			
			} 
			if (json[row].Author !== '') {
				html += '<tr><td class="NotesFirst">Author:</td><td>'+json[row].Author+'</td></tr>';			
			} 			
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}


//print Viber json data
function print_Viber() {
    var print_array = arguments[0] ? arguments[0] : "all"; 
	var html = '';
	var json = eval(Conte10);
	delete json.Version;
	var row_array = new Array();
	for (row in json) {
		row_array.push(row);
	}
	if(print_array == 'all'){
		var print_row = row_array;
	}else{
		var print_row = print_array;
	}
	
	if(print_row.length == 0){        
        html = '<div class="viber-print"><table><tbody><tr><td class="ViberFirst"></td><td></td></tr></table></tbody></div>';
        $.print(html);
        return false;
    }
	
	for (i = 0; i < print_row.length; i++) {
	    var row = print_row[i];	    
	    for (rows in json[row]){
            html += '<div class="viber-print"><table><tbody>';
            if(json[row][rows].flags == '2'){				
				html += '<tr><td class="ViberFirst">From:</td><td>';
			}
			else{
				html += '<tr><td class="ViberFirst">To:</td><td>';
			}            
            html += json[row][rows].DisplayName;
            html += '('+json[row][rows].Phone+')';
            html += '</td></tr>';                    
            html += '<tr><td class="ViberFirst">Date:</td><td>' + json[row][rows].Date + '</td></tr>';            
            if(json[row][rows].Type == 0){
            	html += '<tr><td class="ViberFirst">Content:</td><td>';
                html += json[row][rows].Text;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 1){
            	html += '<tr><td class="ViberFirst">Image:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 3){
            	html += '<tr><td class="ViberFirst">Audio:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
                html += '<tr><td class="ViberFirst">Duration:</td><td>';
                html += json[row][rows].duration;
                html += '</td></tr>';
            }else if(json[row][rows].Type == 4){
            	html += '<tr><td class="ViberFirst">Video:</td><td>';
                html += json[row][rows].media_url;
                html += '</td></tr>';
                html += '<tr><td class="ViberFirst">Duration:</td><td>';
                html += json[row][rows].duration;
                html += '</td></tr>';
            }
            
            html += '</table></tbody></div>';                    
        }
	}
	
	$.print(html);
	
}
