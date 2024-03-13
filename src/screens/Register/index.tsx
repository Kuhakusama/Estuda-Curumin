import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import {useNavigation} from "@react-navigation/native"
import appTheme, { fonts } from "../../themes/appTheme";
import { StatusBar } from "expo-status-bar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SocialLogin } from "../../components/otherLogin";
import { StackTypes } from "../../../App";


const logoImg = require("../../assets/logo.png");

interface InputState {
  nome: string,
  email: string,
  senha: string,
  nascimento: string,
  cpf: string,
  telefone: string
}

/*
interface RegisterProps {
    navigation: any; // Replace 'any' with the actual type of navigation
}
*/
const Register/*: React.FC<RegisterProps> { navigation }*/ = () => {
  const [inputs, setInputs] = useState<InputState>({
    nome: "",
    email: "",
    senha: "",
    nascimento: "",
    cpf: "",
    telefone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = async () => {
    let isValid = true;
    if (!inputs.nome) {
      handleError("Por favor, coloque seu nome", "nome");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Por favor, coloque um email", "email");
      isValid = false;
    }
    if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Por favor, coloque um email válido", "email");
      isValid = false;
    }
    if (!inputs.senha) {
      handleError("Por favor, coloque uma senha", "senha");
      isValid = false;
    }
    if (!inputs.nascimento) {
      handleError("Por favor, coloque sua data de nascimento", "nascimento");
      isValid = false;
    }
    if (!inputs.cpf) {
      handleError("Por favor, coloque seu cpf", "cpf");
      isValid = false;
    }
    if (!inputs.telefone) {
      handleError("Por favor, coloque seu telefone", "telefone");
      isValid = false;
    }
    if (isValid) {
      criarConta();
    }
  };

  const criarConta = () =>{
    navigation.navigate("Login")
  }

  const handleOnchange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: string | null, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: error || "" }));
  };


  const navigation = useNavigation<StackTypes>();
    return (
      <SafeAreaView style={{flex:1,backgroundColor:appTheme.colors.orange, }}>
        <StatusBar style="light"/>
        
          <View style={styles.header}>
            <Image
              source={logoImg}
            />
          </View>
          <View style={styles.footer}>
            <Text style={{...fonts.body2, paddingBottom: 20}}>
              Faça seu cadastro
            </Text>
            <Input 
              placeholder="Nome Completo" 
              iconName="user-plus"
              onChangeText={(text) => handleOnchange(text, "nome")}
              onFocus={() => handleError(null, "nome")}
              error={errors.nome}/>
            <Input 
              placeholder="E-mail" 
              iconName="mail" 
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              error={errors.email}/>
            <Input 
              placeholder="Numero de Telefone" 
              iconName="phone"
              onChangeText={(text) => handleOnchange(text, "telefone")}
              onFocus={() => handleError(null, "telefone")}
              error={errors.telefone}/>
            <Input 
              placeholder="Data de Nascimnto" 
              iconName="calendar" 
              onChangeText={(text) => handleOnchange(text, "nascimento")}
              onFocus={() => handleError(null, "nascimento")}
              error={errors.nascimento}/>
            <Input 
              placeholder="CPF" 
              iconName="user"
              onChangeText={(text) => handleOnchange(text, "cpf")}
              onFocus={() => handleError(null, "cpf")}
              error={errors.cpf}/>
            <Input 
              placeholder="Senha" 
              onChangeText={(text) => handleOnchange(text, "senha")}
              onFocus={() => handleError(null, "senha")}
              error={errors.senha}
              password/>

            <Button
              texto="Criar Conta"
              cor={appTheme.colors.blue}
              onPress={validate}
            />
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
  
  export default Register;