import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ALERTS } from "../assets/constants";

type Alert = {
  id: number;
  title: string;
  description: string;
  type: "renewal" | "offer" | "update" | "refund" | "error";
  timestamp: string;
};

const getAlertIcon = (type: string) => {
  const iconMap: Record<string, string> = {
    renewal: "calendar-check",
    offer: "tag-heart",
    update: "information",
    refund: "cash-refund",
    error: "alert-circle",
  };
  return iconMap[type] || "bell";
};

const getAlertColor = (type: string) => {
  const colorMap: Record<string, string> = {
    renewal: "#06b6d4",
    offer: "#f97316",
    update: "#8b5cf6",
    refund: "#10b981",
    error: "#ef4444",
  };
  return colorMap[type] || "#6b7280";
};

const AlertCard = ({ item }: { item: Alert }) => {
  const iconColor = getAlertColor(item.type);
  const iconName = getAlertIcon(item.type);

  return (
    <View className="mb-4 rounded-3xl bg-white p-4 shadow-md shadow-slate-200">
      <View className="flex-row items-start">
        <View
          className="mr-3 rounded-full p-3"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <MaterialCommunityIcons
            name={iconName as any}
            size={20}
            color={iconColor}
          />
        </View>
        <View className="flex-1">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="font-bold text-slate-900" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="text-xs text-slate-500">{item.timestamp}</Text>
          </View>
          <Text className="text-sm leading-5 text-slate-600">
            {item.description}
          </Text>
          <TouchableOpacity className="mt-3">
            <Text className="text-xs font-semibold text-blue-600">
              View Details →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function Alerts() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <FlatList
        data={ALERTS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
        ListHeaderComponent={() => (
          <>
            <View className="mb-2">
              <Text className="text-sm uppercase text-slate-400">
                Updates
              </Text>
              <Text className="text-3xl font-bold text-slate-900">
                Alerts
              </Text>
            </View>
            <Text className="mb-6 text-sm text-slate-600">
              Stay updated with your subscription notifications
            </Text>
          </>
        )}
        renderItem={({ item }) => <AlertCard item={item} />}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center py-20">
            <MaterialCommunityIcons
              name="bell-off"
              size={48}
              color="#cbd5e1"
            />
            <Text className="mt-4 text-lg text-slate-500">
              No alerts yet
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}