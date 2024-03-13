import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Alert } from "react-native";
import {useNavigation} from "@react-navigation/native"
import appTheme, { fonts } from "../../themes/appTheme";
import { StatusBar } from "expo-status-bar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SocialLogin } from "../../components/otherLogin";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackTypes } from "../../../App";


const logoImg = require("../../assets/logo.png");

interface InputState {
  email: string;
  password: string;
}

/*
interface RegisterProps {
    navigation: any; // Replace 'any' with the actual type of navigation
}
*/
const Login/*: React.FC<RegisterProps> { navigation }*/ = () => {
  const [inputs, setInputs] = useState<InputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const validate = async () => {
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Por favor, coloque um email válido", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

 const login = () => {
    //navigation.navigate("HomeScreen");
   };


  const handleOnchange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: string | null, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: error || "" }));
  };
    const navigation = useNavigation<StackTypes>();
    return (
      <SafeAreaView style={{flex:1,backgroundColor:appTheme.colors.orange, }}>
        <StatusBar style="light"  />
        <View style={styles.header}>
          <Image
            source={logoImg}
          />
        </View>
        <View style={styles.footer}>
          <Text style={{...fonts.body2}}>
            Login
          </Text>
          <Input 
            placeholder="E-mail ou Nome do usario" 
            iconName="user"
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            error={errors.email}
            />
          <Input 
            placeholder="Senha" 
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            error={errors.password}
            password/>
          <Text 
          onPress={() => navigation.navigate("Verification")}
          style={{color:"#1865F2",paddingTop:14}}>
            Esqueceu sua senha ?
          </Text>
          <Button cor={appTheme.colors.blue} texto="Entrar" onPress={validate} />
          <View style={{alignItems: "center", justifyContent:"center", paddingTop: 24}}>
            <Text 
            onPress={() => navigation.navigate("Register")}
            style={{color:"#1865F2", paddingBottom:20 }}>
              Criar uma conta
            </Text>
          </View>
          <SocialLogin texto="Continuar com o Google" nameIcon={"google"}/>
          <SocialLogin texto="Continuar com o Google" nameIcon={"facebook-square"}/>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    header:{
      backgroundColor:appTheme.colors.orange, 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20
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
  
  export default Login;