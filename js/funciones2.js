const cuadritos = document.querySelectorAll(".galeria a");
const fullScreen = document.querySelector(".modal");
const imgFullScreen = document.querySelector(".modal img");
const flechas = document.querySelectorAll("button");

let numImgActual = 0;
let rutasImg = [];

//ABRIR

const navegacionImagenes = direccion => {
	if(direccion == 0){
		numImgActual = numImgActual > 0 ? numImgActual - 1 : cuadritos.length-1;
	}else{
		numImgActual = numImgActual < cuadritos.length - 1 ? numImgActual + 1 : 0;
	}
	imgFullScreen.setAttribute("src",rutasImg[numImgActual]);
}


cuadritos.forEach((fotito,indice) =>{
	rutasImg.push(fotito.getAttribute("href"));
	fotito.addEventListener("click",evento =>{
		evento.preventDefault();
		numImgActual = indice;
		imgFullScreen.setAttribute("src",rutasImg[numImgActual]);
		fullScreen.classList.add("visible");
	});
});
console.log(rutasImg);
//CERRAR

fullScreen.addEventListener("click",() => fullScreen.classList.remove("visible"));

//NAVEGAR
flechas.forEach((flecha,indice) =>{
	flecha.addEventListener("click",evento =>{
		evento.stopPropagation();
		navegacionImagenes(indice);
	});
});

window.addEventListener("keyup", evento =>{
	switch(evento.keyCode){
	case 27:
		fullScreen.classList.remove("visible")
	break;
	case 37:
		navegacionImagenes(0);
	break;
	case 39:
		navegacionImagenes(1);
	break;
	}
});