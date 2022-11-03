
import React,{ useState } from 'react';

class ButtonPane extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        screenVal: '',
        commandClicked: false,
        leftVal: '',
        rightVal: '',
        command: '',
    };
  }
    
  handleClick(val) {
     this.setState({screenVal: this.state.screenVal + '' + val});
     if(this.state.commandClicked) {
          this.setState({rightVal: this.state.rightVal + val}, () => this.processResult());
     }
     else {
        this.setState({leftVal: this.state.leftVal + val});
     }
  }
  handleClearScreen() {
    this.setState({screenVal: '',leftVal: '', commandClicked: false, rightVal: '', result: 0});
  }

  handleCommand (cmd) {
    this.setState({commandClicked: true})
    this.setState({screenVal: this.state.screenVal + '' + cmd});
    this.setState({command: cmd, rightVal: ''});
  }

  processResult(){
    const right =  parseFloat(this.state.rightVal);
    const left = this.state.result ?  parseFloat(this.state.result) : parseFloat(this.state.leftVal);
    
    if(!right && left){
        this.setState({result: left});
        return;
    }
    if(!right && !left){
        this.setState({result: 0});
        return;
    }
    var res = 0;
    
    switch (this.state.command) {
      case '-':
           res = left - right;
          break;
      case '+':
           res = left + right;
          break;
      case '*':
           res = left * right;
          break;
      case '/':
           res = left / right;
          break;
      case '%':
           res = left % right;
          break;
    
      default:
          break;
    }
    this.setState({result: res.toFixed(2)});
  }

  render() {
    return(
        <div className="flex content-center justify-center bg-emerald-900">
        <div className="grid grid-cols-4 gap-1 w-1/5 rounded-md mt-16 mb-16 bg-gray-400">
              <div className='col-span-4 screen button-left button-right button-top'>{this.state.screenVal}</div>
              <div className='col-span-4 display button-right button-bottom'>{this.state.result}</div>
              <div className='col-span-1 h-16 button button-left button-top' onClick={() => this.handleClearScreen()}>AC</div>
              <div className='col-span-1 button button-top' onClick={() => this.handleCommand('%')}>%</div>
              <div className='col-span-1 button button-top' onClick={() => this.handleCommand('/')}>/</div>
              <div className='col-span-1 button button-top button-right'>Back</div>

              <div className='col-span-1 h-16 button button-left' onClick={() => this.handleClick(7)}>7</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(8)}>8</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(9)}>9</div>
              <div className='col-span-1 button button-right' onClick={() => this.handleCommand('*')}>*</div>

              <div className='col-span-1 h-16 button button-left' onClick={() => this.handleClick(4)}>4</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(5)}>5</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(6)}>6</div>
              <div className='col-span-1 button button-right' onClick={() => this.handleCommand('-')}>-</div>
              
              <div className='col-span-1 h-16 button button-left' onClick={() => this.handleClick(1)}>1</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(2)}>2</div>
              <div className='col-span-1 button' onClick={() => this.handleClick(3)}>3</div>
              <div className='col-span-1 button button-right' onClick={() => this.handleCommand('+')}>+</div>

              <div className='col-span-2 h-16 button button-left button-buttom ' onClick={() => this.handleClick(0)}>0</div>
              <div className='col-span-1 button button-buttom' onClick={() => this.handleClick('.')}>.</div>
              <div className='col-span-1 button button-right button-buttom' onClick={() => this.processResult()}>=</div>
        </div>
    </div>
    );
  }
}

export default ButtonPane;