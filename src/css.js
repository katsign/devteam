const css = `body {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    background-color: whitesmoke !important;
  }
  
  p,
  h3 {
    color: white !important;
  }
  
  :root {
    --light: thistle;
    --dark: rgb(146, 110, 146);
    --primary: darkseagreen;
    --secondary: lightsalmon;
  }
  
  .bg-light {
    background-color: var(--light) !important;
  }
  .bg-dark {
    background-color: var(--dark) !important;
  }
  .bg-primary {
    background-color: var(--primary) !important;
  }
  .bg-secondary {
    background-color: var(--secondary) !important;
  }
  
  .navbar-brand {
    color: white !important;
  }
  
  /* Icon Styling */
  .material-icons {
    display: inline-flex;
    vertical-align: top;
  }
  .material-icons.md-32 {
    font-size: 32px;
  }
  .material-icons.md-light {
    color: rgba(255, 255, 255, 1);
  }
  
  .d-flex {
    flex-flow: wrap;
  }
  
  .card {
    min-width: 20rem;
    background-color: transparent;
  }
  
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }
  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: whitesmoke;
  }
  
  /* Role Card Styling */
  #roleM {
    background: rgb(230, 230, 250);
    background: linear-gradient(
      360deg,
      rgba(230, 230, 250, 1) 28%,
      rgba(216, 191, 216, 1) 100%
    );
  }
  #roleE {
    background: rgb(195, 231, 195);
    background: linear-gradient(
      360deg,
      rgba(195, 231, 195, 1) 28%,
      rgba(143, 188, 143, 1) 100%
    );
  }
  #roleI {
    background: rgb(255, 218, 185);
    background: linear-gradient(
      360deg,
      rgba(255, 218, 185, 1) 0%,
      rgba(255, 160, 122, 1) 100%
    );
  }
  
  /* Media Queries */
  @media (max-width: 690px) {
    .d-flex {
      flex-direction: column;
    }
  }
  `;

module.exports = css;