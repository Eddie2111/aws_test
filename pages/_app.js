import {Amplify} from "aws-amplify";
import awsmobile from "../src/aws-exports";
import {AmplifyAuthenticator, AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure({...awsmobile,ssr:true});

function MyApp({ Component, pageProps }) {
  return (
    <>
    <head>
      <title> Welcome to Eventizer</title>
    </head>
  <Component {...pageProps} />
  </>
  );
}

export default withAuthenticator(MyApp)
