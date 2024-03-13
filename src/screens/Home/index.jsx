import React from 'react';
import { View, SafeAreaView, } from 'react-native';
import Header from '../../components/Header';
import YouTubePlaylist from './YouTubeVideoList';
import FlatListMaterias from './recentes';


const Home = () => {
    return (
    <View>
      <SafeAreaView>
      <Header/>
      <YouTubePlaylist/>
      <FlatListMaterias />
      </SafeAreaView>
    </View>
  );
};


export default Home;