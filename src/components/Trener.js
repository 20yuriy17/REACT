import React, {Component} from 'react';
import TrenerList from './TrenerList';

class Trener extends Component{
    constructor(props){
        super(props);
        this.state={
            visible: false,
            name:["Крутой","Добрый","Злой","Дешевый"],
            cln: "Li_list-none",
            choice: "",
        }
    }

    // show = () => {
    //     this.setState({visible: !this.state.visible})
    // };

    addTrener = (e) => {
        console.log(this.state.choice);
        alert (`Вы выбрали тренера ${this.state.choice}`);
    };





    applyTrainer = (e) => {
        this.setState({
            choice: e.target.innerText
        });
        console.log(e.target);
    };



    showList = () =>{
        if (this.state.cln === "Li_list-none") {
            this.setState({cln: "Li_list"})
        }else {this.setState({cln: "Li_list-none"})}



    };


    render(){
        return(
            <div>
            <div className="wrapper">
                <h3>ВЫБОР ТРЕНЕРА</h3>

                <input onClick={this.showList} placeholder="Выбор тренера"  />

                {this.state.name.map((name, index) => {
                    return(<TrenerList cln={this.state.cln} applyTrainer={this.applyTrainer} name={name} />)
                })}

                <div><button onClick={this.addTrener}>Добавить</button></div>


            </div>
            </div>
        )
    }
}

export default Trener;