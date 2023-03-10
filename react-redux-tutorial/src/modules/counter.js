import { createAction, handleActions } from "redux-actions";

//액션타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션생성함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction을 이용한 액션생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// counter 모듈 초기 상태
const initialState = {
    number: 0,
};

// reducer 함수
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }

// handleActions를 이용한 리듀서 함수
// 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수
// 두 번째 파라미터에는 초기 상태
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

export default counter;
