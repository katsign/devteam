function genManager(manager) {
    return `<div class="card m-1">
    <div class="card-header bg-light">
      <h3 class="card-title">${manager.name}</h3>
      <p>Team ${manager.getRole()}<i class="material-icons md-light md-32 float-right">contact_mail</i></p>
    </div>
    <div class="card-body" id="roleM">
      <ul class="list-group">
        <li class="list-group-item"><strong>ID: </strong>${manager.id}</li>
        <li class="list-group-item">
          <strong>Email:</strong>
          <a href="${manager.getEmail()}" target="blank"
            >${manager.email}</a
          >
        </li>
        <li class="list-group-item"><strong>Office No. </strong>${manager.officeNumber}</li>
      </ul>
    </div>
  </div>`;
}

function genEngineer(engineer) {
    return `<div class="card m-1">
    <div class="card-header bg-primary">
      <h3 class="card-title">${engineer.name}</h3>
      <p>Team ${engineer.getRole()}<i class="material-icons md-light md-32 float-right">account_circle</i></p>
    </div>
    <div class="card-body" id="roleE">
      <ul class="list-group">
        <li class="list-group-item"><strong>ID: </strong>${engineer.id}</li>
        <li class="list-group-item">
          <strong>Email: </strong>
          <a href="${engineer.getEmail()}" target="blank"
            >${engineer.email}</a
          >
        </li>
        <li class="list-group-item"><strong>GitHub: </strong><a href="${engineer.getGithub()}" target="_blank">${engineer.githubUsername}</a></li>
      </ul>
    </div>
  </div>`;
}

function genIntern(intern) {
    return `<div class="card m-1">
    <div class="card-header bg-secondary">
      <h3 class="card-title">${intern.name}</h3>
      <p>Team ${intern.getRole()}<i class="material-icons md-light md-32 float-right">school</i></p>
    </div>
    <div class="card-body" id="roleI">
      <ul class="list-group">
        <li class="list-group-item"><strong>ID: </strong>${intern.id}</li>
        <li class="list-group-item">
          <strong>Email: </strong>
          <a href="${intern.getEmail()}" target="blank"
            >${intern.email}</a
          >
        </li>
        <li class="list-group-item"><strong>School: </strong>${intern.school}</li>
      </ul>
    </div>
  </div>`;
}

module.exports = {
    mHTML: genManager,
    eHTML: genEngineer,
    iHTML: genIntern
}