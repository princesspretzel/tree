$(function(){

  ///TREE DATA///

  var manhattanTreeData = manhattan_trees.data
  var manhattanTreeDataLength = manhattanTreeData.length

  var brooklynTreeData = brooklyn_trees.data
  var brooklynTreeDataLength = brooklynTreeData.length

  var queensTreeData = queens_trees.data
  var queensTreeDataLength = queensTreeData.length

  var bronxTreeData = bronx_trees.data
  var bronxTreeDataLength = bronxTreeData.length

  var allLengths = [manhattanTreeDataLength, brooklynTreeDataLength, queensTreeDataLength, bronxTreeDataLength]

  var boroughs = ["Manhattan", "Brooklyn", "The Bronx", "Queens"]
  var borough_ids = ["man", "bk", "bronx", "queens"]

  var projection = d3.select("#tree_container")
                      .selectAll('div')

  _.each(allLengths, function(tree){
      projection.data([tree])
            .append('div')
            .style('width', function(d){return (d/1000) + 'px' })
            .style('height', function(d){ return (d/1000) + 'px' })
            .style({
                'background-color': "tomato",
                'border-radius': "100%",
                'opacity': "0.5",
                'margin': "0 auto"
            })
  })

  ///WIFI DATA///

  var projection = d3.select("#tree_container")
                      .selectAll('div') //this is what we will change to a circle

  var wifiData = wifi.data;
  var manhattanWifi = [];
  var brooklynWifi = [];
  var bronxWifi = [];
  var queensWifi = [];
  _.each(wifiData, function(element, index){
    switch (wifiData[index][11]) {
      case "New York":
        manhattanWifi.push(wifiData[index]);
        console.log("new york works");
        break;
      case "Brooklyn":
        brooklynWifi.push(wifiData[index]);
        console.log("brooklyn works");
        break;
      case "Bronx":
        bronxWifi.push(wifiData[index]);
        console.log("bronx works");
        break;
      case "Queens":
        queensWifi.push(wifiData[index]);
        console.log("queens works");
        break;
    }   
  })
})




  // var treeData = manhattan_trees.data
  // var treeDataLength = treeData.length

  // // _.each(manhattan_trees, function(tree))

  // var projection = d3.select("#addresses")
  //                     .selectAll('li')
  //                     .data(treeData)

  // projection.enter().append('li').text(function(d){
  //   return d[12]
  // })


// 11
  // var newDiv = projection.append("div").data(manhattan_trees)

  // newDiv.text(function(treeData){treeData.length}).style({'color': 'black'})
  //  'width': "400px",
  //  'height': "400px",
  //  'background-color': "tomato"
  //});

  //  'width': function(d){ return d.length },
  //  'height': function(d){ return d.length },

  // var width = "100%",
  //    height = "100%";

  // var svg = d3.select("body").append("svg")
  //     .attr("width", width)
  //     .attr("height", height);

  // d3.json("", function(error, map) {
  //      svg.append("path")
  //      .datum(topojson.feature(map, map))
  //      .attr("d", d3.geo.path().projection(d3.geo.mercator()));
  //  })