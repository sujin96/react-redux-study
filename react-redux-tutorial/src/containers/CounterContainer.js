import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state) => ({
    number: state.counter.number,
});

//액션생성함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수, dispatch 역할
const mapDispatchToProps = { increase, decrease };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
