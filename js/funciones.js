const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;
let rutasImg = [];

// Abrir la modal
enlaces.forEach((enlace,indice) =>{
	rutasImg.push(enlace.getAttribute("href"));
	enlace.addEventListener("click",evento =>{  // solo se usa para eventos con enlaces fuera de la pagina y para formularios.
		evento.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",rutasImg[imgActual]); // REPASA ESTO !!!
		modal.classList.add("visible");
		});
});

//Cerrar la modal

modal.addEventListener("click",() =>{
	modal.classList.remove("visible");  // THIS es el elemento al que le paso el evento.
});

//Navegacion de fotos en la modal
	
flechas.forEach((flecha,direccion) =>{
	flecha.addEventListener("click", evento =>{
		evento.stopPropagation();
			if(direccion == 0){
				imgActual = imgActual > 0 ? imgActual - 1  : rutasImg.length -1;
			}else{
				imgActual = imgActual < rutasImg.length -1 ? imgActual + 1 : 0;
			} // ESTO ES UN ANILLO, un buble infinito segun los clicks.
			imgModal.setAttribute("src",rutasImg[imgActual]);
		});
});

	