import React, {useContext} from "react";
import { View, Text } from "react-native";
import { MainContext } from "../context/DataContext";
import ButtonHandler from "../shared/ButtonHandler";

export default function Page3() {
   const {cleanData} = useContext(MainContext)
    return (
        <View>
            <Text>Page 3</Text>
            <View>
                <ButtonHandler title={"Limpiar"} onPress={cleanData}/>
            </View>
        </View>
    )
}