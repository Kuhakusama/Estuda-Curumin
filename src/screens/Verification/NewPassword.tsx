import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView,Image } from "react-native";
import appTheme, { fonts } from "../../themes/appTheme";
import {useNavigation} from "@react-navigation/native"
import Input from "../../components/Input";
import Button from "../../components/Button";
import { StatusBar } from "expo-status-bar";
import { StackTypes } from "../../../App";
/*
interface VerificationProps {
    navigation: any; // Replace 'any' with the actual type of navigation
}
*/

const logoImg = require("../../assets/logo.png");


const NewPassword/*: React.FC<RegisterProps> { navigation }*/ = () => {
  const navigation = useNavigation<StackTypes>();
    return (
      <SafeAreaView style={{flex:1,backgroundColor:appTheme.colors.orange, }}>
        <StatusBar style="light"  />
        <View style={styles.header}>
          <View style={{justifyContent: 'center',alignItems: 'center',paddingTop: 80, paddingBottom: 76}}>
            <Image
              source={logoImg}
            />
          </View>
          <View style={{}}>
            <Text style={{...appTheme.fonts.h2,color: appTheme.colors.white,paddingHorizontal: 50,}}>
              Informe sua nova senha  
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Input placeholder="Insira sua nova senha" password/>
          <Input placeholder="Confirme sua nova senha" password/>
          <Image
            source={logoImg} //Vai ser o icone de confirmação de senha
          />
          <Button
            cor={appTheme.colors.blue}
            texto="Continuar"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    header:{
      backgroundColor:appTheme.colors.orange, 
      flex: 2,
      paddingTop: 20,
      justifyContent: 'center',
    },
    footer:{
      backgroundColor:appTheme.colors.white, 
      flex:3,
      paddingHorizontal: 50,
      paddingVertical: 30,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    }
  });
  
  
  export default NewPassword;