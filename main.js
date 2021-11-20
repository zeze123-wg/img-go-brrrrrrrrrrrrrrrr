      camera = document.getElementById("webbie");
      Webcam.attach("#webbie");

      Webcam.set({
          width: 360,
          height: 360,
          image_format: 'png',
          png_quality: 90
      });

      function snap() {
          Webcam.snap(function (imgjeep) {
              document.getElementById("slacker").innerHTML = "<img id ='carmera'src = '" + imgjeep + "'>";
          });
      }

      classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LwDqJdgci/model.json', modelLoaded);
      console.log("ml5 version is the same as james charles", ml5.version);

      function modelLoaded() {
          console.log("your code will never work surenn.......");
      }

      function compare() {

          img = document.getElementById("carmera");
          classifier.classify(img, get_results);

      }

      function get_results(error, results) {

          if(error) {
              console.log("again your code will never work", error);
          }

          else {
              console.log("your code worked",results);
              document.getElementById("objectname").innerHTML = results[0].label;
              document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(4);

      }}