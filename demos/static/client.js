let node;
let link;
let width;
let height;
let simulation;
let svg;
let circle;
let image;
let text;

const linkDistance = 50;
const chargeForceStrength = -250;
const distanceMax = 100;
const imageSize = 30;
const radius = 7;

// TODO prevent loops from collapsing
// TODO make graph horizontal with root at left

function displayDesigns(editors, designs) {
  editors.designsEditor.setValue(designs);
}

function displayDiagram(stateGraph) {
  let links = [];
  let nodes = [];

  for (let node in stateGraph) {
    nodes.push({id: node, dataType: stateGraph[node].dataType, text: stateGraph[node].text})
  }

  // Get edges from stateGraph
  for (let node in stateGraph) {
    for (let edge of stateGraph[node].edges) {
      links.push({source: node, target: edge});
    }
  }

  updateSvgSize();
  svg = d3.select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  simulation = d3.forceSimulation()
    .nodes(nodes)
    .force('charge', d3.forceManyBody()
      .strength(chargeForceStrength)
      .distanceMax(distanceMax)
    )
    .force('link', d3.forceLink(links).id(function(d) { return d.id }).distance(linkDistance))
    .force('collide', d3.forceCollide( function(d){return d.r + 8 }).iterations(16))
    .force('centre', d3.forceCenter(width / 2, height / 2))
    .on('tick', tick);

  svg.append('svg:defs').append('svg:marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 10) // Move away from line's end
    .attr('markerWidth', 10)
    .attr('markerHeight', 10)
    .attr('orient', 'auto')
    .append('svg:path')
    .style('fill', '#585858')
    .attr('d', 'M0, -3L3, 0L0,3'); // Define shape

  link = svg.selectAll('line.link')
    .data(links)
    .enter().append('path')
    .attr('class', 'link')
    .style('stroke', '#585858')
    .attr('marker-end', 'url(#arrow)') //attach the arrow from defs
    .style( 'stroke-width', 2 );

  node = svg.selectAll('.node')
    .data(nodes)
    .enter()
    .append('g')
    .attr('class', 'node');

  text = node.append('text')
    .text( function(d) {
      if (d.dataType === 'root') {
        return 'Root';
      } else if (d.dataType === 'o') {
        return 'Epsilon'
      } else if (d.dataType === 'accept') {
        return 'Accept';
      }
      return d.text[0];
    })
    .attr('opacity', 0)
    .attr('dx', '20px')
    .attr('dy', '4px');

  circle = node.filter(function (d) { return d.dataType !== 'atom'; })
    .append('circle')
    .attr('fill', function(d) {
      if (d.text === 'root') {
        return '#ff0008';
      } else if (d.text === 'accept') {
        return '#00ff00';
      } else if (d.text === 'o') {
        return '#ffff00';
      }
    })
    .attr('title', function(d) {return d.dataType})
    .attr('r', radius);

  image = node.filter(function(d) { return d.dataType === 'atom'; })
    .append('g')
    .attr('transform', 'translate(-15 , -30)')
    .append('svg:image')
    .attr('xlink:href', function(d) {
      switch (d.text[0]) {
        case 'promoter':
        case 'terminator':
        case 'CDS':
        case 'restriction_enzyme_assembly_scar':
        case 'restriction_enzyme_recognition_site':
        case 'protein_stability_element':
        case 'blunt_end_restriction_enzyme_cleavage_site':
        case 'ribonuclease_site':
        case 'restriction_enzyme_five_prime_single_strand_overhang':
        case 'ribosome_entry_site':
        case 'five_prime_sticky_end_restriction_enzyme_cleavage_site':
        case 'RNA_stability_element':
        case 'ribozyme':
        case 'insulator':
        case 'signature':
        case 'operator':
        case 'origin_of_replication':
        case 'restriction_enzyme_three_prime_single_strand_overhang':
        case 'primer_binding_site':
        case 'three_prime_sticky_end_restriction_enzyme_cleavage_site':
        case 'protease_site':
          return './sbol/' + d.text + '.svg';
        default:
          return './sbol/' + 'user_defined.svg';
      }
    })
    .attr('width', imageSize);

  svg.call(d3.drag()
    .subject(dragSubject)
    .on('start', dragStarted)
    .on('drag', dragged)
    .on('end', dragEnded));

  node.on('mouseover', function() {
    d3.select(this)
      .select('text')
      .attr('opacity', 1);
  })
    .on('mouseout', function() {
      d3.select(this)
        .select('text')
        .attr('opacity', 0);
    });
}

function tick() {
  updateSvgSize();
  svg.attr('height', height)
    .attr('width', width);
  simulation.force('centre', d3.forceCenter(width / 2, height / 2));

  circle.attr('transform', function(d) {
    d.x = Math.max(radius, Math.min(width - radius, d.x));
    d.y = Math.max(radius, Math.min(height - radius, d.y));
    return 'translate(' + d.x + ',' + d.y + ')'
  });

  image.attr('transform', function(d) {
    d.x = Math.max(20, Math.min(width - 20, d.x));
    d.y = Math.max(25, Math.min(height - 10, d.y));
    return 'translate(' + d.x + ',' + d.y + ')'
  });

  text.attr('transform', function(d) {
    d.x = Math.max(radius, Math.min(width - radius, d.x));
    d.y = Math.max(radius, Math.min(height - radius, d.y));
    return 'translate(' + d.x + ',' + d.y + ')'
  });

  link.attr( 'd', function(d) {return 'M' + d.source.x + ',' + d.source.y + ', ' + d.target.x + ',' + d.target.y});
}

function dragSubject() {
  return simulation.find(d3.event.x, d3.event.y);
}

function dragStarted() {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragEnded() {
  if (!d3.event.active) simulation.alphaTarget(0.01);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}

function resetDiagram() {
  d3.selectAll('svg').remove();
}

function updateSvgSize() {
  let g = document.getElementById('graph');
  width = g.clientWidth;
  height = g.clientHeight;
}
