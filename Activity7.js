var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };


window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function addScore(){
	const name=$("name").value

	if (name=='') {
		alert('fill in the name field')
	}


	const score=$("score").value

	if (score<0 || score>100) {
		alert('Please enter a grade between 0 and 100')
	}

	names[names.length]=name;
	scores[scores.length]=parseInt(score);

$("name").value='';
$("score").value=0;

}

function displayScores(){

$('scores_table').style.display='block'

var text=``;

for (var i = names.length - 1; i >= 0; i--) {
	text+=`<tr>
					<td>${names[i]}</td>
					<td>${scores[i]}</td>
				</tr>`;
}

$('scores_table').getElementsByTagName('tbody')[0].innerHTML=text

}

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average+= scores[i]
	}

	average=(average/scores.length).toFixed(2)
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> "
}


