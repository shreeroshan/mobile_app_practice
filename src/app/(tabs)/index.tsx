import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  HOME_USER,
  HOME_BALANCE,
  Upcoming_Subscriptions,
  All_subscriptions,
} from "../assets/constants";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type SubscriptionItem = {
  name: string;
  price: number;
  descriptions: string;
  icon: IconName;
};

const SubscriptionCard = ({
  item,
}: {
  item: SubscriptionItem;
}) => {
  return (
    <View className="mr-4 w-64 rounded-3xl bg-white p-5 shadow-md shadow-slate-200">
      <View className="mb-4 flex-row items-center">
        <View className="mr-3 rounded-2xl bg-slate-100 p-3">
          <MaterialCommunityIcons
            name={item.icon}
            size={18}
            color="#0f172a"
          />
        </View>
        <Text className="text-sm uppercase tracking-[0.25em] text-slate-400">
          {item.name}
        </Text>
      </View>

      <Text className="mb-2 text-2xl font-bold text-slate-900">
        ${item.price.toFixed(2)}
      </Text>

      <Text className="mb-4 text-sm leading-5 text-slate-500">
        {item.descriptions}
      </Text>

      <TouchableOpacity className="mt-auto rounded-2xl bg-slate-900 px-4 py-3">
        <Text className="text-center text-sm font-semibold text-white">
          Manage
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Main Vertical List */}
      <FlatList
        data={All_subscriptions}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
        ListHeaderComponent={() => (
          <>
            {/* Header */}
            <View className="mt-6 mb-6 flex-row items-center justify-between">
              <View>
                <Text className="text-sm uppercase text-slate-400">
                  Welcome back
                </Text>

                <Text className="text-3xl font-bold text-slate-900">
                  {HOME_USER.name}
                </Text>
              </View>

              <TouchableOpacity className="rounded-full bg-slate-900 px-5 py-2.5">
                <Text className="text-sm font-semibold text-white">
                  View
                </Text>
              </TouchableOpacity>
            </View>

            {/* Balance Card */}
            <View className="mb-8 rounded-3xl bg-cyan-500 px-5 py-6">
              <Text className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-100">
                Account balance
              </Text>

              <Text className="text-4xl font-bold text-white">
                ${HOME_BALANCE.amount.toFixed(2)}
              </Text>

              <View className="mt-4">
                <Text className="text-sm text-slate-100/90">
                  Next renewal
                </Text>

                <Text className="text-base font-semibold text-white">
                  {formatDate(HOME_BALANCE.nextRenewalDate)}
                </Text>
              </View>
            </View>

            {/* Section Header */}
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-slate-900">
                Upcoming subscriptions
              </Text>

              <Text className="text-sm text-slate-500">
                Swipe to browse
              </Text>
            </View>

            {/* Horizontal Scroll List */}
            <FlatList
              data={Upcoming_Subscriptions}
              keyExtractor={(item) => item.name}
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 12,
                paddingRight: 16,
              }}
              renderItem={({ item }) => (
                <SubscriptionCard item={item} />
              )}
            />

            <View className="mt-8 mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-slate-900">
                All subscriptions
              </Text>

              <Text className="text-sm text-slate-500">
                {All_subscriptions.length} active
              </Text>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <View className="mb-4 rounded-3xl bg-white p-5 shadow-md shadow-slate-200">
            <Text className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">
              {item.name}
            </Text>

            <Text className="mb-2 text-2xl font-bold text-slate-900">
              ${item.price.toFixed(2)}
            </Text>

            <Text className="mb-4 text-sm leading-5 text-slate-500">
              {item.descriptions}
            </Text>

            <TouchableOpacity className="mt-auto rounded-2xl bg-slate-900 px-4 py-3">
              <Text className="text-center text-sm font-semibold text-white">
                Manage
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}