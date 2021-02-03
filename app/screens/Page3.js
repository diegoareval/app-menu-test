import React from "react";
import { View, Text } from "react-native";

export default function Page3() {
    const cleanData = () => {
       console.log("limpiar");
    }
    return (
        <View>
            <Text>Page 3</Text>
            <View>
                <ButtonHandler title={"Limpiar"} onPress={cleanData}/>
            </View>
        </View>
    )
}