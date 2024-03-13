import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, GestureResponderEvent } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFont from "react-native-vector-icons/FontAwesome";// Adjust the import based on your icon library
import appTheme from "../themes/appTheme";

interface InputProps {
  iconName?: string;
  error?: string;
  password?: boolean;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  iconName,
  error,
  password,
  onFocus = () => {},
  onChangeText,
  placeholder,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState<boolean>(password || false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    onFocus();
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTogglePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={{ marginTop: 25 }}>
      <View
        style={[
          styles.input,
          {
            borderBottomColor: error
              ? appTheme.colors.red
              : isFocused
              ? appTheme.colors.darkBlue
              : appTheme.colors.black,
          },
        ]}
      >
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ color: appTheme.colors.black, flex: 1 }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          
          {...props}
        />
        {iconName && (
          <IconFeather
            name={iconName}
            style={{
              fontSize:25
            }}
          />
        )}
        {password && (
          <IconFeather
            name={hidePassword ? 'eye-off'   : 'eye' } // Adjust the icon names based on your icon library
            style={{ fontSize: 25 }}
            onPress={handleTogglePassword}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: appTheme.colors.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: appTheme.colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1, // Espessura da borda inferior
    borderBottomColor: '#000', // Cor da borda inferior
    marginBottom: 10, // Espaço opcional abaixo do input
  },
});

export default Input;
