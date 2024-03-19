import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StackNavigators";
import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Homestack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ forcussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={forcussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
