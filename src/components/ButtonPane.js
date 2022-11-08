
import React from 'react';
import { screen } from '@testing-library/react';

class ButtonPane extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        result: '',
        screenVal: '',
        commandClicked: false,
        val: '',
        command: '',
    };
  }
    
  handleClick(val) {
     this.setState({screenVal: this.state.screenVal + '' + val});
     if(this.state.commandClicked){
        this.setState({commandClicked: false, val: val});
     }
     else{
      this.setState({val: this.state.val + val});
     }
  }
  handleClearScreen() {
    this.setState({screenVal: '',val: '', commandClicked: false, result: 0});
  }

  handleCommand (cmd) {
    if(this.state.val === undefined || this.state.val === null){
      return;
    }
    if(this.state.result === ''){
      this.setState({result: this.state.val, command: cmd, commandClicked: true});
      this.setState({screenVal: this.state.screenVal + '' + cmd});
    }
    else{
      this.setState({commandClicked: true,command: cmd });
      //this.setState({screenVal: this.state.screenVal + '' + cmd});
      //this.setState({command: cmd, result: this.processResult(cmd)});
      this.processResult(cmd);
    }

  }

  processResult(cmd){
    let left = parseFloat(this.state.val);
    let res = parseFloat(this.state.result);
    
    let total = 0;
    var command = this.state.commandClicked ? this.state.command : cmd;
    console.log(left);
    switch (this.state.command) {
      case '-':
           total = res ? res - left : 0 - left;
          break;
      case '+':
           total = res ? res + left : left;
          break;
      case '*':
           total = res ? res * left : left;
          break;
      case '/':
           total = res ? res / left : left;
          break;
      case '%':
           total =  res ? res % left : left;
          break;
    
      default:
          break;
    }
    
    //return  total.toFixed(2);
    this.setState({result: total.toFixed(2), screenVal: total.toFixed(2) + ' ' + cmd})
  }

  handleEqualityClicked(){
    this.processResult(this.state.command);
    //this.setState({screen: '', val: ''});
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
              <div className='col-span-1 button button-right button-buttom' onClick={() => this.handleEqualityClicked()}>=</div>
        </div>
    </div>
    );
  }
}

export default ButtonPane;