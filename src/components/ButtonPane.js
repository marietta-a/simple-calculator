
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
        shouldProcessResult: true
    };
  }
    
  handleClick(val) {
    if(!this.state.shouldProcessResult && !this.state.commandClicked){
      this.setState({shouldProcessResult: true, screenVal: val, val: val, result: ''})
      return;
    }
     if(this.state.commandClicked){
        this.setState({commandClicked: false, val: val});
     }
     else{
      this.setState({val: this.state.val + '' + val});
     }
     this.setState({screenVal: this.state.screenVal + '' + val});
  }
  handleClearScreen() {
    this.setState({screenVal: '',val: '', commandClicked: false, result: 0});
  }

  handleCommand (cmd) {
    if(this.state.val === undefined || this.state.val === null){
      return;
    }
    if(!this.state.shouldProcessResult){
      this.setState({command: cmd, commandClicked: true,shouldProcessResult: true});
      this.setState({screenVal: this.state.screenVal + '' + cmd});
      return;
    }
    if(this.state.result === ''){
      this.setState({result: this.state.val, command: cmd, commandClicked: true});
      this.setState({screenVal: this.state.screenVal + '' + cmd});
    }
    else{
      this.setState({commandClicked: true,command: cmd });
      var result = this.processResult(cmd);
      this.setState({result: result, screenVal: result + ' ' + cmd})
    }

  }

  processResult(cmd){
    let left = parseFloat(this.state.val);
    let res = parseFloat(this.state.result);
    
    let total = 0;
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
    
    return  total;
  }

  handleEqualityClicked(){
    var result = this.processResult(this.state.command);
    this.setState({result: result, screenVal: result, shouldProcessResult: false, commandClicked: false, val: 0});
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