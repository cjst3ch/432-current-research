// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(CategoryOfGame);
google.charts.setOnLoadCallback(Age);
google.charts.setOnLoadCallback(Audience);
google.charts.setOnLoadCallback(Purpose);
google.charts.setOnLoadCallback(Multiplayer);
google.charts.setOnLoadCallback(Platform);
google.charts.setOnLoadCallback(Gore);
google.charts.setOnLoadCallback(Style);
google.charts.setOnLoadCallback(InputDevice);
google.charts.setOnLoadCallback(NumberInputs);
google.charts.setOnLoadCallback(CustomizableControls);
google.charts.setOnLoadCallback(CustomizableGUI);
google.charts.setOnLoadCallback(GUIElements);
google.charts.setOnLoadCallback(Symbols);
google.charts.setOnLoadCallback(Feedback);
google.charts.setOnLoadCallback(Interactive);
google.charts.setOnLoadCallback(Haptic);
google.charts.setOnLoadCallback(Reminder);
google.charts.setOnLoadCallback(Narration);
google.charts.setOnLoadCallback(Personal);

// add js to body element of HTML
document.getElementsByClassName('no-js')[0].className = 'js';

// Draw the chart and set the chart values
function CategoryOfGame() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Number of Games'],
        ['Puzzle', 11],
        ['Shooter', 1],
        ['Adventure', 3],
        ['Racing', 3]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Category of the Game (Overlap)', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('CategoryOfGame'));
    chart.draw(data, options);
}

function Age() {
    var data = google.visualization.arrayToDataTable([
        ['Age', 'Number of games'],
        ['Child', 11],
        ['Adult', 2],
        ['Elder', 4]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Target Age', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Age'));
    chart.draw(data, options);
}

function Audience() {
    var data = google.visualization.arrayToDataTable([
        ['Disability', 'Number of Games'],
        ['Schizophrenia', 1],
        ['Autism', 9],
        ['ADHD', 2],
        ['MCI/Dementia/Alzheimer', 4],
        ['PTSD', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Target Audience', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Audience'));
    chart.draw(data, options);
}

function Purpose() {
    var data = google.visualization.arrayToDataTable([
        ['Purpose', 'Number of Games'],
        ['Health', 7],
        ['Education', 1],
        ['Training', 9]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Game Purposes', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Purpose'));
    chart.draw(data, options);
}

function Multiplayer() {
    var data = google.visualization.arrayToDataTable([
        ['Multiplayer', 'Number of Games'],
        ['No', 13],
        ['Coop', 4],
        ['Comp', 0]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Multiplayer', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Multiplayer'));
    chart.draw(data, options);
}

function Platform() {
    var data = google.visualization.arrayToDataTable([
        ['Platform', 'Number of Games'],
        ['Mobile', 6],
        ['PC', 8],
        ['AR', 1],
        ['VR', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Platforms', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Platform'));
    chart.draw(data, options);
}

function Gore() {
    var data = google.visualization.arrayToDataTable([
        ['Gore/Blood', 'Number of Games'],
        ['No', 17],
        ['Yes', 0]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Gore/Blood', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Gore'));
    chart.draw(data, options);
}

function Style() {
    var data = google.visualization.arrayToDataTable([
        ['Style', 'Number of Games'],
        ['Cartoon', 11],
        ['Realistic', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Style (Overlap)', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Style'));
    chart.draw(data, options);
}

function InputDevice() {
    var data = google.visualization.arrayToDataTable([
        ['Input Device Type', 'Number of Games'],
        ['Touchscreen', 7],
        ['Mouse', 3],
        ['Mouse & Keyboard', 2],
        ['Blocks', 2],
        ['EEG Cap', 1],
        ['VR Headset', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Input Device Type', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('InputDevice'));
    chart.draw(data, options);
}

function NumberInputs() {
    var data = google.visualization.arrayToDataTable([
        ['Number of Inputs', 'Number of Games'],
        ['One', 12],
        ['Two', 5]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Number of Inputs', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('NumberInputs'));
    chart.draw(data, options);
}

function CustomizableControls() {
    var data = google.visualization.arrayToDataTable([
        ['Customizable Controls', 'Number of Games'],
        ['No', 14],
        ['Yes', 1],
        ['Not Tested', 1],
        ['Not Applicable', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Customizable Controls', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('CustomizableControls'));
    chart.draw(data, options);
}

function CustomizableGUI() {
    var data = google.visualization.arrayToDataTable([
        ['Customizable GUI', 'Number of Games'],
        ['No', 14],
        ['Yes', 2],
        ['Not Tested', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Customizable GUI', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('CustomizableGUI'));
    chart.draw(data, options);
}

function GUIElements() {
    var data = google.visualization.arrayToDataTable([
        ['Number of GUI Elements', 'Number of Games'],
        ['>3', 7],
        ['3 to 5', 5],
        ['6 to 9', 2],
        ['10+', 3]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Number of GUI Elements', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('GUIElements'));
    chart.draw(data, options);
}

function Symbols() {
    var data = google.visualization.arrayToDataTable([
        ['Use of Symbols', 'Number of Games'],
        ['No', 4],
        ['Yes', 13]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Use of Symbols', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Symbols'));
    chart.draw(data, options);
}

function Feedback() {
    var data = google.visualization.arrayToDataTable([
        ['Customizable Feedback', 'Number of Games'],
        ['No', 11],
        ['Yes', 1],
        ['Not Tested', 5]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Customizable Feedback', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Feedback'));
    chart.draw(data, options);
}

function Interactive() {
    var data = google.visualization.arrayToDataTable([
        ['Highlighting of Interactive Elements', 'Number of Games'],
        ['No', 10],
        ['Yes', 5],
        ['Not Tested', 1],
        ['Not Applicable', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Highlighting of Interactive Elements', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Interactive'));
    chart.draw(data, options);
}

function Haptic() {
    var data = google.visualization.arrayToDataTable([
        ['Use of Haptic', 'Number of Games'],
        ['No', 6],
        ['Yes', 4],
        ['Not Tested', 7]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Use of Haptic', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Haptic'));
    chart.draw(data, options);
}

function Reminder() {
    var data = google.visualization.arrayToDataTable([
        ['Use of Task Reminders', 'Number of Games'],
        ['No', 5],
        ['Yes', 8],
        ['Not Tested', 4]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Use of Task Reminders', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Reminder'));
    chart.draw(data, options);
}

function Narration() {
    var data = google.visualization.arrayToDataTable([
        ['Use of Narrative', 'Number of Games'],
        ['Linear', 1],
        ['Not Tested', 3],
        ['Not Applicable', 13]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Narration', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Narration'));
    chart.draw(data, options);
}

function Personal() {
    var data = google.visualization.arrayToDataTable([
        ['Personalization', 'Number of Games'],
        ['No', 15],
        ['Yes', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Personalization Procedure', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Personal'));
    chart.draw(data, options);
}