import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { EXPLORE_APPS } from "../assets/constants";

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type ExploreApp = {
  name: string;
  description: string;
  category: string;
  price: number;
  icon: any;
  rating: number;
};

const ExploreCard = ({ item }: { item: ExploreApp }) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <View className="mb-4 rounded-3xl bg-white p-5 shadow-md shadow-slate-200">
      <View className="mb-3 flex-row items-start justify-between">
        <View className="flex-1 flex-row items-center">
          <View className="mr-4 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 p-3">
            <MaterialCommunityIcons
              name={item.icon as any}
              size={24}
              color="#6366f1"
            />
          </View>
          <View className="flex-1">
            <Text className="text-base font-bold text-slate-900">
              {item.name}
            </Text>
            <Text className="text-xs text-slate-500">{item.category}</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-1">
          <MaterialCommunityIcons name="star" size={16} color="#fbbf24" />
          <Text className="text-sm font-semibold text-slate-900">
            {item.rating}
          </Text>
        </View>
      </View>

      <Text className="mb-3 text-sm leading-5 text-slate-600">
        {item.description}
      </Text>

      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-slate-900">
          ${item.price.toFixed(2)}
        </Text>
        <Text className="text-xs text-slate-500">/month</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsAdded(!isAdded)}
        className={`rounded-2xl px-4 py-3 ${
          isAdded ? "bg-green-500" : "bg-slate-900"
        }`}
      >
        <Text className="text-center text-sm font-semibold text-white">
          {isAdded ? "Added" : "Add Subscription"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Explore() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <FlatList
        data={EXPLORE_APPS}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
        ListHeaderComponent={() => (
          <>
            <View className="mb-2">
              <Text className="text-sm uppercase text-slate-400">
                Discover
              </Text>
              <Text className="text-3xl font-bold text-slate-900">
                Explore Apps
              </Text>
            </View>
            <Text className="mb-6 text-sm text-slate-600">
              Browse and manage your favorite subscriptions
            </Text>
          </>
        )}
        renderItem={({ item }) => <ExploreCard item={item} />}
      />
    </SafeAreaView>
  );
}
