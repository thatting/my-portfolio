import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Deep RL Arm Manipulation",
    'href1': "https://drive.google.com/file/d/1vwTFEVlSL4RJRNFqIRBY2IOcAVBP3vmH/view?usp=sharing",
    'href2': "https://github.com/thatting/thomas-hatting-deep-rl-arm-manipulation",
    'desc':  "In deep reinforcement learning (Deep RL), an artificially intelligent agent learn from \
              interacting with its environment using a system of rewards. The trained agent is \
              capable of exhibiting intuitive behaviors and performing complex tasks. In this project,\
              I trained a robotic arm with gripper to touch an object in a simulated environment. \
              I used a C++ API provided an interface to train a Deep Q Learning (DQN) agent. \
              The arm touched the object with 90% accuracy and the arm’s gripper base touched the  \
              object with 84% accuracy. For further information see links to report and code in GitHub.",
    'image': {
      'desc': "Deep RL Arm Manipulation",
      'src':  "images/Deep-RL-picture-for-bubble.png",
      'comment': ""
    }
  },
  {
    'title': "Map My World Robot",
    'href1': "https://drive.google.com/file/d/1jNyOrHtsuibq6Vdzn7w3qLp3HkLJSBdJ/view?usp=sharing",
    'href2': "https://github.com/thatting/thomas-hatting-map-my-world-robot",
    'desc':  "Simultaneous Localization and Mapping (SLAM) is a field of robotics dealing with \
              situations where the robot does not have access to a map of the environment nor have \
              knowledge of its own pose. Well-known approaches to SLAM are EKF, FastSLAM and GraphSLAM. \
              In this project, I used a variant of graph-based SLAM called RTAB-Map. The robot was \
              configured in ROS, based on a previous project. Two simulated environments were \
              created: a kitchen-dining environment, based on existing template, and also a custom designed \
              environment. The robot was navigated around the two environments to generate 2D and 3D \
              maps, and the results were compared. The 2D/3D maps of the environment were clearly \
              recognizable and sufficient loop closures were achieved.  For further information see \
              links to report and code in GitHub.",
    'image': {
      'desc': "Map My World Robot",
      'src':  "images/Model-picture-for-bubble.png",
      'comment': ""
    }
  },
  {
    'title': "3D Perception",
    'href1': "https://drive.google.com/file/d/15Qhe_-csaKutsFaDSlZEAm7-pQRrhXVh/view?usp=sharing",
    'href2': "https://github.com/thatting/thomas-hatting-3d-perception",
    'desc':  "In this project, I created a perception pipeline for a PR2 robot to enable it to move an object. \
              The image analysis was carried out using point cloud filtering and segmentation. The programming  \
              was done in Python. The perception pipeline correctly identified the objects: 100% in test world 1, \
              80% in test world 2, 88% in test world 3. For further information see links to report and code in GitHub.",
    'image': {
      'desc': "3D Perception",
      'src':  "images/PR2-picture-for-bubble.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
