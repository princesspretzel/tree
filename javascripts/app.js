$(function(){

  var treeData = manhattan_trees.data
  var treeDataLength = treeData.length

  var projection = d3.select("#main_container")
                      .selectAll('h2') //this is what we will change to a circle
                      .data([treeDataLength])

  projection.enter()
            .append('div')
            .style('width', function(d){return (d/100) + 'px' })
            .style('height', function(d){ return (d/100) + 'px' })
            .style({
                'background-color': "tomato",
                'border-radius': "100%"
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