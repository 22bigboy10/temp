// onclick jeans
document.querySelector(".dropdown").addEventListener("click",function rotate90deg() {
	document.querySelector(".dropdown-arrow").style.transform = "rotate(90deg)";
	document.querySelector(".type-of-jeans").style.display = "initial";

	document.querySelector(".dropdown").addEventListener("click", function rotate0deg() {
		document.querySelector(".dropdown-arrow").style.transform = "rotate(0deg)";
		document.querySelector(".type-of-jeans").style.display = "none";
			document.querySelector(".dropdown").addEventListener("click",function original() {
			rotate90deg();
		})
	})
})

// change Custome type
document.getElementById('Shirts').onclick  = reply_click;
document.getElementById('Dresses').onclick = reply_click;
document.getElementById('Jeans').onclick   = reply_click;
document.getElementById('Jackets').onclick = reply_click;
document.getElementById('Gymwear').onclick = reply_click;
document.getElementById('Blazers').onclick = reply_click;
document.getElementById('Shoes').onclick   = reply_click;
function reply_click() {
	 document.getElementById('costume-type').innerHTML = this.id;
}

//change display .search
document.querySelector(".search-icon").addEventListener("click", function showUpSearchBar() {
	document.querySelector(".search-bar").style.display = "block";
	document.querySelector(".search-icon").addEventListener("click", function hideSearchBar() {
		document.querySelector(".search-bar").style.display = "none";
		document.querySelector(".search-icon").addEventListener("click", function loopSearchBar() {
			showUpSearchBar();
		})
	})
})

//translation img


