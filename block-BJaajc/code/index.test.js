const { getFullName, isPalindrome, getCircumference, getArea } = require('./index');

test('Max and Zorin to equal Max Zorin', () => {
    expect(getFullName
        (`Max`, 'Zorin')).toBe('max Zorin');
  });

  test('adds 1 + 2 to equal 3', () => {
    isPalindrome(sum(1, 2)).toBe(3);
  });