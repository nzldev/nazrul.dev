import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-scroll"

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footerTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <footer>
              <div className="container py-4">
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item ml-2">
                      <Link
                        to="top"
                        className="link"
                        smooth={true}
                        role="button"
                        aria-label="To the top"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </Link>
                    </li>
                    <a href="https://github.com/nzl-nadeem/nazrul.dev" target="blank" rel="noopener">Source code</a> |
                    <li className="list-inline-item mr-3">
                        &copy; 2020-{new Date().getFullYear()}.{" "}
                      {data.site.siteMetadata.title}.
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="mailto:nazrul.devs@gmaiil.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://github.com/nzldev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://www.linkedin.com/in/nzldev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                     
                  </ul>
                </div>
              </div>
            </footer>
          </>
        )}
      ></StaticQuery>
    )
  }
}

// export default function Footer() {
//   return (
//     <footer>
//       <div className="container">

//         {/* <p>&copy; {new Date().getFullYear()}. Lunvitech. All Rights Reserved.</p>
//         <ul className="list-inline">
//           <li className="list-inline-item">
//             <a href="/#">Privacy</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="/#">Terms</a>
//           </li>
//           <li className="list-inline-item">
//             <a href="/#">FAQ</a>
//           </li>
//         </ul> */}
//       </div>
//     </footer>
//   );
// }
