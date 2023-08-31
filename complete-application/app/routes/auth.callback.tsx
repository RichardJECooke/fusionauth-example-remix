import type { LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { sessionStorage } from "~/services/session.server";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({request}) => {
  await authenticator.authenticate("FusionAuth", request, {
    successRedirect: "/account",
    failureRedirect: "/login",
  });
}