import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Page1 from "./Page1Stack";
import Page2 from "./Page2Stack";
import Page3 from "./Page3Stack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer >
            <Tab.Navigator>
                <Tab.Screen name="page1" component={Page1} options={{ title: "Pagina 1" }} />
                <Tab.Screen name="page2" component={Page2} options={{ title: "Pagina 2" }} />
                <Tab.Screen name="page3" component={Page3} options={{ title: "Pagina 3" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}