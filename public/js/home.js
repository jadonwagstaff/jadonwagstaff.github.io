

// constants and variables
const BG_PROP = 1.332303, BUFFER = 6;
const NAV = ['ABOUT', 'RESEARCH', 'DESIGN'];

var body = document.getElementsByTagName('body')[0];
var container = d3.select('#container');


// initialize text
var title = container.append('text')
	.text('Jadon Wagstaff')
	.style('cursor', 'default');

var nav = container.append('g');
nav = nav.selectAll('a')
		.data(NAV)
		.enter()
		.append('a')
		.attr('xlink:href', function(d,i) {
			if( i == 0 ) { return 'about.html'; }
			else if( i == 1 ) { return 'research.html'; }
			else if( i == 2 ) { return 'design.html'; }
		});
nav = nav.append('text')
	.attr('class', 'nav')
	.text(function(d) {
		return d;
	})

// initialize sizes
var y = window.innerHeight;
var x = window.innerWidth;
if( x/y > BG_PROP ) {
	body.style.backgroundSize = ''+ x +'px '+ x/BG_PROP +'px';
	body.style.backgroundPosition = '50% '+ -1 * ((x/BG_PROP) - y)/2 +'px';
}
else {
	body.style.backgroundSize = ''+ y*BG_PROP +'px '+ y +'px';
	body.style.backgroundPosition = '50% 0%';
}

container.attr('width', x)
	.attr('height', (y - 5));

title.attr('x', x/2)
	.attr('y', 3*(y/16))
	.style('font-size', 18 +'pt');

var navSize = Math.min(x/26, 14);
var navX = x/4;
var navY = 11*(y/16);
nav.attr('x', navX)
	.attr('y', function(d,i) {
		return (navY + i*(navSize + BUFFER))
	})
	.style('font-size', 12 +'pt')
	.on('mouseover', function(d,i) {
		d3.select(this)
			.transition()
			.duration(100)
			.style('fill', 'brown')
	})
	.on('mouseout', function() {
		d3.select(this)
			.transition()
			.duration(200)
			.style('fill', 'white')
	});

// update sizes
window.onresize = function(event) {
	y = window.innerHeight;
	x = window.innerWidth;
	if( x/y > BG_PROP ) {
		body.style.backgroundSize = ''+ x +'px '+ x/BG_PROP +'px';
		body.style.backgroundPosition = '50% '+ -1*((x/BG_PROP ) - y)/2 +'px';
	}
	else {
		body.style.backgroundSize = ''+ y*BG_PROP +'px '+ y +'px';
		body.style.backgroundPosition = '50% 0%';
	}

	container.attr('width', x)
		.attr('height', (y - 5));

	title.attr('x', x/2)
		.attr('y', 3*(y/16))
		.style('font-size', 18 +'pt');

	navSize = Math.min(x/26, 16);
	navX = x/4;
	navY = 11*(y/16);
	nav.attr('x', navX)
		.attr('y', function(d,i) {
			return (navY + i*(navSize + BUFFER-2))
		})
		.style('font-size', 12 +'pt');
}
