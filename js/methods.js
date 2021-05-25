var get_style = function(elem, prop, pseudo) {
	if(pseudo === undefined) {
		x = window.getComputedStyle(elem, null).getPropertyValue(prop)
	} else {
		x = window.getComputedStyle(elem, pseudo).getPropertyValue(prop)
	}
	return x;
},
 select = function(elements = [], ev, callback) {
    if (elements.length === undefined || elements.length === 0) {
        return elements.addEventListener(ev, callback);
    }
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener(ev, callback);
    }
},
 random = function() {
	let alpha = [
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
		'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
		'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
		'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
		'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
		'W', 'X', 'Y', 'Z'
	],
	str = '';
	for (i = 7; i >= 0; i--) {
		str += alpha[Math.floor(Math.random() * alpha.length)]
	}
	return str;

},
js_exp = function(str, callback) {
 	let exp = null;
 	if(callback === undefined && str !== undefined || callback === '' && str !== '') {
 	    return new Function("return "+ "(function() {\n"+str+"})()")()
 	} else if(str === "" && callback !== undefined) {
 	    return new Function("return "+ "(function() { ("+callback+")() })()")()
 	}
 	else if(typeof str === "string" && str !== '') {
 	    return new Function("return "+ "(function() { \n"+str+"; \n ("+callback+")() })()")()
 	}  else {
 	    alert("Error: you should insert string")
 	}
}, loop = function(elem, callback, opt) {
	if(elem !== undefined) {
		let i = 0;
		if(typeof elem === "number") {
			for(i = 0; i < elem; i++) {
			    callback(i)
			}
		    return;
		} else if (typeof elem === "object") {
			for(i in elem) {
			    callback(i)
			}
		    return;
		}else if (opt === "normal") {
			for(i = 0; i < elem.length; i++) {
		  	  callback(i)
			}
			return;
		}
		for(i = elem.length-1; i >= 0; i--) {
		    callback(i)
		}
	}
},
/*			code beautify			*/
beautify = {
 	"html": function(html, html_options) {
 	    return html_beautify(html, html_options);
 	},
 	"css": function(css, css_options) {
 	    return css_beautify(css, css_options);
 	},
 	"js": function(js, js_options) {
 	    return js_beautify(js, js_options);
 	}
}, 
beauty = function(txt, file_ext, opt) {
	if (file_ext !== undefined && !file_ext.match(/html|css|js/ig)) {
	    file_ext = "html";
	}
	if (opt === undefined && file_ext !== undefined) {
	    return beautify[file_ext](txt, {
	        indent_size: 4,
	        space_in_empty_paren: true
	    })
	} else if (file_ext !== undefined && opt !== undefined) {
	    return beautify[file_ext](txt, opt)
	}
}