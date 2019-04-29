import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
//Enzyme is used to create an instance
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("App counter component", function() {
  it("starts with a count 0",() => {
    //create an instance of App
    var wrapperInstance= shallow(<App />);
    var count = wrapperInstance.state().count;
    expect(count).toEqual(0);
  });
  it("can increment count on click of button",() => {
    //create an instance of App
    var wrapperInstance = shallow(<App />);
    var incrementBtn = wrapperInstance.find('button');
    incrementBtn.simulate('click');
    var pText= wrapperInstance.find('p').text();
    expect(pText).toEqual('Count : 1');
  });
  it("takes snapshot",()=>{
    //create an instance of App
    var tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
    //jest --updateSnapshot to update snapshot
  });
});
