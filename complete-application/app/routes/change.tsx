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

    const [dollarAmt, setDollarAmt] = useState('0.00');
    const [change, setChange] = useState<Record<string, string> | null>(null);

    function getChange() {
        const dollarAmtValue: number = parseFloat(dollarAmt);
        const nickels: number = Math.floor(dollarAmtValue / 0.05);
        const pennies: number = Math.ceil((dollarAmtValue - (0.05 * nickels)) / 0.01);
        const calculatedChange: Record<string, string> = {
            total: dollarAmtValue.toFixed(2),
            nickels: nickels.toLocaleString(),
            pennies: pennies.toLocaleString()
        };
        setChange(calculatedChange);
    }

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

            <div style={{flex: '1'}}>
                <div className="column-container">
                    <div className="app-container change-container">
                        <h3>We Make Change</h3>

                        // {% if change.error %}
                        <div className="error-message"> Please enter a dollar amount </div>

                        // {% else %}
                        <div className="change-message">
                           {' We can make change for ${{ change.total }} with {{ change.nickels }} nickels and {{ change.pennies }} pennies! '}
                        </div>
                        // {% endif %}

                        <div className="h-row">
                            <div className="change-label">Amount in USD: $</div>
                            <input className="change-input" name="amount" value="0.00" />
                            <button className="change-submit" onClick={getChange} value="Make Change" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}