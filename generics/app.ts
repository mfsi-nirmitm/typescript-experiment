// Simple Generic
function echo(data: any) {
	return data;
}

console.log(echo("Max").length);
console.log(echo(27));
console.log(echo({name:"Max",age:27}));

// Better Generic
function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho<number>(27));
console.log(betterEcho({name:"Max",age:27}));

// Build-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("string"); // will give error
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
	args.forEach((element)=> console.log(element));
}
printAll<string>(["Apple","Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());