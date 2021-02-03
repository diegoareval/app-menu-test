import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Page2 from "../screens/Page2";

const Stack = createStackNavigator();

export default function Page2Stack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pagina 2"
                component={Page2}
                options={{ title: "Pagina 2" }}
            />
        </Stack.Navigator>
    )
}