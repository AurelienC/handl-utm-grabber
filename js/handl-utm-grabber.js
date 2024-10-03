jQuery(function($) {
	$.each([ 'utm_source','utm_medium','utm_term', 'utm_content', 'utm_campaign', 'utm_obj', 'utm_loc', 'utm_adname', 'utm_adset', 'gclid', 'email', 'username' ], function( i,v ) {
		var curval = Cookies.get(v)
		
		if (curval != undefined) {
			curval = decodeURIComponent(curval)
			if (v == 'username') {
				//Maybe this should apply to all... We'll see...
				curval = curval.replace(/\+/g, ' ')
			}
			
			$('input[name=\"'+v+'\"]').val(curval)
			$('input#'+v).val(curval)
			$('input.'+v).val(curval)
		}
		
	});
});