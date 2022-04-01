import Template from '../src/main';

describe('Template Engine Test', () => {
  test('Using simple data', () => {
    expect(Template({ "name": "Daniel" }, 'Hello ${name}')).toEqual('Hello Daniel');
  });

  test('Using simple data but with more than one place to replace', () => {
    expect(Template({ "name": "Daniel" }, 'Hello ${name} and ${name}')).toEqual('Hello Daniel and Daniel');
  });

  test('Using two variables in data to be replaced', () => {
    expect(Template({ "day": "Thursday", "name": "Billy"  }, '${name} has an appointment on ${day}')).toEqual('Billy has an appointment on Thursday');
  });

  test('Using combined variables to be replaced', () => {
    expect(Template({ "name": "Billy", "Billy": "Nice Guy" }, 'Hello ${${name}}')).toEqual('Hello Nice Guy');
  });

  test('Changed the combined variables order to be replaced', () => {
    expect(Template({ "Billy": "Nice Guy", "name": "Billy" }, 'Hello ${${name}}')).toEqual('Hello Nice Guy');
  });

  test('Using combined variables and simple variable to be replaced', () => {
    expect(Template({ "name": "Billy", "Billy": "Nice Guy" }, 'Hello ${name} ${${name}}')).toEqual('Hello Billy Nice Guy');
  });

  test('Using string and number variables values to be replaced', () => {
    expect(Template({ "name": "Billy", "number": 1 }, '${name}, Number ${number}')).toEqual('Billy, Number 1');
  });

  test('Using a variable that is not matched to the template', () => {
    expect(() => { Template({ "first_name": "Daniel" }, 'Hello ${name}'); }).toThrow(`The list of variables (first_name) doesn't match with the template!`);
  });

  test('Using a variable that is not matched to the template and another that matches', () => {
    expect(() => { Template({ "first_name": "Daniel", "last_name": "Mello" }, 'Hello ${name} ${last_name}'); }).toThrow(`The list of variables (first_name) doesn't match with the template!`);
  });
});