// n-items
var nodeList = document.querySelectorAll("#clothes .item-child").length;
document.querySelector(".n-item").innerHTML = nodeList + " items";
document.querySelector("#Dresses").addEventListener("click", function dresses() {
	var n = document.querySelectorAll(".dresses .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Shirts").addEventListener("click", function shirts() {
	var n = document.querySelectorAll(".shirts .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Jeans").addEventListener("click", function jeans() {
	var n = document.querySelectorAll(".jeans .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Jackets").addEventListener("click", function jackets() {
	var n = document.querySelectorAll(".jackets .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Gymwear").addEventListener("click", function gymwear() {
	var n = document.querySelectorAll(".gymwear .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Blazers").addEventListener("click", function blazers() {
	var n = document.querySelectorAll(".blazers .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})
document.querySelector("#Shoes").addEventListener("click", function shoes() {
	var n = document.querySelectorAll(".shoes .item-child").length;
	document.querySelector(".n-item").innerHTML = n + " items";
})

//select type of clothes
document.querySelector("#Dresses").addEventListener("click", function dresses() {
	document.querySelector(".dresses").style.display = "grid";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Shirts").addEventListener("click", function shirts() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "grid";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Jeans").addEventListener("click", function jeans() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "grid";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Jackets").addEventListener("click", function jackets() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "grid";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Gymwear").addEventListener("click", function gymwear() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "grid";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Blazers").addEventListener("click", function blazers() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "grid";
	document.querySelector(".shoes").style.display   = "none";
})
document.querySelector("#Shoes").addEventListener("click", function shoes() {
	document.querySelector(".dresses").style.display = "none";
	document.querySelector(".shirts").style.display  = "none";
	document.querySelector(".jeans").style.display   = "none";
	document.querySelector(".jackets").style.display = "none";
	document.querySelector(".gymwear").style.display = "none";
	document.querySelector(".blazers").style.display = "none";
	document.querySelector(".shoes").style.display   = "grid";
})

// change transmission-image
	var imageN=1;
	function transmission() {
	var imgAlbum = ["../img/transition-img/img1.jpg","../img/transition-img/img2.jpg","../img/transition-img/img3.jpg","../img/transition-img/img4.jpg"];
	 document.querySelector(".transmission-image .new-and-hot").transition = "0.3s";
	document.querySelector(".transmission-image .new-and-hot").src = imgAlbum[imageN];
	imageN++;
	if(imageN==imgAlbum.length) {
		imageN=0;
	}
}


//add id to item-child-img 
function addingId() {
	var divChildLength = document.querySelectorAll('.item-child').length;
	for(var i = 0;i < divChildLength;i++) {
		document.querySelectorAll('.item-child')[i].id = 'item-child-'+ i;
	}
	for(var i = 0;i < divChildLength; i++) {
		document.querySelectorAll('.buy-now-button')[i].id = 'button-'+ i;
	}
}
addingId();

var cItem = 1;
var countRow = 0;
function addToList() {
	function countItem() {
		document.querySelector(".count-bought-list").innerHTML = cItem;
		cItem++;
	}
	countItem();

	function createDivElement(addClass) {
		var newDiv = document.createElement('div');
		newDiv.className = addClass;
		return newDiv;
	}

	function CreateInputElement(inputType,inputValue,inputClass) {
		var newButton = document.createElement('input');
		newButton.type = inputType;
		newButton.value = inputValue;
		newButton.className = inputClass
		return newButton;
	}

	function addElements() {
		var newRow = createDivElement('table-row');
		var newCell = [createDivElement('table-cell item-img'),createDivElement('table-cell description'),createDivElement('table-cell item-price'),createDivElement('table-cell option')];
		document.querySelector(".manage-bought-list").appendChild(newRow);
		for(var i = 0; i < newCell.length; i++) {
			document.querySelectorAll(".table-row")[countRow].append(newCell[i]);
		}
		document.querySelectorAll('.option')[countRow].appendChild(createDivElement('option-zone'));
		document.querySelectorAll('.option-zone')[countRow].append(CreateInputElement('button','-','minus-item'),CreateInputElement('number','','input-type'),CreateInputElement('button','+','plus-item'));
		countRow++;
	}
	addElements();
}

var countList = 0;
function reply_id(clicked_id) { 
	var getId = '#'+clicked_id;
    var thisParentId = '#'+document.querySelector(getId).parentElement.parentElement.id;
	var getImage = document.querySelector(thisParentId+' .item-child-img img');
	var getName = document.querySelector(thisParentId+' .item-name p').innerHTML;
	var getPrice = document.querySelector(thisParentId+' .price span').innerHTML;
	var getCloneImage = getImage.cloneNode();
	document.querySelectorAll('.item-img')[countList].appendChild(getCloneImage);
	document.querySelectorAll('.description')[countList].innerHTML ="<p>Product code: " +getName+"</p>";
	document.querySelectorAll('.description')[countList].innerHTML += '<p>Size: <span>39</span></p>';
	document.querySelectorAll('.item-price')[countList].innerHTML = '<p>Price: <span>'+ getPrice +'</span>$</p>';
	var numberOfProduct = Number(document.querySelectorAll('.input-type')[countList].value) + 1;
	document.querySelectorAll('.input-type')[countList].value = numberOfProduct;
	document.querySelectorAll('.input-type')[countList].setAttribute("onchange","totalAmount()");
	document.querySelectorAll('.minus-item')[countList].setAttribute("onclick", "minusItem(this.id)");
	document.querySelectorAll('.plus-item')[countList].setAttribute("onclick", "plusItem(this.id)");
	document.querySelectorAll('.option-zone')[countList].setAttribute("id","zone-"+countList);
	document.querySelectorAll('.minus-item')[countList].setAttribute("id","minus-"+countList);
	document.querySelectorAll('.plus-item')[countList].setAttribute("id","plus-"+countList);
	countList++;
	totalAmount();
}

//button-minus-and-plus-item
var minus = 0;
function minusItem(clicked_id) {
	var minusGetId = '#'+clicked_id;
	var getParentElementId = "#"+document.querySelector(minusGetId).parentElement.id;
	var numberOfProduct = Number(document.querySelector(getParentElementId+" .input-type").value) - 1;
	if( Number(document.querySelector(getParentElementId+" .input-type").value) === 0) {
		numberOfProduct = Number(document.querySelector(getParentElementId+" .input-type").value);
	}
	document.querySelector(getParentElementId+" .input-type").value = numberOfProduct;
	totalAmount();
}
function plusItem(clicked_id) {
	var plusGetId = '#'+clicked_id;
	var getParentElementId = "#"+document.querySelector(plusGetId).parentElement.id;
	var numberOfProduct = Number(document.querySelector(getParentElementId+" .input-type").value) + 1;
	document.querySelector(getParentElementId+" .input-type").value = numberOfProduct;
	totalAmount();
}

//count-total-amount
function totalAmount() {
	var numberOfRow =  document.querySelectorAll('.table-row').length;
	var totalPrice = 0;
	for(var i = 0; i < numberOfRow; i++) {
	   var getNumberPrice = document.querySelectorAll('.item-price span')[i].innerHTML;
	   var getAmount = document.querySelectorAll('.input-type')[i].value;
	   totalPrice += Number(getNumberPrice)*Number(getAmount)
	}
	document.querySelector('.total-amount__top #md3').innerHTML = totalPrice;
	document.querySelector('.total-amount__bottom #md4').innerHTML = totalPrice;
}

var discountCode = 'm1nhdeptrai';
function cofirmDiscount() {
	var discount = Math.floor(Math.random()*10+5);
	var checkInput = document.querySelector(".enter-discount").value;
	if(checkInput === discountCode) {
		alert("You have "+discount+"% discount");
		var useDiscount = Number(document.querySelector('.total-amount__top span').innerHTML) -  Number(document.querySelector('.total-amount__top span').innerHTML)*discount/100;
		document.querySelector('.total-amount__bottom #md4').innerHTML = useDiscount;
	}
}
	
//show bought-list
document.querySelector(".bought-list").addEventListener("click",function showBoughtList() {
	document.querySelector(".bought-list-border").style.display = "flex";
})

//hide-bought-list
function mainStore() {
	document.querySelector(".bought-list-border").style.display = "none";
}