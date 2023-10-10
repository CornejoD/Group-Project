
//team search NBA
const teamSearchNBA = {
	async: true,
	crossDomain: true,
	url: 'https://api-nba-v1.p.rapidapi.com/teams?search=Boston',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '352f473677msh15fcdcfb9fa9a96p13d723jsn7de1e008d65e',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

$.ajax(teamSearchNBA).done(function (response) {
	console.log(response);
});

// live games NBA
const liveGameNBA = {
	async: true,
	crossDomain: true,
	url: 'https://api-nba-v1.p.rapidapi.com/games?live=all',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '352f473677msh15fcdcfb9fa9a96p13d723jsn7de1e008d65e',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

$.ajax(liveGameNBA).done(function (response) {
	console.log(response);
});