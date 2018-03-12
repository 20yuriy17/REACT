import React, {Component} from 'react';

class Trener extends Component{
    constructor(props){
        super(props);
        this.state={
            visible: false
        }
    }

    show = () => {
        this.setState({visible: !this.state.visible})
    };

    addTrener = () => {
        alert ("Добавлено");
    };

    render(){
        return(
            <div>
            <div className="wrapper">
                <h3>ВЫБОР ТРЕНЕРА</h3>
                <div>
                <input onClick={this.show} placeholder="Выбор тренера"  />
                {this.state.visible
                &&
                <ul className="TrenerList">
                        <li className="Li_list">Крутой</li>
                        <li className="Li_list">Добрый</li>
                        <li className="Li_list">Злой</li>
                        <li className="Li_list">Дешевый</li>
                </ul>
                }
                </div>
                <button onClick={this.addTrener}>Добавить</button>


            </div>
            </div>
        )
    }
}

export default Trener;