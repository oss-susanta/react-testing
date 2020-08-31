import React, {useEffect, useReducer} from 'react';
import './15_container.css';

function init() {
  return {
    status: 'INIT',
    data: null,
    error: '',
  };
}
function reducer(state, action) {
  if (action.type === 'LOADING') {
    return {
      ...state,
      status: action.type,
      error: '',
      data: null,
    };
  }
  if (action.type === 'ERROR') {
    return {
      ...state,
      status: action.type,
      error: action.error,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      ...state,
      status: action.type,
      data: action.data,
    };
  }
  return state;
}

export const QUOTES_API = process.env.NODE_ENV === 'test'
  ? 'http://localhost/quotes/random'
  : 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

export default function Quote() {
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    const fetchQuotes = async () => {
      dispatch({type: 'LOADING'});
      try {
        const response = await fetch(QUOTES_API);
        const body = await response.json();
        if (response.ok) {
          dispatch({type: 'SUCCESS', data: body.quote});
        } else {
          dispatch({type: 'ERROR', error: body.message});
        }
      } catch(error) {
        dispatch({type: 'ERROR', error: error.message});
      }
    };
    fetchQuotes();
  }, []);

  if (state.status === 'INIT' || state.status === 'LOADING') {
    return (
      <div className="AppLoading">
        Loading ...
      </div>
    );
  }

  if (state.error || !state.data) {
    return (
      <div className="AppError">
        {state.error || 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="AppSuccess">
      <blockquote data-testid="quote">
        {state.data.quoteText}
      </blockquote>
      <cite>{state.data.quoteAuthor}</cite>
    </div>
  );
}