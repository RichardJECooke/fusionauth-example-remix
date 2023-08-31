import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({request}) => {
    const email = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    });
    return email;
}

export default function Change() {
    const email: string = useLoaderData<typeof loader>();
    return (
        <div id="page-container">
            <div id="page-header">
                <div id="logo-header">
                    <img src="https://fusionauth.io/assets/img/samplethemes/changebank/changebank.svg" />
                    <div className="h-row">
                        <p className="header-email">{email}</p>
                        <Link to="/logout" className="button-lg">Logout</Link>
                    </div>
                </div>

                <div id="menu-bar" className="menu-bar">
                    <Link to="/change" className="menu-link inactive" >Make Change</Link>
                    <Link to="/account" className="menu-link inactive" >Account</Link>
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