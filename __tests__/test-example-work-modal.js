import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  'title': "Deep RL Arm Manipulation",
  'href1': "https://drive.google.com/file/d/1vwTFEVlSL4RJRNFqIRBY2IOcAVBP3vmH/view?usp=sharing",
  'href2': "https://drive.google.com/file/d/1vwTFEVlSL4RJRNFqIRBY2IOcAVBP3vmH/view?usp=sharing",
  'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  'image': {
    'desc': "Deep RL Arm Manipulation",
    'src':  "images/Deep-RL-picture-for-bubble.png",
    'comment': ""
  }
};

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);

  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true}/>);

  let anchors = component.find("a");

  it("Should contain a two 'a' elements", () => {
    expect(anchors.length).toEqual(2);
  });

//  it("Should link to our project", () => {
//    expect(anchors.prop('href')).toEqual(myExample.href1);
//    expect(anchors.prop('href')).toEqual(myExample.href2);
//  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--forestGreen").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--forestGreen").hasClass("modal--open")).toBe(true);
  });
});
