const test = require('ava');

const { default: a } = require('../dist/index');

test('获取某天的开始时间 时间格式字符串', (t) => {
	const start = a('2019/09/18', 'YYYY/MM/DD');
	t.is(start, 1568736000000);
});

test('获取某天的开始时间 时间戳', (t) => {
	const start = a(1568736236548);
	t.is(start, 1568736000000);
});
