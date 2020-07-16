import React from 'react'
import {connect} from 'react-redux';

import { increaseCounter, decreaseCounter} from "../redux/Counter/counter.actions"

// The counter and the counter buttons is just to check that 
// The redux setup is working this can be deleted.
function Gallery(props) {
    return (
        <div className="gallery">
            <span role="img" aria-label="books-emoji">📚📚</span>
                BOOKS GALLERY 
            <span role="img" aria-label="books-emoji">📚📚</span>
            <div>Count: {props.count}</div>

            <button onClick={() => props.increaseCounter()}>Increase Count</button>

            <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      count: state.counter.count,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      increaseCounter: () => dispatch(increaseCounter()),
  
      decreaseCounter: () => dispatch(decreaseCounter()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);



