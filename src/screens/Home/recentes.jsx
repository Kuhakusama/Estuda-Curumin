import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Recentes from './assets/clock.svg'
import { sizes } from '../../themes/constants'
import { cores } from '../../themes/constants'
import Calculadora from './assets/calculadora.svg'
import Ciencias from './assets/ciencias.svg'
import Quiz from './assets/quiz.svg'
import Book from './assets/book.svg'


const data = [
    { id: '1', materia: 'Matemática', assunto: 'Equações e Inequações', cor: '#216FFA' ,icon: 'equacoes' },
    { id: '2', materia: 'Quiz Cultural', assunto: 'Quiz Cultural', cor: '#B500FF',icon: 'quiz'  },
    { id: '3', materia: 'Ciencias', assunto: 'Modelos Atômicos', cor: '#0BA21A',icon: 'ciencias'  },
    { id: '4', materia: 'Portugues', assunto: 'Advérbios', cor: '#FF5733' ,icon: 'portugues' },
  ];
  

const FlatListMaterias = () => {

    const renderIcon = (icon) => {
        if (icon === 'equacoes') {
          return (
            <Calculadora/>
          );
        } else if (icon === 'quiz') {
          return (
           <Quiz/>
          );
        }else if(icon === 'ciencias'){
            return(
                <Ciencias/>
            )
        }else {
            return(
                <Book/>
            )
        }
        return null;
      };

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.cor }]}>
          <Text style={{marginRight:100, fontSize:sizes.large, color:cores.white, fontWeight:'700'}}>{item.materia}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginRight:50, marginTop:15}}>
        <View>
        {renderIcon(item.icon)}
          </View>
          <View style={{paddingLeft:10}}>
          {item.assunto !== '' && <Text style={styles.subItemText}>{item.assunto}</Text>}
          </View>
          </View>
        </View>
      );

  return (
    <View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 15, paddingBottom: 10, paddingTop: 10 }}>
          <Recentes style={{marginTop:4}}/>
          <Text style={{ fontSize: sizes.large, fontWeight: '500', color: '#888888', marginTop: 2 }}> Recentes</Text>
        </View>
        <View/>
        <View style={{ marginRight: 15 }}>
          <View style={styles.orangeSquare}>
            <Text style={{ color: cores.white, fontSize: sizes.medium, fontWeight: '400' }}>0</Text>
          </View>
        </View>
    </View>
    
    <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};


    const styles = StyleSheet.create({
        container: {
          marginTop: 20,
          marginBottom: 20,
        },
        itemContainer: {
          width: 250,
          height: 150,
          borderRadius: 15,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        itemText: {
          color: 'white',
          fontWeight: 'bold',
        },
        subItemText: {
          color: 'white',
          fontSize: sizes.medium,
          fontWeight:'500',width:100
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

export default FlatListMaterias;