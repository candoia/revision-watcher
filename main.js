'use strict';	
$('#content').hide();
let json = api.boa.run('revision-watcher.boa');
$('#loading').hide();
$('#content').show();
console.log(json.revisionStats);
//let container = document.getElementById('output');
//container.innerHTML = json.AddedNullCheck["[]"][0];


