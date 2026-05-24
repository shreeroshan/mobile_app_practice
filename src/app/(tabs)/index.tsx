import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-amber-50">
      <Text className="text-xl font-bold text-blue-500 mb-6">
        Start tracking your routes.
      </Text>

      <Link href="/(tabs)/more" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl">
          <Text className="text-white text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}