import { StyleSheet, Text, Dimensions,Platform} from "react-native";
import React from "react";

const Title = ({ children ,style}) => {
  return <Text style={[styles.title , style]}>{children}</Text>;
};

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    width: 400,
  },
});