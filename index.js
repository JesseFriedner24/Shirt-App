   var shirtsData = {
	"blue": [{
		"med": [{
			"id": "med",
			"name": "Medium",
		}],
		"small": [{
			"id": "small",
			"name": "Small"
		}]
	}],
	"teal": [{
		"small": [{
			"id": "small",
			"name": "Small"
		}]
	}],
	"black": [{
		"extra-large": [{
		"id": "XL",
		"name": "Extra-Large"
		}],

		"large": [{
			"id": "large",
			"name": "Large",
		}],
        "med": [{
			"id": "med",
			"name": "Medium",
		}],
		"small": [{
			"id": "small",
			"name": "Small"
		}]
	}],
	"maroon": [{
		"large": [{
			"id": "large",
			"name": "Large",
		}],
		"small": [{
			"id": "small",
			"name": "Small"
		}]
	}],
};

$("#colorSelect").on('change', function() {
	var shirts = shirtsData[$(this).val()];
	var shirtsString = "";
	$.each(shirts[0], function (i, item) {
		shirtsString += '<option value="" + item[0].id + ">' +
		item[0].name + '</option>';
	});
	console.log(shirtsString)
	$('#sizeSelect').html(shirtsString);
});