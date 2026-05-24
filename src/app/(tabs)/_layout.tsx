import "../../../global.css";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { tabs } from "../assets/constants";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Modern floating tab bar
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },

        // Active & inactive colors
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#94a3b8",

        // Label styling
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? tab.activeIcon : tab.inactiveIcon}
                size={26}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}