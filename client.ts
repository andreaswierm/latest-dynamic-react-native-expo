import { createClient } from "@dynamic-labs/client";
import { useReactiveClient } from "@dynamic-labs/react-hooks";
import { ReactNativeExtension } from "@dynamic-labs/react-native-extension";

export const dynamic= createClient({
  environmentId: "28cf2c56-a6e3-49d8-a654-9165089ccf71",
  apiBaseUrl: "https://app.dynamic-preprod.xyz/api/v0",
}).extend(ReactNativeExtension());

export const useDynamic = () => useReactiveClient(dynamic)
