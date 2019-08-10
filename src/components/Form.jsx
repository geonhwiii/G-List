import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ onText, onChange, onSubmit, onAllCheck }) => {
  return (
    <>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <input className="form-button" type="button" onClick={onAllCheck}></input>
        <input className="form-input" placeholder="input your todo..." value={onText} onChange={e => onChange(e)} />
        <input className="form-submit" type="submit" />
      </form>
    </>
  );
};

Form.propTypes = {
  onText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onAllCheck: PropTypes.func.isRequired
};

export default Form;
