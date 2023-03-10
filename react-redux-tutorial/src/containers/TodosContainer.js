import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
    return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />;
};

const mapStateToProps = ({ todos }) => ({ input: todos.input, todos: todos.todos });
const mapDispatchToProps = { changeInput, insert, toggle, remove };

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
