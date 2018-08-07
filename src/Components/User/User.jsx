import React, { Component } from 'react';

import assignedClass from './User.css';
import SearchForm from '../SearchForm/SearchForm';

export default class User extends Component {
  render() {
    return (
      <div>
        <SearchForm>
          {({currentSearchValue, user, fetchUser, onChangeHandle}) => (
            <div>
              <form 
                onSubmit={fetchUser}
                className={assignedClass.User__Form}
              >
                <input 
                  className={assignedClass.User__Form_Input}
                  value={currentSearchValue}
                  onChange={onChangeHandle}
                  placeholder="e.g pomegranitedesign"
                />
              </form>

              <hr />

              <div>
                {currentSearchValue ? (
                  <div>
                    {user ? (
                      <div className={assignedClass.User}>
                        <img 
                          className={assignedClass.User__ProfileImage}
                          src={user.avatar_url}
                          alt="User Image"
                        />
                        <h1 className={assignedClass.User__Name}>{user.name}</h1>
                        <h2 className={assignedClass.User__Detail}>Username: <strong>{user.login}</strong></h2>
                        <h3 className={assignedClass.User__Detail}>Followers: <strong>{user.followers}</strong></h3>
                        <h3 className={assignedClass.User__Detail}>Following: <strong>{user.following}</strong></h3>
                        <h3 className={assignedClass.User__Detail}>Location: <strong>{user.location ? user.location : "Not Specified."}</strong></h3>
                        <h3 className={assignedClass.User__Detail}>Total Repositories: <strong>{user.public_repos}</strong></h3>
                        <a 
                          href={user.html_url} 
                          target="__blank"
                          className={assignedClass.User__Link}
                        >
                          See Full Profile On Github 
                        </a>
                      </div>
                    ) : (
                      <h1 style={{textAlign: "center", fontWeight: 900, color: "#00d2d3"}}>Press Enter To Find A User</h1>
                    )}
                  </div>
                ) : (
                  <h1 style={{textAlign: "center", fontWeight: 900, color: "#ee5253"}}>Please Start Searching...</h1>
                )}
              </div>
            </div>
          )}
        </SearchForm>        
      </div>
    );
  }
}
