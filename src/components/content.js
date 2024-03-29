import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* Job subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>What do I{" "}
                    <span className="word">do</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Devsmine</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Co-Founder
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Aug 2020 - Present
                        </h4>
                      </div>

                      <div className="card-text">
                      Devsmine is a SaaS helping companies upgrade their support team. Integration of roadmaps, knowledge boards and etc. made easy. Make your customers see you work for them and make them part of your business!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subsection">
                  {" "}
                  <h2 className="mt-5">
                    <span className="dot"></span>With what do I{" "}
                    <span className="word">work</span>?
                  </h2>
                  <div className="row">
                    {/* First column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Languages</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              C / C++
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                  icon={faTerminal}
                                  className="mr-2 item-icon"
                              />{" "}
                              Java / Android
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              PHP
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Python
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Workflows</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Agile
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Frameworks</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Node / React
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Laravel / Symfony / CodeIgniter 
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              CMS Based : Wordpress / Joomla
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Technologies</h3>
                          </div>

                          <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Web Development
                            </div>
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Artificial Intelligence
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Mobile Development
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What did I{" "}
                    <span className="word">study</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>IBAIS University</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Computer Science and Engineering
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                           2018
                        </h4>
                      </div>

                      <div className="card-text">
                        I earned my Bachelor's Degree in Computer Science in IBAIS University.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      />
    )
  }
}

// export default function Content() {
//   return (

//   )
// }
