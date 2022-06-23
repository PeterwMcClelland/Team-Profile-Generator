const generateManager = function (manager) {
    return  `<div class="card-header">
    <h3>${manager.name}</h3>
    <h4>Manager</h4><i class="material-icons">content_paste</i>
</div>
<div class="card-body">
    <p class="id">ID: ${manager.id}</p>
</div>
`;

}

const generateEngineer = function (engineer) {
    return `
    <div class="card-header">
    <h3>${engineer.name}</h3>
    <h4>Engineer</h4><i class="material-icons"></i>
</div>
<div class="card-body">
    <p class="id">ID: ${engineer.id}</p>
</div>
`

}

const generateIntern = function (intern) {
    return `<div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
            </div>
            `
};

generateHTML = (data) => {
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }
    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Team</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Welcome Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="squares">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>
  `;
}

module.exports = generateHTML;


