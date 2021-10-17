//creating cards in a function I call when I write file.
const generateTeam = teamData => {
    //map has to use the array not the class/constructor
    const manager = teamData.managerArr.map(function(work) {
        let managerMarkup = ` 
        <div class="card text-white bg-secondary mb-3 col-4" style="width: 250px;">
        <h2>${work.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${work.id}</p>
        <p>Office Number: ${work.officeNum}</p>
        <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
    </div>
        `
        return managerMarkup;
    });
    const engineer = teamData.engineerArr.map(function(work) {
        let engineerMarkup = ` 
        <div class="card text-white bg-secondary mb-3 col-4" style="width: 250px;">
        <h2>${work.name}</h2>
        <h4>Engineer<h4>
        <p>ID: ${work.id}</p>
        <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
        <p> Github: <a href="https://github.com/${work.github}" target="_blank">${work.github}</a></p> 
    </div>
        `
        return engineerMarkup;
    });
    const intern = teamData.internArr.map(function(work){
        let internMarkup = ` 
        <div class="card text-white bg-secondary mb-3 col-4" style="width: 250px;">
        <h2>${work.name}</h2>
        <h4>Intern</h4>
        <p>ID: ${work.id}</p>
        <p>Email: <a href="mailto:${work.email}">${work.email}</a></p>
        <p> School: ${work.school}</p>
    </div>
        `
        return internMarkup;
    })

return [manager, engineer, intern];

}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital@0;1&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron text-center jumbotron-fluid text-white bg-secondary">
            <h1>Team Profile Generator</h1>
    </div>
    </div class = "container">
    <h1 class="text-center team">Your team</h1>
    <div class="row justify-content-center">
    ${generateTeam(templateData)}
    </body>
    </html>
     
    `;
}