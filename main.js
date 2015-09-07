'use strict';	
$('#content').hide();
let json = api.boa.run('revision-watcher.boa');
$('#loading').hide();
$('#content').show();
console.log(json.revisionStats);
//let container = document.getElementById('output');
//container.innerHTML = json.AddedNullCheck["[]"][0];
for (let rev in json.revisionStats) {
	//console.log(dev);
	$('#revToShow').append(`<option value="${rev}"> ${rev} </option>`);
	/*for (let cdate in json.devActivityStats[dev]) {
		console.log(cdate);
		for (let nfiles in json.devActivityStats[dev][cdate]) {
			console.log(nfiles);
			console.log(json.devActivityStats[dev][cdate][nfiles][0])
		}
	}*/
}

let e = document.getElementById("revToShow");
let selectedRev = e.options[e.selectedIndex].value;
document.getElementById('commit-date').innerHTML = selectedRev;

for (let dev in json.revisionStats[selectedRev]) {
    document.getElementById('author').innerHTML = dev;
	for (let nfiles in json.revisionStats[selectedRev][dev]) {
		document.getElementById('files').innerHTML = nfiles;
		document.getElementById('message').innerHTML = json.revisionStats[selectedRev][dev][nfiles][0];
	}
}

$('#revToShow').change(function() {
	let rev = $('#revToShow').val();
	document.getElementById('commit-date').innerHTML = rev;
    for (let dev in json.revisionStats[rev]) {
	    document.getElementById('author').innerHTML = dev;
		for (let nfiles in json.revisionStats[rev][dev]) {
			document.getElementById('files').innerHTML = nfiles;
			document.getElementById('message').innerHTML = json.revisionStats[rev][dev][nfiles][0];
		}
	}
});

