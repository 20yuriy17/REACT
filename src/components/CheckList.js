import React, {Component} from 'react';
// import Trener from "./Trener";

class CheckList extends Component {
    constructor(props){
        super(props);
        this.state={


            visible1: true,
            visible2: true,
            visible3: true,
            visible4: true,
            visible5: true,


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



    timer= () => {
        let newSec={...this.state};
                 newSec.time.sec++;
        this.setState(newSec);
    };

    // componentDidMount() {
    //     // this.interval = setInterval(() => this.timer(), 1000);
    // }


    done = (index)=>{

        let newState = Object.assign({}, this.state);
         newState.lessons[index].visible = !newState.lessons[index].visible;
        this.setState(newState);
    };

    done1 = ()=>{
      this.setState ({visible1: !this.state.visible1})
    };

    done2 = ()=>{
        this.setState ({visible2: !this.state.visible2})
    };
    done3 = ()=>{
        this.setState ({visible3: !this.state.visible3})
    };
    done4 = ()=>{
        this.setState ({visible4: !this.state.visible4})
    };
    done5 = ()=>{
        this.setState ({visible5: !this.state.visible5})
    };

    finish = () => {
        alert ("Добавлено");
    };






    render (){
        return(
            <div>
                <div className="wrapper">

                    <h3>ТРЕНИРОВКА</h3>
                    <div className={this.state.visible1 ? "exercise":"exercise text-line"}>
                        <input onClick={this.done1} type="checkbox"/> Упражнение 1</div>

                    <div className={this.state.visible2 ? "exercise":"exercise text-line"}>
                        <input onClick={this.done2} type="checkbox"/> Упражнение 2</div>

                    <div className={this.state.visible3 ? "exercise":"exercise text-line"}>
                        <input onClick={this.done3} type="checkbox"/> Упражнение 3</div>

                    <div className={this.state.visible4 ? "exercise":"exercise text-line"}>
                        <input onClick={this.done4} type="checkbox"/> Упражнение 4</div>

                    <div className={this.state.visible5 ? "exercise":"exercise text-line"}>
                        <input onClick={this.done5} type="checkbox"/> Упражнение 5</div>



                    <p>Тренировка длится</p>

                    <p>{Math.trunc((this.state.time.sec)/60)} :min {(this.state.time.sec)%60} :сек</p>




                    {this.state.lessons.map((post,index)=>{

                        return <div className={this.state.lessons[index].visible ? "exercise":"exercise text-line"}>
                            <input onClick={()=>{this.done(index)}} type="checkbox"/>{post.name}</div>
                    })}





                    <button onClick={()=> {this.count = setInterval(() => this.timer(), 1000)}}>Start</button>
                    <button onClick={()=> {clearInterval(this.count)}, ()=>{this.finish()}}>Закончить</button>




                </div>
            </div>



        )
    }
}


export default CheckList;