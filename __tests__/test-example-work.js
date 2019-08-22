import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
    'title': "Deep RL Arm Manipulation",
    'image': {
      'desc': "Deep RL Arm Manipulation",
      'src':  "images/Robot-Kitchen-Environment.jpg",
      'comment': ""
    }
  },
  {
    'title': "Map My World Robot",
    'image': {
      'desc': "Map My World Robot",
      'src':  "images/Robot-Kitchen-Environment.jpg",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                   https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work = {myWork} />);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

});

describe("ExampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

    let images = component.find("img");

    it("Should contain a single 'img' element", () => {
      expect(images.length).toEqual(1);
    });

    it("Should have the image src set correctly", () => {
      expect(images.prop('src')).toEqual(myWork[1].image.src);
    });
});
