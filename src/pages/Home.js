import React, { Fragment, useContext } from "react";
import { Search } from "../components/Search";
import { Card } from "../components/Card";
import { GithubContext } from "../context/github/githubContext";
import NotFoundImg from "../img/github-logo2.png";

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      <Search />

      {loading && <p className="text-center">Loading...</p>}

      {users.length ? (
        <>
          <p>Found {users.length} users</p>
          <br />
          <div className="row">
            {users.map((user) => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="column">
          <p>No users found</p>
          <img
            src={NotFoundImg}
            alt="No users found"
            style={{ width: "100px" }}
          />
        </div>
      )}
    </Fragment>
  );
};
