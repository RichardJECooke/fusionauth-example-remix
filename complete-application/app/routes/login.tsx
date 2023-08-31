import type { LoaderFunction } from "@remix-run/node"
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  console.log('on login handler');
  return await authenticator.authenticate("FusionAuth", request, {
    successRedirect: "/account", // if the user is already authenticated redirect to /dashboard directly
    failureRedirect: "/",
  });
};
