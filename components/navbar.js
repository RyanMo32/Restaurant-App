/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
//import AppContext from "./context";
import AuthContext from "./context";
import { useUserSession } from "./context";
import { LogInForm } from "./auth";


const NavBar = (props) => {
const title = "Big Bear Mountain Eats";
const { user, login} = useContext(AuthContext);
//const { user } = useUserSession();
//const  user  = {displayName: "Guest User"};



  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            )}
          </NavItem>
          {/* <li>
            <span> Welcome {user}</span>
          </li> */}
{/* 
                <li onClick={login} className="btn">Login/Signup
                </li> */}

        </Nav>

      </header>
      <Container>{props.children}</Container>

    </div>
  );
}; 


// export default function Layout() {
//   const { user, login } = useContext(AuthContext)
//   console.log(user)

//   return (
//     <div className="container">
//       <nav>
//         <h1>Gaming Vibes</h1>
//         <ul>
//           <li><Link href="/"><a>Home</a></Link></li>
//           <li><Link href="/"><a>Guides</a></Link></li>
//           <li onClick={login} className="btn">Login/Signup</li>
//         </ul>
//       </nav>
//       <div className="banner">
//       </div>
//     </div>
//   )
// }




export default NavBar;