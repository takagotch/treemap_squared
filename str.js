Treemap.draw(element, width, height, data, labels, styles);

styles['background']
styles['box']
styles['label']
styles['draw']

//script type="text/js" src="rapheal-min.js"
//script type="text/js" src="treemap-squared-0.5.min.js"
$(document).ready(function(){
  data = [60000, 60000, 40000, 30000, 20000, 10000];
  labels = ["Paris", "London", "New Yorks", "Moscow", "Berlin", "Tokyo"];
  Treemap.draw("ex-1", 400, 300, data, labels);
});

//
$(document).ready(function(){
  data = [[60000, 60000, 40000], [30000, 20000, 10000]],
  labels = [["Paris", "London", "New York"], ["Moscow", "Berlin", "Tokyo"]];
  Treemap.draw("", 400, 300, data, labels);
});

//
$(document).ready(function(){
  var data = [60000, 60000, 40000, 30000, 20000, 10000];
  var label = ["Paris", "London", "New York", "Moscow", "Berlin", "Tokyo"]
  Treemap.draw("ex-3", 600, 450, data, labels,
    {'label' : {'fill' : 'black'}},
    'box' : {'fill' : 'white', 'stroke' : 'black', 'stroke-width' : '3px'}})
});

//
$(document).ready(function(){
  var data = [[60000, 60000, 40000], [30000, 20000, 10000]];
  var labels = [["Paris", "London", "new York"], ["Moscow", "Berlin", "Tokyo"]];

  Treemap.draw("", 600, 450, data, labels,
    {'background' : {'fill': 'url("marble.jpg")'},
      'box': {'fill-opacity' : "0.7"}});
});

//
$(document).ready(function(){
  var data = [[60000, 60000, 40000], [3000, 20000, 10000]];
  var labels = [["Paris", "London", "New York"], ["Moscow", "Berlin", "Tokyo"]];
  var boxFormatter = function(coordinates, index){
    var datapoint,i, color;
    datapoint = data;
    for(i=0; i<index.length; i++){
      datapoint = datapoint[index[o]];
    }
    var saturation = ((datapoint / 60000)*0.6) + 0.4;
    var brightness = ((datapoint / 60000)*0.3) + 0.2;
    color = "hsb(0.2," + saturation + "," + broghtness + ")";
    return{ "fil" : color };
  };
  Treemap.draw("ex-5", 600, 200, data, labels, {'box': boxFormatter});
});




