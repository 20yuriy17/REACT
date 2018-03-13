import React, {Component} from 'react';
// import Timer,  from "./Timer";

// import Trener from "./Trener";

class CheckList extends Component {
    constructor(props){
        super(props);
        this.state={
            time: {
                sec: 0,
                min: 0,
            },

            lessons: [{name: "Упражнение 1", visible: true},
                      {name: "Упражнение 2", visible: true},
                      {name: "Упражнение 3", visible: true},
                      {name: "Упражнение 4", visible: true},
                      {name: "Упражнение 5", visible: true}]

        }

    }

    timer = () => {
        let newSec={...this.state};
                 newSec.time.sec++;
        this.setState(newSec);
    };

    componentDidMount() {
        // this.interval = setInterval(() => this.timer(), 1000);
    }

    done = (index)=>{

        let newState = Object.assign({}, this.state);
         newState.lessons[index].visible = !newState.lessons[index].visible;
        this.setState(newState);
    };

    finish = () => {
        clearInterval(this.count);
        alert ("Добавлено");

    };






    render (){
        return(
            <div>
                <div className="wrapper">

                    <h3>ТРЕНИРОВКА</h3>

                    {this.state.lessons.map((post,index)=>{

                        return <div className={this.state.lessons[index].visible ? "exercise":"exercise text-line"}>
                            <input onClick={()=>{this.done(index)}} type="checkbox"/>{post.name}</div>
                    })}

                    <p>Тренировка длится</p>

                    <p>{Math.trunc((this.state.time.sec)/60)} :min {(this.state.time.sec)%60} :сек</p>


                    <button onClick={()=> {this.count = setInterval(() => this.timer(), 1000)}}>Start</button>
                    <button onClick={ ()=>{this.finish()}}>Закончить</button>

                    {/*<Timer minutes={this.state.time.sec} seconds={this.state.time.min}/>*/}


                </div>
            </div>



        )
    }
}


export default CheckList;