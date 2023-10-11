//https://teachablemachine.withgoogle.com/models/Qa05GnCA2/

function startClassification(){
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Qa05GnCA2/model.json',modelReady );
}

function modelReady(){
    console.log("modelo cargado :)");
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results[0].label);
        console.log((results[0].confidence*100).toFixed(2)+"%");

        rand_r =Math.floor(Math.random() * 255) + 1;
        rand_g =Math.floor(Math.random() * 100) + 1;
        rand_b =Math.floor(Math.random() * 150) + 1;

        document.getElementById("result_label").innerHTML = "Escucho: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Presición: " + (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb("+ rand_r +","+ rand_g +","+ rand_b +")"
        document.getElementById("result_confidence").style.color = "rgb("+ rand_r +","+ rand_g +","+ rand_b +")"

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if(results[0].label == "Ruido de fondo"){
            document.getElementById("result_nombre").innerHTML = "Nombre: Haerin"; 
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if(results[0].label == "awita"){
            document.getElementById("result_nombre").innerHTML = "Nombre: awa";
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if(results[0].label == "maullidos"){
            document.getElementById("result_nombre").innerHTML = "Nombre: Lisa";
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        } else if(results[0].label == "aplausos"){
            document.getElementById("result_nombre").innerHTML = "Nombre: nay" 
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }

        

    } 
}
