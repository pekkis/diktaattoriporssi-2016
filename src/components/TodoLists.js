import React from 'react';
import TodoList from './TodoList';
import { Range } from 'immutable';

const TodoLists = props => {

    const { onToggle, onRemove, onMove, todos } = props;

    return (
        <table className="todos">
            <tbody>
                <tr>
                {Range(0, 3).map(category =>
                    <TodoList
                        key={category}
                        category={category}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onMove={onMove}
                        todos={todos.sortBy(todo => todo.text).sortBy(todo => todo.done)}
                    />
                )}
                </tr>
            </tbody>
        </table>
    );

};

export default TodoLists;
