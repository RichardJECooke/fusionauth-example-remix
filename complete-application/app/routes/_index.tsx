export default function Index() {
  return (
    <div id="page-container">
      <div id="page-header">
        <div id="logo-header">
          <img src="https://fusionauth.io/assets/img/samplethemes/changebank/changebank.svg" />
          <a className="button-lg" href="{% url 'oidc_authentication_init' %}">Login</a>
        </div>

        <div id="menu-bar" className="menu-bar">
          <a className="menu-link">About</a>
          <a className="menu-link">Services</a>
          <a className="menu-link">Products</a>
          <a className="menu-link" style={{textDecorationLine: 'underline'}}>Home</a>
        </div>
      </div>

      <div style={{flex: '1'}}>
        <div className="column-container">
          <div className="content-container">
            <div style={{marginBottom: '100px'}}>
              <h1>Welcome to Changebank</h1>
              <p>To get started, <a href="{% url 'oidc_authentication_init' %}">log in or create a new account</a>.</p>
            </div>
          </div>
          <div style={{flex: '0'}}>
            <img src="/money.jpg" style={{maxWidth: '800px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
