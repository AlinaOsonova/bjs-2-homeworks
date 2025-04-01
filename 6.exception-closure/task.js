function parseCount(number) {
	const parsedNumber = Number.parseFloat(number);

	if (isNaN(parsedNumber)) {
		throw new Error('Невалидное значение');
	}

	return parsedNumber;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		return parseFloat((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}
