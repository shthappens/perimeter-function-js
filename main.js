// your code, here
let perimeter = (l, w) => {
  return (l * 2) + (w * 2);
};

let result = document.getElementById('main');
result.innerHTML = 'The perimeter of the rectangle is ' + perimeter(3, 5) + '.';
