import React from "react";
import { Image, Text, StyleSheet, View, StyleProp, ViewStyle, TouchableOpacity } from "react-native";

interface CardProps {
  style: StyleProp<ViewStyle>;
  img?: string;
  title?: string;
  span1?: string;
  text1?: string;
  span2?: string;
  text2?: string;
  span3?: string;
  text3?: string;
  span4?: string;
  text4?: string;
  span5?: string;
  text5?: string;
  span6?: string;
  text6?: number;
  onPress?:() => void
}

export const MyCard: React.FC<CardProps> = ({
  style,
  img,
  title,
  span1,
  text1,
  span2,
  text2,
  span3,
  text3,
  span4,
  text4,
  span5,
  text5,
  span6,
  text6,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={{uri:img}} style={styles.image} />
      <View style={style}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span1} </Text>{text1}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span2} </Text>{text2}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span3} </Text>{text3}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span4} </Text>{text4}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span5} </Text>{text5}</Text>
        <Text style={styles.description}><Text style={styles.span}>{span6} </Text>{text6}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E2749",
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color:"#FA9500",
    textAlign: "center"
  },
  description: {
    fontSize: 14,
    color: "#FBFFFE",
  },
  span:{
    color:"#FA9500"
  }
});
