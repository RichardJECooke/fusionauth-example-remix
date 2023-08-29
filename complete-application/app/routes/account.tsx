export default function Account() {
    return (
        <div id="page-container">
            <div id="page-header">
                {/* <div id="logo-header">
                    <img src="https://fusionauth.io/assets/img/samplethemes/changebank/changebank.svg" />
                    <div className="h-row">
                        <p className="header-email">email</p>
                        <form id="logoutForm" className="button-lg"  action="{% url 'oidc_logout' %}" method="post">
                        // {% csrf_token %}
                        <a className="button-lg" href="#" onlick="document.getElementById('logoutForm').submit();">Logout</a>
                        </form>
                    </div>
                </div> */}

                <div id="menu-bar" className="menu-bar">
                    <a className="menu-link inactive" href="/app/change">Make Change</a>
                    <a className="menu-link" href="/app/account">Account</a>
                </div>
            </div>
{/*
            <div style={{flex: '1'}}>
                <div className="column-container">
                    <div className="app-container">
                        <h3>Your balance</h3>
                        <div className="balance">$0.00</div>
                    </div>
                </div>
            </div> */}
        </div>
  );
}
