import type { LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { sessionStorage } from "~/services/session.server";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({request}) => {
  console.log('on callback handler');
  await authenticator.authenticate("FusionAuth", request, {
    successRedirect: "/account",
    failureRedirect: "/",
  });
}