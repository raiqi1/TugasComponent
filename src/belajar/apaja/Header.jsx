import React from "react";

// membuat komponen dengan classr

class Header extends React.Component {
    constructor() {
      super();
      // membuat objek state
      this.state = {
        title: "Belajar Reactjs",
        subTitle: "Panduan  Reactjs untuk pemula"
      };
    }
  
    changeTitle = () => {
      this.setState({
        title: "Tugas Komponen"
      });
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <h2>{this.state.subTitle}</h2>
          <button onClick={this.changeTitle}>Ubah Judul</button>
        </div>
      );
    }
  }
  
  // render komponen ke RealDOM
//   ReactDOM.render(<Header />, document.getElementById("root"));
  
  export default Header