const default_state = {
    sum: 1
};
// Reducer函数（1）
const math = (state = default_state, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                sum: state.sum + action.payload
            };
        }
        case 'DEDUCE': {
            return {
                sum: state.sum - action.payload
            };
        }
        case 'MULTI': {
            return {
                sum: state.sum * action.payload
            };
        }
        default: {
            return state;
        }
    }
};
// 测试结果
const test_state = math({ sum: 1 }, {
    type: 'ADD',
    payload: 2
});
// Reducer函数（2）
const my_reducer_2 = (state = 0, action) => {
    switch (action.type) {
        case 'ADD': {
            return state + (action.payload) * 10;
        }
        case 'DEDUCE': {
            return state - (action.payload) * 10;
        }
        case 'MULTI': {
            return state * (action.payload) * 10;
        }
        default: {
            return state;
        }
    }
};
// Reducer函数（3）
const my_reducer_3 = (state = 100, action) => {
    switch (action.type) {
        case 'ADD': {
            return state + (action.payload) * 100;
        }
        case 'DEDUCE': {
            return state - (action.payload) * 100;
        }
        case 'MULTI': {
            return state * (action.payload) * 100;
        }
        default: {
            return state;
        }
    }
};
/**
 * 之后，用解构语法糖，进行解开
 * 用...my_reducer_list，可以拆成  key : value 的形式。
 */
exports.math = math;
exports.my_reducer_2 = my_reducer_2;
exports.my_reducer_3 = my_reducer_3;
