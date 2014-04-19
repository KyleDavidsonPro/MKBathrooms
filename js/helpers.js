function calculateVAT (number) {
				vat = number/100*20
				return (number + vat).toFixed(2);
}
			
function buildProductsList(items) {
	//Declare the html string
	html = "";
	//Create a table for the events to be displayed
	for (var i = 0; i < items.length; i++) {
		//get product data
		var name = items[i].get("name");
		var img = items[i].get("img_url");
		var price = items[i].get("price");
		var price_vat = items[i].get("price_vat");
		var detailsStr = items[i].get("detail");
		//Declare list html string
		var list = "";
		//Make sure string is not undefined
		if (detailsStr) {
			var details = detailsStr.split("\n");
			list += "<ul class='list-group'>";
			for (var index = 0; index < details.length; index++) {
				var detail = details[index];
				list += "<li class='list-group-item'>" + detail + "</li>";
			}
			list += "</ul>"
		}
		
		//Build bootstrap grid system
		if (i == 0) html += "<div class='row'>";
		else if (i % 2 == 0) {
			html += "</div><div class='row'>"
		}
		//Add product divs as columns
		html += "<div class='col-md-6 simpleCart_shelfItem'>" +
					"<div class='panel panel-info'>" +
						"<div class='panel-heading'>" +
							"<h2 class='panel-title item_name'>"+name+"</h2>"+
						"</div>"+
						"<div class='panel-body'>"+
							"<div class='media'>"+
								"<div class='pull-left'>"+
									"<a class='fancybox' rel='group' href='../images/"+img+"'><img src='../images/"+img+"' alt='placeholder' class='img-thumbnail' style='width:128px;height:128px;'></a>"+
								"</div>" +
								"<div class='media-body'>"+
									list +
								"</div>"+
							"</div>"+
						"</div>" +
						"<div style='overflow:hidden;' class='panel-footer'><span class='item_price'>&#163;"+calculateVAT(price)+"(inc VAT)</span>"+
							"<a style='float:right;' class='btn btn-success item_add' href='javascript:;'> Add to Cart </a>"+
						"</div>"+
					"</div>"+
				"</div>";

		if (i == items.length-1) html += "</div>";
		
	
	}
	return html;
}

