import React from 'react';

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Tugas Komponen React ",
            subTitle: "Semangat!"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        );
    }
}

export default Title;