/*
 * Implement all your JavaScript in this file!
 */
var currentNum;
var stack = [];
var result;
var display = '';

var operations = {
	addButton: function(x, y) {
		return x+y;
	},
	subtractButton: function(x, y) {
		return x-y;
	},
	multiplyButton: function(x, y) {
		return x*y;
	},
	divideButton: function(x, y) {
		return x/y;
	}
};

$(".number").on( "click",function () {
	if (stack.length == 3) {
		stack = [];
		display = '';
		display += $(this).val();
		currentNum = display;
		$("#display").val(currentNum);
	}
	else {
		display += $(this).val();
		currentNum = display;
		$("#display").val(currentNum);
		$("#output").html(stack[0]);
	}
});

$(".operation").on( "click",function () {
	//if there is currently a number in local memory
	if (stack.length == 0 && currentNum != undefined) {
		stack.push(currentNum);
		currentNum = undefined;
		display = '';
		stack.push(this.id);
	}
	if (stack.length == 2) {
		//if there is no number in local memory
		if (currentNum == undefined) {
			stack[1] = this.id;
			}
		//if there is a number in local memory
		else {
			stack.push(currentNum);
			result = operations[stack[1]](Number(stack[0]), Number(stack[2]));
			currentNum = undefined;
			stack = [];
			display = '';
			stack.push(result);
			stack.push(this.id);
			$("#display").val(result);
			$("#output").html(stack[0]);
		}
	}
	if (stack.length == 3 && currentNum == undefined) {
		result = operations[stack[1]](Number(stack[0]), Number(stack[2]));
		stack = [];
		display = '';
		stack.push(result);
		stack.push(this.id);
	}

});

$("#equalsButton").on( "click",function () {
	if (stack.length == 3) {
		result = operations[stack[1]](result, Number(stack[2]));
		display = '';
		$("#display").val(result);
		$("#output").html(stack[0]);
	}
	if (stack.length == 2) {
		if (currentNum != undefined)	{
			stack.push(currentNum);
			currentNum = undefined;
			display = '';
			result = operations[stack[1]](Number(stack[0]), Number(stack[2]));
			$("#display").val(result);
			$("#output").html(stack[0]);
		}
	}
});

$("#clearButton").on( "click",function () {
	currentNum = undefined;
	display = '';
	stack = [];
	$("#display").val("");
});