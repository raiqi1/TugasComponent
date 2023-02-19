import React from 'react';

// Komponen sederhana untuk menampilkan daftar to-do
class TodoList extends React.Component {
  render() {
    // Dapatkan data to-do dari prop
    const todos = this.props.todos;

    // Map data to-do ke elemen li
    const todoListItems = todos.map(todo => (
      <li key={todo.id}>
        {todo.title}
      </li>
    ));

    // Tampilkan elemen ul dengan daftar to-do
    return (
      <ul>
        {todoListItems}
      </ul>
    );
  }
}

// Komponen untuk menambah to-do baru
class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    // Update state ketika pengguna mengetik
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    // Kirim data to-do ke prop parent melalui callback
    this.props.onSubmit({ title: this.state.title });
    // Reset form
    this.setState({ title: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
          placeholder="Tambah to-do baru"
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

// Komponen utama untuk mengatur daftar to-do
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(newTodo) {
    // Tambahkan to-do baru ke state
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        { ...newTodo, id: Date.now() }
      ]
    }));
  }

  render() {
    return (
      <div>
        <h1>Daftar To-do</h1>
        <TodoList todos={this.state.todos} />
        <AddTodoForm onSubmit={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
