$(document).ready(function () {
	
	$.getJSON("planets.json", function (data) {
		var table = document.getElementById("myTable");
		data.SOLAR_SYSTEM.PLANETS.PLANET.forEach(function(planet){
			var row = table.insertRow();
			if (!(planet.hasOwnProperty('SATELLITES'))) {
				planet['SATELLITES'] = {'SATELLITE': []};
			}
			for (const key in planet) {
				if (planet.hasOwnProperty(key)) {
					const element = planet[key];
					if (typeof element['SATELLITE'] === 'object' && element['SATELLITE'] !== null && element['SATELLITE'].hasOwnProperty('NAME')) {
						let old_sate =element['SATELLITE'];
						element['SATELLITE'] = [];
						element['SATELLITE'][0] = old_sate;
					}
					if(key == 'SATELLITES') {
						for (let i = 0; i < 2; i++) {
							let cell = row.insertCell();
							let cell1 = row.insertCell();
							let cell2 = row.insertCell();
							if( element && element['SATELLITE'] && element['SATELLITE'][i]){
								let the_sat =element['SATELLITE'][i];
								cell.innerHTML = the_sat.NAME;
								cell1.innerHTML = the_sat.DISTANCE_FROM_PLANET;
								cell2.innerHTML = the_sat.ORBIT;
							}else{
								cell.innerHTML = 'N/A';
								cell1.innerHTML = 'N/A';
								cell2.innerHTML ='N/A';
							}
                        }
					}
					else {
						let cell = row.insertCell();
						cell.innerHTML = element;
					}
				}
			}
		});
	});
});

