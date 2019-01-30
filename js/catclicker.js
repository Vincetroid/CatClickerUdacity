var aparecer = true; //Al principio true para que aparezca el submenu
var aparecerAdmin = true;

var model = {
	//cat: [0,0,0,0,0]

	currentCat: null,
    cats: [
        {
            clickCount : 1,
            name : 'Tutankamon',
            imgSrc : 'img/cat0.jpg',
        },
        {
            clickCount : 2,
            name : 'Anubis',
            imgSrc : 'img/cat1.jpg',
        },
        {
            clickCount : 3,
            name : 'Jahi',
            imgSrc : 'img/cat2.jpg',
        },
        {
            clickCount : 4,
            name : 'Khalid',
            imgSrc : 'img/cat3.jpg',
        },
        {
            clickCount : 5,
            name : 'Sadiki',
            imgSrc : 'img/cat4.jpg',
        }
    ]
};

var octopus = {

	//GETS
	getLikesFromCat: function(catNum){
		return model.cats[catNum].clickCount;
	},

	getCatName: function(catNum){
		return model.cats[catNum].name;
	},

	getImgScrCat: function(catNum){
		return model.cats[catNum].imgSrc;
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	//SETS 
	addLike: function(catNum) {
		model.cats[catNum].clickCount++;
	},

	setCurrentCat: function(catNum){
		model.currentCat = catNum;
	},

	setCatName: function(catNum, catName){
		// console.log(catName);
		// console.log(typeof catNum);
		model.cats[catNum].name = catName;
	},
	
	//INIT
	init: function() {
		view.init();
	}
}

var view = {
	addingLike: function(catNum) {

		// console.log(model.currentCat);
		// console.log(catNum);

		//animating
		view.animatingAddLike(catNum);

		//adding like
		octopus.addLike(catNum);

		//display new like
		document.getElementById("like").innerHTML = octopus.getLikesFromCat(catNum);
	},

	animatingAddLike: function(catNum) {
		document.getElementById("like").setAttribute("class", "animated flipInX");
		window.setTimeout( function(){ document.getElementById("like").setAttribute("class", ""); }  ,  250 );
	},

	changeCat: function(nom, catNum) {

		//set current cat
		octopus.setCurrentCat(catNum);

	    console.log(octopus.getCurrentCat(0));


		//clean
		document.getElementById("nombreGato").innerHTML = "";

		//create paragraph tag
		var para = document.createElement("P");

		//assign text to variable t
	    var t = document.createTextNode(nom);

	    //put text inside p tag
	    para.appendChild(t);

	    //append p with text, inside td id=nombreGato 
	    document.getElementById("nombreGato").appendChild(para);

	    //inyect new content inside td imgGato
	    document.getElementById("imgGato").innerHTML = "<img src='" + octopus.getImgScrCat(catNum) + "' id='cat' onclick='view.addingLike(" + catNum + ")'>";
	    
	    //inyect new content inside td numLikes
	    document.getElementById("numLikes").innerHTML = "<h2 id='like'>" + octopus.getLikesFromCat(catNum) + "</h2>";		
	},

	renderMenu: function() {

		if(aparecer == true){
			// Tiene sentido que tal vez tenga que pasar los nombres y las imagenes a Model
			document.getElementById("listaGatos").innerHTML = '<h3>Gatos</h3><ul><li><a onclick="view.changeCat(octopus.getCatName(0), 0)" id="bas">Tutankamon</a></li><li><a onclick="view.changeCat(octopus.getCatName(1), 1)" id="anu">Anubis</a></li><li><a onclick="view.changeCat(octopus.getCatName(2), 2)" id="jah">Jahi</a></li><li><a onclick="view.changeCat(octopus.getCatName(3), 3)" id="kha">Khalid</a></li><li><a onclick="view.changeCat(octopus.getCatName(4), 4)" id="sad">Sadiki</a></li></ul>';
			document.getElementById("listaGatos").style.position = "fixed";
			document.getElementById("listaGatos").style.fontFamily = "Roboto Slab";
			document.getElementById("listaGatos").style.color = "white";
			document.getElementById("listaGatos").style.width = "150px";
			document.getElementById("listaGatos").style.height = "100%";
			document.getElementById("listaGatos").style.right = "0%";
			document.getElementById("listaGatos").style.border = "1px solid #7d7d7d";
			document.getElementById("listaGatos").style.background = "#DBDBDB";
			document.getElementById("bas").style.color = "yellow";
			document.getElementById("anu").style.color = "yellow";
			document.getElementById("jah").style.color = "yellow";
			document.getElementById("kha").style.color = "yellow";
			document.getElementById("sad").style.color = "yellow";
			document.getElementById("listaGatos").style.padding = "15px";
			document.getElementById("listaGatos").style.display = "block";
			document.getElementById("listaGatos").style.boxShadow = "0px 0px 4px black";
			document.getElementById("listaGatos").setAttribute("class", "animated fadeInRight");
			aparecer = false; //Una vez mostrado se cambia a false para que al darle click se oculte
		} else {
			document.getElementById("listaGatos").setAttribute("class", "animated fadeOutRight");
			aparecer = true; //Una vez ocultado se cambia a true para que al dar click aparezca de nuevo
		}
	},

	renderAdmin: function(){
		if(aparecerAdmin == true) {
						//debugger;
			
			document.getElementById("box-admin").innerHTML = '<table><tr class="letter-admin"><td><p>Name</p>'
			+ '</td><td><input type="text" id="catName"></td></tr><tr class="letter-admin"><td><p>Img URL</p></td>'
			+ '<td><input type="text" id="imgSrc"></td></tr><tr class="letter-admin"><td><p># Clicks</p></td><td>'
			+ '<input type="text" id="numClicks"></td></tr><tr><td colspan="2">'
			+ '<center><input type="button" value="Save" onclick="view.updateCat()">'
			+ '<!--<input type="button" value="Cancel" style="margin-left: 10px;">--></center></td></tr></table>';
			document.getElementById("box-admin").setAttribute("class", "animated fadeInLeft");
			aparecerAdmin = false;

		} else {
			document.getElementById("box-admin").setAttribute("class", "animated fadeOutLeft");
			aparecerAdmin = true;
		}
	},

	// renderCatContent: function(catNum){
	// 	return octopus.getLikesFromCat(catNum);

	// },

	updateCat: function(){
		//alert(document.getElementById("catName").value);
		// alert(octopus.getCurrentCat());
		var catName = document.getElementById("catName").value;
		var url = document.getElementById("imgSrc").value;
		var numClicks = document.getElementById("numClicks").value;
		
		octopus.setCatName(octopus.getCurrentCat(), catName);

		view.changeCat(catName, octopus.getCurrentCat());
		
		// YA CAMBIA EL NOMBRE AL DARLE A SAVE 
		// TE QUEDASTE EN LO DE CAMBIAR LA IMAGEN DEL GATO CON UNA URL DIRECTA A UNA IMAGEN
	},

	init: function() {
		//onloading page show first cat's like
	    document.getElementById("like").innerHTML = octopus.getLikesFromCat(0);

	    //setting current cat
	    octopus.setCurrentCat(0);
	    console.log(octopus.getCurrentCat());
	}
};

octopus.init();