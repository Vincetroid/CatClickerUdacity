var aparecer = true; //Al principio true para que aparezca el submenu

var model = {
	cat: [0,0,0,0,0]
};

var octopus = {
	addLike: function(catNum) {
		model.cat[catNum]++;
	},

	getLikesFromCat: function(catNum){
		return model.cat[catNum];
	},
	
	init: function() {
		view.init();
	}
}

var view = {
	addingLike: function(catNum) {
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
	    document.getElementById("imgGato").innerHTML = "<img src='img/cat" + catNum + ".jpg' id='cat' onclick='view.addingLike(" + catNum + ")'>";
	    
	    //inyect new content inside td numLikes
	    document.getElementById("numLikes").innerHTML = "<h2 id='like'>" + octopus.getLikesFromCat(catNum) + "</h2>";		
	},

	renderMenu: function() {

		if(aparecer == true){
			document.getElementById("listaGatos").innerHTML = '<h3>Gatos</h3><ul><li><a onclick="view.changeCat(\'Tutankamon\', 0)" id="bas">Tutankamon</a></li><li><a onclick="view.changeCat(\'Anubis\', 1)" id="anu">Anubis</a></li><li><a onclick="view.changeCat(\'Jahi\', 2)" id="jah">Jahi</a></li><li><a onclick="view.changeCat(\'Khalid\', 3)" id="kha">Khalid</a></li><li><a onclick="view.changeCat(\'Sadiki\', 4)" id="sad">Sadiki</a></li></ul>';
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

	init: function() {
		// alert("hola");
	}
};

octopus.init();