import { StyleSheet, Text, View, Image, TouchableOpacity, type ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./styles"

interface data {
  name: string;
  price: number;
  URL: ImageSourcePropType;
  handleToCart: () => void;
}

export default function Card({ name, price, URL, handleToCart }: data) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={URL} style={{ width: 170, height: 170, objectFit: "contain" }} />

        <View>
          <Text style={{ fontSize: 22, fontWeight: 'semibold' }}>{name}</Text>
          <Text style={styles.price}>R$: {price}</Text>
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={handleToCart}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
