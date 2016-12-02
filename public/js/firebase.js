// Initialize Firebase
var config = {
	apiKey: "AIzaSyDS6G67-I_7rSEg9NwR5pvOoZh106v6NQw",
	authDomain: "drinkin-c4a5b.firebaseapp.com",
	databaseURL: "https://drinkin-c4a5b.firebaseio.com",
	storageBucket: "drinkin-c4a5b.appspot.com",
	messagingSenderId: "640367300262"
};
firebase.initializeApp(config);

// Servicios de APIs Firebase
var authService = firebase.auth();
var storageService = firebase.storage();

window.onload = function() {
	// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
	authService.signInAnonymously()
	.catch(function(error) {
		console.error('Detectado error de autenticación', error);
	});
	// asociamos el manejador de eventos sobre el INPUT FILE
	document.getElementById('image_file').addEventListener('change', function(event){
		event.preventDefault();
		var file  = event.target.files[0];
		uploadFile(file);
	});
}

function uploadFile(file) {

	if( file.size > 1000000) {
		var error_msg = '<p>Max. 1MB</p>'
		document.getElementById('progress-div').innerHTML = error_msg
	} else {
		// creo una referencia al lugar donde guardaremos el archivo
		var dishID = document.getElementById('dish-id')
		var restaurantID = document.getElementById('restaurant-id')
		if ( dishID ) {
			var refStorage = storageService.ref('dishes').child(dishID.value);
		} else {
			var refStorage = storageService.ref('logos').child(restaurantID.value)
		}
		// Comienzo la tarea de upload
		var uploadTask = refStorage.put(file);
		// defino un evento para saber qué pasa con ese upload iniciado
		uploadTask.on('state_changed', 
			function(snapshot){
				var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				updateProgress(percentage);
			},
			function(error){
				console.log('Error al subir el archivo', error);
			},
			function(){
				const css_url = "url('"+uploadTask.snapshot.downloadURL+"')"
				document.getElementById('image_url').value = uploadTask.snapshot.downloadURL
				document.getElementById("preview-image").style.backgroundImage = css_url
			}
		);
	}
}

function updateProgress(percentage) {
	var pDiv = document.getElementById('progress-div');
	if(percentage<100){
		var textoMensaje = '<progress value="'+percentage+'" max="100"></progress>';
	} else {
		var textoMensaje = '<p>Upload completed</p>';
	}
	pDiv.innerHTML = textoMensaje;
}


