'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="shearch">
    <input
      type="shearch"
      placeholder="Digite o nome do usuário no GitHub"
      // Este metodo onKeyUp serve para a pesquisa seja realizada ao click da tecla ENTER
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
