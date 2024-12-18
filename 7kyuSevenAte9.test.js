
const sevenAte9 = require('./7kyuSevenAte9');

test('test case 1', () => {
    expect(sevenAte9('797')).toBe('77');
});


test('test case 2', () => {
    expect(sevenAte9('7979797')).toBe('7777');
});


test('test case 3', () => {
    expect(sevenAte9('165561786121789797')).toBe('16556178612178977');
});
