import React, { useContext, useEffect, Fragment } from "react";
import { GithubContext } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  console.log("blog " + blog);
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
        Back to home page
      </Link>

      <div className="card mb-4 fs-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: "200px" }}
                className="rounded"
              />
              <h1>{name}</h1>
              {location && (
                <p className="fs-1">
                  <b>Location: </b>
                  {location}
                </p>
              )}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h4>About User</h4>
                  <p>{bio}</p>
                </Fragment>
              )}

              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong>{" "}
                    <a href={blog} target="_blank" rel="noopener noreferrer">
                      {blog}
                    </a>
                  </li>
                )}
              </ul>

              <div className="badge badge-primary mr-2 p-2">
                Followers: {followers}
              </div>
              <div className="badge badge-success mr-2 p-2">
                Following: {following}
              </div>

              <div className="badge badge-info mr-2 p-2">
                Repositories: {public_repos}
              </div>
              <div className="badge badge-dark mr-2 p-2">
                Gists: {public_gists}
              </div>
              <div>
                {" "}
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark mt-3"
                >
                  Open Profile on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-2 text-center">Repositories of {name}</h2>
      <Repos repos={repos} />
    </Fragment>
  );
};
