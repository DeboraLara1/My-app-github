'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} alt="" />
    <h1>
      {/* usando interpolação para ter acesso ao login do usuario */}
      <a href="{`https://github.com/${userinfo.login}`}">
        {' '}
        {userinfo.username}
      </a>
    </h1>
    <ul className="repos-info">
      <li>Repositório: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.follwers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
);
UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    follwers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
  }),
};
export default UserInfo;
