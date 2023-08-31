import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { OAuth2Strategy } from "remix-auth-oauth2"; //todo use oauth strategy

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session

type User = string;

export let authenticator = new Authenticator<User>(sessionStorage);

const authOptions = {
    authorizationURL: `${process.env.AUTH_URL}/authorize`,
    tokenURL: `${process.env.AUTH_URL}/token`,
    clientID: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    callbackURL: process.env.AUTH_CALLBACK_URL!,
    useBasicAuthenticationHeader: false, // defaults to false
};

const authStrategy = new OAuth2Strategy(
    authOptions,
    async ({accessToken, refreshToken, extraParams, profile, context, request, }) => {
        // here you can use the params above to get the user and return it
        // what you do inside this and how you find the user is up to you

        // console.log("Verified by FusionAuth!")
        // console.log("");
        // console.dir(profile);
        // console.log("");
        // console.dir(accessToken);
        // console.log("");
        // console.dir(extraParams);
        // console.log("");
        // console.dir(context);
        // console.log("");
        // console.dir(request);
        // console.log("");
        // console.log("");

        return extraParams.userId;

        // return await getUser(
        //   accessToken,
        //   refreshToken,
        //   extraParams,
        //   profile,
        //   context,
        //   request
        // );
    }
);

authenticator.use(
    authStrategy,
    "FusionAuth" // this is optional, but if you setup more than one OAuth2 instance you will need to set a custom name to each one
);
