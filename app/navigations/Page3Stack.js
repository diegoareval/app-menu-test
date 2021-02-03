import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Page3 from "../screens/Page3";

const Stack = createStackNavigator();

export default function Page3Stack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pagina 3"
                component={Page3}
                options={{ title: "Pagina 3" }}
            />
        </Stack.Navigator>
    )
}