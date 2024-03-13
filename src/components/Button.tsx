import { View, TouchableOpacity, Text } from "react-native";
import appTheme from "../themes/appTheme";
import IconFeather from "react-native-vector-icons/Feather";

interface ButtonProps {
    texto:string,
    cor:string,
    onPress?: () => void;
    iconName?: string,
}

const Button: React.FC<ButtonProps>  = ({
    texto,
    cor,
    onPress = () => {},
    iconName,
    ...props
}) => {
    return(
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{
          height: 40,
          backgroundColor: cor , 
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        {iconName && (
          <IconFeather
            name={iconName}
            style={{
              fontSize:20
            }}
          />
        )}
        <Text style={{color: appTheme.colors.white, ...appTheme.fonts.h4}}>
          {texto}
        </Text>
      </TouchableOpacity>
    );
}

export default Button;