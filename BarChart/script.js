const idBody = document.getElementById('body');
const divRoot = document.getElementById('root');
var rootWidth = divRoot.clientWidth;
var rootHeight = divRoot.clientHeight;

var fontSize = (divRoot.clientWidth / 100) * 4;







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
    } else {
      divRoot.style.height = (windowHeight / 100) * 90 + 'px';
      divRoot.style.width = divRoot.clientHeight / 0.5625 + 'px';
      rootWidth = divRoot.clientWidth;
      rootHeight = divRoot.clientHeight;
      widthPad = (rootWidth / 100) * 10;
      widthPadRight = (widthPad / 100) * 50;
      heightPad = (rootHeight / 100) * 10;
    }
    fontSize = (divRoot.clientWidth / 100) * 4;
    idBody.style.setProperty('--fontSize', fontSize + 'px');
  }
}

const resizeRoot = resize.resizeRoot;

resizeRoot();



window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  //resizeRoot();
});

window.addEventListener('resize', () => {
  console.log('resize');
  resizeRoot();
});

//-----------------------------------------------------------------------

var widthPad = (rootWidth / 100) * 10;
var widthPadRight = (widthPad / 100) * 50;
var heightPad = (rootHeight / 100) * 10;



//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const jsonUrl = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';


//-----------------------------------------------------------------------
const year = [];
const value = [];


fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.data.length; i++) {
      //for (let i = 0; i < 40; i++) {
      year.push(data.data[i][0].slice(0, 4));
      value.push(data.data[i][1]);
    }
    var dados = data.data;
    var barWidth = (rootWidth - (widthPad * 2)) / (value.length / 2);

    xScale.domain(d3.extent(year));

    yScale.domain([0, d3.max(value)]);
    svg.select('#x-axis')
      .call(xAxis)
      .style('font-size', fontSize / 2);
    svg.select('#y-axis')
      .call(yAxis)
      .style('font-size', fontSize / 2);
      

    const rect = svg.selectAll('rect')
      .data(dados)
      .enter()
      .append('rect')
      .attr('data-date', (d, i) => {
        return dados[i][0];
      })
      .attr('data-gdp', (d, i) => {
        return dados[i][1];
      })
      .attr('class', 'bar')
      .attr('x', (d) => {
        //return widthPad;
        return xScale(d[0].slice(0, 4))
      })
      .attr('y', (d) => {
        return yScale(d[1]);
      })
      .attr('height', (d) => {
        return rootHeight - yScale(d[1]) - heightPad;
      })
      //.attr('fill', '#4385F5')
      .attr('width', barWidth);
      
    rect.on('mousemove', function (d) {
      d3.select(this)
      .attr('fill', '#4385F5');
      tooltip
          .transition()
          .duration(500)
          .style('opacity', 1)
          .style('width', `${rootWidth / 3}px`)
          .style('background-color', '#4385F5');
          //.attr('y', '50px')
         // .attr('x', '50px');
        tooltip.attr('data-date', d[0]);
        tooltip.html(`${d[0]}<br>$${(d[1])} Billion`);
      //tooltip.html(`$${d3.format(',')(d[1])} Billion <br>Teste`);
    })
    rect.on('mouseout', function (d) {
      d3.select(this)
      .attr('fill', '#000');
      tooltip
      .transition()
          .duration(500)
          .style('opacity', 0);
    })
    
  })
  
//-----------------------------------------------------------------------

const svg = d3
  .select('.root')
  .append('svg')
  .attr('id', 'svg')
  .attr('class', 'svg')
  .attr('viewBox', [0, 0, rootWidth, rootHeight]);

svg.append('text')
  .attr('id', 'title')
  .attr('class', 'title')
  .attr('x', '50%')
  .attr('y', '5%')
  .text('Gross Domestic Product')
  .style('text-anchor', 'middle')
  .style('dominant-baseline', 'middle');

const xScale = d3
  .scaleLinear()
  .range([widthPad, rootWidth - widthPadRight]);
const yScale = d3
  .scaleLinear()
  .range([rootHeight - heightPad, heightPad]);

const xAxis = d3
  .axisBottom(xScale)
  .tickFormat(d3.format(''));

const yAxis = d3.axisLeft(yScale);

svg.append('g')
  .attr('id', 'x-axis')
  .attr('class', 'x-axis')
  .attr('transform', `translate(0, ${rootHeight - heightPad})`);

//xAxisG.selectAll('.tick text')
//  .attr('font-size', '7');

svg.append('g')
  .attr('id', 'y-axis')
  .attr('class', 'y-axis')
  .attr('transform', `translate(${widthPad}, 0)`);


const tooltip = d3
  .select('.root')
  .append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);
  
  