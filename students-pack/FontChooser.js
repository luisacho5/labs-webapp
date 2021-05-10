class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state={
			fontSize: this.props.size,
			minValue: this.props.min,
			maxValue: this.props.max,
			isBold: this.props.bold,
			isShown: false
		}
    }
    
	handleErrors(){

		if(this.state.minValue <= 0){
			this.setState({
				minValue: 1
			});
		}

		if(this.state.minValue > this.state.maxValue ){

			const temp = this.state.minValue;
			this.setState({
				minValue: this.state.maxValue,
				maxValue: temp
			});
		}
		
		if(this.state.fontSize < this.state.minValue){
			this.setState({
				fontSize: this.state.minValue
			});

		}

		if(this.state.fontSize > this.state.maxValue){
			this.setState({
				fontSize: this.state.maxValue
			});

		}
	}

	handleClick(e){

		e.preventDefault();

		const boldCheckBox   = document.querySelector("#boldCheckbox");
		const decreaseButton = document.querySelector("#decreaseButton");
		const increaseButton = document.querySelector("#increaseButton");
		const fontSizeSpan = document.querySelector("#fontSizeSpan");

		if(this.state.isShown){
			boldCheckBox.hidden = false;
			fontSizeSpan.hidden = false;
			increaseButton.hidden = false;
			decreaseButton.hidden = false;
			this.setState({
				isShown: !this.state.isShown
			});

		}else{
			boldCheckBox.hidden = true;
			fontSizeSpan.hidden = true;
			increaseButton.hidden = true;
			decreaseButton.hidden = true;
			this.setState({
				isShown: !this.state.isShown
			});
		}
		
	}

	handleDecrease (e){
		e.preventDefault;
		const fontSizeSpan = document.querySelector("#fontSizeSpan");


		if(!(this.state.fontSize - 1 < this.state.minValue)){

			if(fontSizeSpan.getAttribute("style")){ fontSizeSpan.setAttribute("style", ""); }

			this.setState({ fontSize: this.state.fontSize - 1 });

			if(this.state.fontSize - 1 === this.state.minValue){ fontSizeSpan.setAttribute("style", "color:blue;"); }
			
		}
	}

	handleIncrease(e){
		e.preventDefault;
		const fontSizeSpan = document.querySelector("#fontSizeSpan");

		if(!(this.state.fontSize + 1 > this.state.maxValue)){

			if(fontSizeSpan.getAttribute("style")){
				fontSizeSpan.setAttribute("style", "");
			}

			this.setState({
				fontSize: this.state.fontSize + 1
			});

			if(this.state.fontSize - 1 === this.state.minValue){
				fontSizeSpan.setAttribute("style", "color:blue;");
			}
			
		}
	}

	handleDoubleClick (e){
		e.preventDefault();

		this.setState({
			fontSize: this.props.size
		});

		const fontSizeSpan = document.querySelector("#fontSizeSpan");

		if(this.props.size > this.state.minValue || this.props.size < this.state.maxValue){
			if(fontSizeSpan.getAttribute("style")){
				fontSizeSpan.setAttribute("style", "");
			}
		}else{
			fontSizeSpan.setAttribute("style", "color:blue;");
		}
	}

    render() {

	return(
	       <div>
			   { this.handleErrors()}

			   {
			   this.state.isBold
			   ? <input type="checkbox" id="boldCheckbox" hidden='true' checked onChange={
				   () => {this.setState({isBold: !this.state.isBold});}}/>
			   : <input type="checkbox" id="boldCheckbox" hidden='true' onChange={
				   () => {this.setState({isBold: !this.state.isBold});}}/>
		   		}
	       <input type="checkbox" id="boldCheckbox" hidden='true' onChange={
			   	 () => {this.setState({isBold: !this.state.isBold});}
		   } />
	       <button id="decreaseButton" hidden='true' onClick={(e) => this.handleDecrease(e)}>-</button>

		   {
			   this.state.fontSize === this.state.minValue || this.state.fontSize === this.state.maxValue 
			   ? <span id="fontSizeSpan" hidden='true' style={{color:"blue"}} onDoubleClick={(e) => this.handleDoubleClick(e)}>{this.state.fontSize}</span>
			   : <span id="fontSizeSpan" hidden='true' onDoubleClick={(e) => this.handleDoubleClick(e)}>{this.state.fontSize}</span>
		   }

	       <span id="fontSizeSpan" hidden='true' onDoubleClick={(e) => this.handleDoubleClick(e)}>{this.props.size}</span>
	       <button id="increaseButton" hidden='true' onClick={(e) => this.handleIncrease(e)}>+</button>

	       {
			   this.state.isBold 
			   ? <span id="textSpan" style={{fontSize:this.state.fontSize + "px", fontWeight:"bold"}} onClick={(e) => this.handleClick(e)}>{this.props.text}</span> 
			   : <span id="textSpan" style={{fontSize:this.state.fontSize + "px"}} onClick={(e) => this.handleClick(e)}>{this.props.text}</span>
		   }
	       </div>
	);
    }
}

