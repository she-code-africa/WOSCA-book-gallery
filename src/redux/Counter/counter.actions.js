//This file is like a template for actual data that you would like to store in this application

// It should be eventually deleted

import { INCREMENT, DECREMENT } from './counter.types'; 

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};