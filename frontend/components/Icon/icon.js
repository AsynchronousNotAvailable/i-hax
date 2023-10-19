import React from 'react';
import { Image } from 'react-native';


const HomeTabIcon = () => (
    <Image
      source={require('../../assets/home.png')}
      style={{ width: 20, height: 20, tintColor: "black" }}
    />
);
  
const LearnTabIcon = () => (
  <Image
    source={require('../../assets/learn.png')}
    style={{ width: 20, height: 20, tintColor: "black" }}
  />
);

const HealthTabIcon = () => (
  <Image
    source={require('../../assets/heart.png')}
    style={{ width: 20, height: 20, tintColor: "black" }}
  />
);

const CommunityTabIcon = () => (
  <Image
    source={require('../../assets/3p.png')}
    style={{ width: 20, height: 20, tintColor: "black" }}
  />
);

const ProfileTabIcon = () => (
  <Image
    source={require('../../assets/human.png')}
    style={{ width: 20, height: 22, tintColor: "black" }}
  />
);

export {HomeTabIcon, LearnTabIcon, HealthTabIcon, CommunityTabIcon, ProfileTabIcon };
