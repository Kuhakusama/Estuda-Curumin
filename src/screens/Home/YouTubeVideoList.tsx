import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { cores, sizes } from '../../themes/constants';
import YouTubeIframe from 'react-native-youtube-iframe';
import { Linking } from 'react-native';
import Bolacha from './assets/iconvideo.svg';

const apiKey = 'AIzaSyCqrctqZ2LS3hBAwzu7ObjrBrLdMDzE5Lg';

interface PlaylistItem {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
  };
}

const YouTubePlaylist: React.FC = () => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchYouTubePlaylist = async () => {
      try {
        const apiKey = 'AIzaSyCqrctqZ2LS3hBAwzu7ObjrBrLdMDzE5Lg';
        const playlistId = 'PLHQZVkmateBKkmIh56XUSoKnSnRtpL7It';

        const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&part=snippet&playlistId=${playlistId}&maxResults=10`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setPlaylist(data.items);
      } catch (error) {
        console.error('Erro ao buscar playlist do YouTube:', error);
      }
    };

    fetchYouTubePlaylist();
  }, []);

  const renderPlaylistItem = ({ item }: { item: PlaylistItem }) => {
    const videoId = item.snippet.resourceId.videoId;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
      <TouchableOpacity style={styles.playlistItem} onPress={() => handleVideoPress(videoId)}>
        <Image style={styles.thumbnail} source={{ uri: thumbnailUrl }} />
        <Text style={styles.videoTitle}>{item.snippet.title}</Text>
      </TouchableOpacity>
    );
  };
  
const handleVideoPress = (videoId: string) => {
  setSelectedVideoId(videoId);
  setIsVideoVisible(true);

  // Construa o URL do vídeo do YouTube usando o videoId
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // Abra o link no navegador ou no aplicativo YouTube
  Linking.openURL(youtubeUrl)
    .then(() => console.log('Link do YouTube aberto com sucesso'))
    .catch((error) => console.error('Erro ao abrir o link do YouTube', error));
};


  return (
    <View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 15, paddingBottom: 10, paddingTop: 10 }}>
          <Bolacha style={{marginTop:4}}/>
          <Text style={{ fontSize: sizes.large, fontWeight: '500', color: '#888888', marginTop: 2 }}> VideoAulas</Text>
        </View>

        <View style={{ marginRight: 15 }}>
          <View style={styles.orangeSquare}>
            <Text style={{ color: cores.white, fontSize: sizes.medium, fontWeight: '400' }}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={playlist}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaylistItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {isVideoVisible && (
        <YouTubeIframe
          videoId={selectedVideoId as string}
          play
          loop
          apiKey={apiKey}  // Certifique-se de ter uma variável chamada apiKey definida no escopo
          onReady={() => console.log('Pronto para reproduzir')}
          onChangeState={(event) => console.log('Estado alterado', event)}
          onChangeFullscreen={(event) => console.log('Modo de tela cheia alterado', event)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    playlistItem: {
        marginRight: 10,
        marginLeft: 15,
    },
    thumbnail: {
        height: 130,
        width: 'auto',
        aspectRatio: 16 / 9,
        borderRadius: 8,
    },
    videoTitle: {
        fontSize: sizes.medium,
        fontWeight: '500',
        marginTop: 8,
        maxWidth: 150,
    },
    orangeSquare: {
        alignItems: 'center',
        fontSize: sizes.large,
        width: 36,
        height: 20,
        backgroundColor: '#FFA500',
        marginLeft: 10,
        fontSize: '900',
        borderRadius: 5,
    },
});

export default YouTubePlaylist;