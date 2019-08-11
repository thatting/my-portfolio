import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
  },
  {
    'title': "3D Perception",
    'image': {
      'desc': "3D Perception",
      'src':  "images/Robot-Kitchen-Environment.jpg",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                   https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
