const idBody = document.getElementById('body');
const divRoot = document.getElementById('root');
var rootWidth = divRoot.clientWidth;
var rootHeight = divRoot.clientHeight;

var fontSize;

const resize = {
  resizeRoot() {
    console.log('resizeRoot');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var proportion = windowHeight / windowWidth;
    if (proportion > 0.5652) {
      divRoot.style.width = (windowWidth / 100) * 90 + 'px';
      divRoot.style.height = divRoot.clientWidth * 0.5625 + 'px';
      rootWidth = divRoot.clientWidth;
      rootHeight = divRoot.clientHeight;
      widthPad = (rootWidth / 100) * 10;
      widthPadRight = (widthPad / 100) * 50;
      heightPad = (rootHeight / 100) * 10;
      fontSize = (divRoot.clientWidth / 100) * 3;
    } else {
      divRoot.style.height = (windowHeight / 100) * 90 + 'px';
      divRoot.style.width = divRoot.clientHeight / 0.5625 + 'px';
      rootWidth = divRoot.clientWidth;
      rootHeight = divRoot.clientHeight;
      widthPad = (rootWidth / 100) * 10;
      widthPadRight = (widthPad / 100) * 50;
      heightPad = (rootHeight / 100) * 10;
      fontSize = (divRoot.clientWidth / 100) * 3;
    }
  }
}

const resizeRoot = resize.resizeRoot;

resizeRoot();



window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  resizeRoot();
});

window.addEventListener('resize', () => {
  console.log('resize');
  resizeRoot();
});


//-----------------------------------------------------------------------

var widthPad = (rootWidth / 100) * 9;
var widthPadRight = (widthPad / 100) * 40;
var heightPad = (rootHeight / 100) * 8;
var heightPadTop = (rootHeight / 100) * 10;
var width = rootWidth - widthPad - widthPadRight;
var height = rootHeight - heightPad - heightPadTop;



//-----------------------------------------------------------------------
var jsonUrl = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

//-----------------------------------------------------------------------

var xScale = d3
  .scaleLinear()
  .range([0, width]);
//.range([widthPad, rootWidth - widthPadRight]);
//.range([0, rootWidth - widthPadRight]);
var yScale = d3
  .scaleTime()
  //.scaleLinear()
  //.range([heightPadTop, rootHeight - heightPad]);
  //.range([rootHeight - heightPad, heightPad]);
  .range([0, height]);

var color = d3.scaleOrdinal(d3.schemeCategory10);

var timeFormat = d3.timeFormat('%M:%S');

var xAxis = d3
  .axisBottom(xScale)
  .tickFormat(d3.format('d'));

var yAxis = d3
  .axisLeft(yScale)
  .tickFormat(timeFormat);

var tooltip = d3
  .select('.container')
  .append('div')
  .attr('id', 'tooltip')
  .attr('class', 'tooltip')
  .style('width', '20%')
  .style('height', '40%')
  .style('left', '40%')
  .style('top', '30%')
  //.style('text-anchor', 'end')
  //.style('dominant-baseline', 'end')
  .style('opacity', 0);

var svg = d3
  .select('.container')
  .append('svg')
  .attr('id', 'svg')
  .attr('class', 'svg')
  .attr('viewBox', [0, 0, rootWidth, rootHeight])
  //.attr('width', rootWidth)
  //.attr('width', width + widthPad + widthPadRight)
  //.attr('height', rootHeight)
  .append('g')
  .attr('transform', `translate(${widthPad},${heightPadTop})`)
//.style('font-size', `${fontSize / 1.7}px`);
//.attr('transform', `translate(0,0)`);
//.style('border', '3px solid yellow');
//  .style('border', '3px solid yellow');

svg
  .append('text')
  .attr('id', 'title')
  .attr('class', 'title')
  .attr('x', '40%')
  .attr('y', '-7%')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  //.style('font-size', '15px')
  .style('font-size', `${fontSize}px`)
  .text('Doping in Professional Bicycle Racing');

svg
  .append('text')
  .attr('x', '40%')
  .attr('y', '-1%')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  //.style('font-size', '15px')
  .style('font-size', `${fontSize / 1.2}px`)
  .text("35 Fastest times up Alpe d'Huez");
  

  


d3.json(jsonUrl)
  .then(data => {
    data.forEach(function (d) {
      //console.log(`${d.Place} Place.`);
      var parsedTime = d.Time.split(':');
      d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
    });
    xScale.domain([
      d3.min(data, function (d) {
        return d.Year - 1;
      }),
      d3.max(data, function (d) {
        return d.Year + 1;
      })
    ]);
    yScale.domain(
      d3.extent(data, d => {
        return d.Time;
      })
    );

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('id', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      //.style('font-size', '8px')
      .style('font-size', `${fontSize / 1.7}px`)
      .call(xAxis);
    /* .append('text')
    .attr('class', 'x-axis-label')
    .attr('x', width)
    .attr('y', -6)
    .style('text-anchor', 'end')
    .text('Year'); */

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('id', 'y-axis')
      //.style('font-size', '8px')
      .style('font-size', `${fontSize / 1.7}px`)
      .call(yAxis);
    /* .append('text')
    .attr('class', 'label')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Best Time (minutes)'); */

    svg
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', '1%')
      .attr('cx', function (d) {
        return xScale(d.Year);
      })
      .attr('cy', function (d) {
        return yScale(d.Time)
      })
      .attr('data-xvalue', function (d) {
        return d.Year;
      })
      .attr('data-yvalue', function (d) {
        return d.Time.toISOString();
      })
      .style('fill', function(d) {
        return color(d.Doping !== '');
      })
      .on('mouseover', function(event, d) {
          tooltip.style('opacity', 0.9);
          tooltip.attr('data-year', d.Year);
          tooltip
            .html(
              d.Name +
              ': ' +
              d.Nationality +
              '<br/>' +
              'Year: ' +
              d.Year +
              ', Time: ' +
              timeFormat(d.Time) +
              (d.Doping ? '<br/><br/>' + d.Doping : '')
            )
            .style('left', event.pageX + 'px')
            .style('top', event.pageY - 28 + 'px');
        })
        .on('mouseout', function() {
          tooltip.style('opacity', 0);
        });
      
    var legendCont = svg
      .append('g')
      .attr('id', 'legend');
    
    var legend = legendCont
      .selectAll('#legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend-label')
        .attr('transform', function(d, i) {
          return 'translate(0,' + (height / 2 - i * 20) + ')';
        });
        
    legend
      .append('rect')
      .attr('x', width)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', color);
      
    legend
      .append('text')
      .attr('x', width - 5)
      .attr('y', 9)
     // .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .style('font-size', `${fontSize / 1.2}px`)
      .text(function(d) {
        if (d) {
          return 'Riders with doping allegations';
        } else {
          return 'No doping allegations';
          }
      });


    
    
    
  })
