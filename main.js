Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    webcam.attach('#camera');
    
    function take_snapshot()
    {
        webcam.snap(function(data_uri) {
            document.getElementById("result").innerhtml = <img id ="captured_img" src='" +data_uri+'></img>
        });
    }
    
    console.log('ml5 version', mls.version);
    
    classifier = ml5.imageclassifier()

    function modelloaded() {
        console.log('Model Loaded');
    }

    function check()
    {
        img = document.getElementById('capture_image');
        classifier.classify(img, gotResult);
    }
    
    function gotresult(error, results){
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].label;   
            document,getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
           }
    }