import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import appTheme, { colors } from '../themes/appTheme';
import { AntDesign,  } from '@expo/vector-icons'
import App from '../../App';

interface ButtonProps {
  texto: string;
  nameIcon: keyof typeof AntDesign.glyphMap;
}

export function SocialLogin(props: ButtonProps){
 return (
    <View style={styles.container}>
      <TouchableOpacity style={{flexDirection:'row',paddingHorizontal: 18}}>
        <View style={styles.botao}>
            <AntDesign name={props.nameIcon} size={20} color={'#000'} style={{paddingRight: 36,paddingLeft: 20}}/>
            <Text style={styles.titulo}>{props.texto}</Text>
        </View>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
 },
 botao:{
  flex:1,
  paddingVertical: 13,
  alignItems: "center",
  backgroundColor: appTheme.colors.gray,
  borderRadius: 8,
  flexDirection: 'row'

},
titulo:{
  color: '#000',
  fontSize: 13,
  fontWeight: 'bold'
},
});