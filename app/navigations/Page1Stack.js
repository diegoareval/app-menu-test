import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from "../screens/Page1";

const Stack = createStackNavigator();

export default function Page2Stack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pagina 1"
                component={Page1}
                options={{ title: "Pagina 1" }}
            />
        </Stack.Navigator>
    )
}