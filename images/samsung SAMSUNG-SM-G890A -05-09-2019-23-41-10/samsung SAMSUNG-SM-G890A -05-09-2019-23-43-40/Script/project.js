$(function () {
 	$("#back-to-top").hide();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$("#back-to-top").fadeIn(1500);
		} else {
			$("#back-to-top").fadeOut(1000);
		}
	});
	$("#back-to-top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$("#checkAll").click(function() {
		$('input[name=row]').prop('checked', true);
	
	});
	
	$("#unCheckAll").click(function() {
		$('input[name=row]').prop('checked', false);
	});
    
    sidebar_nav();
});

function sidebar_nav(){
    var json = eval(Conten0);
	delete json.Version;
    var nav_content = '';
    for (row in json) {
        if(json[row].SessionID == 'Contacts'){
            nav_content += '<li id="nav_contents"><a href="../Contacts/Contacts.html">Contacts</a></li>';
        }
        if(json[row].SessionID == 'SMS'){
            nav_content += '<li id="nav_sms"><a href="../SMS/SMS.html">Messages</a></li>';
        }
        if(json[row].SessionID == 'WhatsApp'){
            nav_content += '<li id="nav_whatsApp"><a href="../WhatsApp/WhatsApp.html">WhatsApp</a></li>';
        }
        if(json[row].SessionID == 'CallHistory'){
            nav_content += '<li id="nav_callHistory"><a href="../CallHistory/CallHistory.html">Call History</a></li>';
        }
        if(json[row].SessionID == 'Notes'){
            nav_content += '<li id="nav_notes"><a href="../Notes/Notes.html">Notes</a></li>';
        }
        if(json[row].SessionID == 'Calendar'){
            nav_content += '<li id="nav_calendar"><a href="../Calendar/Calendar.html">Calendar</a></li>';
        }
        if(json[row].SessionID == 'Reminder'){
            nav_content += '<li id="nav_reminder"><a href="../Reminder/Reminder.html">Reminders</a></li>';
        }
        if(json[row].SessionID == 'SafariBook'){
            nav_content += '<li id="nav_safariBook"><a href="../SafariBook/SafariBook.html">Safari Bookmarks</a></li>';
        }
        if(json[row].SessionID == 'Viber'){
            nav_content += '<li id="nav_viber"><a href="../Viber/Viber.html">Viber</a></li>';
        }        
    }
    $(".nav").append(nav_content);
}

function DictFold(id) {
    if ($categories('dictc_' + id).style.display == 'none') {
        $categories('dictc_' + id).style.display = ''
        //$categories('dicttoggle_'+id).src='';   
        $categories(id).style.fontWeight = 'bold';
        $categories(id).style.borderBottom = 'none';
    } else {
        $categories('dictc_' + id).style.display = 'none';
        //$categories('dicttoggle_'+id).src=''
        $categories(id).style.fontWeight = 'normal';
        $categories(id).style.borderBottom = 'solid';
        $categories(id).style.borderBottomColor = '#DEDEDE';
        $categories(id).style.borderWidth = '1px';
    }
}
function $categories(element) {
    return document.getElementById(element);
}

