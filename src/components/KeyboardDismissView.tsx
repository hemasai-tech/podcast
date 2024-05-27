import React, { PropsWithChildren } from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Keyboard } from "react-native";

interface Props {
  withScrollView?: Boolean
}

const KeyboardDismissView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  if (props.withScrollView) {
    return (
      <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={s.container}>
        {props.children}
      </ScrollView>
    )
  }

  return (
    <TouchableOpacity style={s.container} activeOpacity={1} onPress={Keyboard.dismiss}>
      {props.children}
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: { flex: 1 }
})

export default KeyboardDismissView