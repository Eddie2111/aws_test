import {Amplify} from "aws-amplify";
import awsmobile from "../src/aws-exports";
import {AmplifyAuthenticator, AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";
import '../styles/globals.css'

Amplify.configure({...awsmobile,ssr:true});

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  );
}

export default withAuthenticator(MyApp)
