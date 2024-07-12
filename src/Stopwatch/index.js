
import { Component } from "react";
import "./index.css"
class Stopwatch extends Component{

    state = {
        hours:0,
        minutes:0,
        seconds:0,
        uniqueTimerId:null,
        isTimerOn:false
    }

    onStartTimer = () =>{
        const{isTimerOn} = this.state
        if(isTimerOn !== true){
            const timerId = setInterval(this.tick, 1000)
            this.setState((prevState)=>({isTimerOn:!prevState.isTimerOn, uniqueTimerId:timerId}))
        }
       
    }

    onStopTimer=()=>{
        const{uniqueTimerId} = this.state
        clearInterval(uniqueTimerId)
        this.setState((prevState)=>({isTimerOn:!prevState.isTimerOn}))
    }

    onResetTimer = ()=>{
        const{uniqueTimerId} = this.state
        clearInterval(uniqueTimerId)
        this.setState({seconds:0, minutes:0, hours:0})

    }

    tick = () =>{
        const{seconds, minutes, hours} = this.state
        if(seconds === 59){
            this.setState((prevState)=>({seconds:0, minutes:prevState.minutes+1}))
        }
        else if(seconds===59 && minutes === 59){
            this.setState((prevState)=>({seconds:0, minutes:0, hours:prevState.hours+1}))
        }
        else if(seconds===59 && minutes===59 && hours === 23){
            this.setState({seconds:0, minutes:0, hours:0})
        }
        else{
            this.setState((prevState)=>({seconds:prevState.seconds+1}))
        }
    }


    render(){
        let{seconds, minutes, hours} = this.state
        if(seconds<10){
            seconds = "0"+seconds.toString()
        }
        if(minutes<10){
            minutes = "0"+minutes.toString()
        }
        if(hours<10){
            hours = "0"+hours.toString()
        }
        return(
            <div className="main-container">
                <div>
                <img 
                    src = "https://img.freepik.com/premium-vector/stopwatch-cartoon-style-vector-illustration-clock-symbol-sport-quiz-game_501826-260.jpg?w=2000"
                    className="image-size"
                    alt="clock"
                />
                <div className="time-container">
                    <p className="timer-digits">{hours}</p>
                    <p className="timer-digits">:</p>
                    <p className="timer-digits">{minutes}</p>
                    <p className="timer-digits">:</p>
                    <p className="timer-digits">{seconds}</p>
                </div>
                <div className="buttons-container">
                    <button className="button button3" onClick={this.onResetTimer}>Reset</button>
                    <button className="button button2" onClick={this.onStartTimer}>Start</button>
                    <button className="button button1" onClick={this.onStopTimer}>Stop</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Stopwatch