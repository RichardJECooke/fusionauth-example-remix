export default function Change() {
    return (
        <div id="page-container">
            <div id="page-header">
                {/* <div id="logo-header">
                    <img src="https://fusionauth.io/assets/img/samplethemes/changebank/changebank.svg" />
                    <div className="h-row">
                        <p className="header-email"> email </p>
                        <form id="logoutForm" className="button-lg"  action="{% url 'oidc_logout' %}" method="post">
                        // {% csrf_token %}
                        <a className="button-lg" href="#" onclick="document.getElementById('logoutForm').submit();">Logout</a>
                        </form>
                    </div>
                </div> */}

                <div id="menu-bar" className="menu-bar">
                    <a className="menu-link" href="url 'change' ">Make Change</a>
                    <a className="menu-link inactive" href=" url 'account' ">Account</a>
                </div>
            </div>

            {/* <div style={{flex: '1'}}>
                <div className="column-container">
                    <div className="app-container change-container">
                        <h3>We Make Change</h3>

                        // {% if change.error %}
                        <div className="error-message"> change.error "</div>
                        // {% else %}
                        <div className="change-message">
                           {' We can make change for ${{ change.total }} with {{ change.nickels }} nickels and {{ change.pennies }} pennies! '}
                        </div>
                        // {% endif %}

                        <form method="post" action="{% url 'change' %}">
                        // {% csrf_token %}
                        <div className="h-row">
                            <div className="change-label">Amount in USD: $</div>
                            <input className="change-input" name="amount" value="0.00" />
                            <input className="change-submit" type="submit" value="Make Change" />
                        </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
}