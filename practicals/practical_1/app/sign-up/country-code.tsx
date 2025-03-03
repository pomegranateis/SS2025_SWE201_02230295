import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const popularCountries = [
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
];

const allCountries = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
];

export default function CountryCodeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [countries] = useState([...popularCountries, ...allCountries]);

  const filteredCountries = countries.filter((item) => {
    const lowerSearch = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerSearch) ||
      item.code.includes(search.replace("+", ""))
    );
  });

  const handleSelect = (countryCode: string) => {
    router.replace(`/sign-up?code=${encodeURIComponent(countryCode)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search country code</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type country name or country code"
        value={search}
        onChangeText={setSearch}
      />

      {search.length === 0 && (
        <Text style={styles.sectionTitle}>Popular countries</Text>
      )}

      <FlatList
        data={filteredCountries}
        keyExtractor={(item, index) => `${item.code}-${index}`}
        ListHeaderComponent={
          search.length === 0 ? (
            <View>
              {popularCountries.map((item) => (
                <TouchableOpacity
                  key={item.code}
                  style={styles.countryItem}
                  onPress={() => handleSelect(item.code)}
                >
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.countryName}>{item.name}</Text>
                  <Text style={styles.countryCode}>{item.code}</Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.sectionTitle}>All countries</Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => {
          if (
            search.length === 0 &&
            popularCountries.some((p) => p.code === item.code)
          ) {
            return null;
          }
          return (
            <TouchableOpacity
              style={styles.countryItem}
              onPress={() => handleSelect(item.code)}
            >
              <Text style={styles.flag}>{item.flag}</Text>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.countryCode}>{item.code}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  flag: { fontSize: 20, marginRight: 12 },
  countryName: { flex: 1, fontSize: 16 },
  countryCode: { fontSize: 16, color: "#666" },
});
