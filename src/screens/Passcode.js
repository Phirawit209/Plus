import { 
        View, 
        Text, 
        Dimensions, 
        FlatList, 
        TouchableOpacity 
} from "react-native";

import React, { useState } from "react";
const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

const Passcode = () => {

        const [pincode, setPinCode] = useState([]);
        const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
        const pinLength = 6;
        const dialPadSize = width * 0.2;

        // DialPad Component
        const DialPad = ({ onPress }) => {

        return (
            <View style={{ height: 420 }}>
                <FlatList
                    data={dialPad}
                    scrollEnabled={false}
                    numColumns={3}
                    keyExtractor={(_, index) => index.toString()}
                    columnWrapperStyle={{ gap: 30 }}
                    contentContainerStyle={{ gap: 30 }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => onPress(item)}
                                disabled={item === ""}
                            >
                                <View style={{
                                    width: dialPadSize,
                                    height: dialPadSize,
                                    borderRadius: dialPadSize / 2,
                                    borderWidth: 2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    {item === "del" ? (
                                        <Ionicons name="backspace-outline" size={dialPadSize / 2} color="black" />
                                    ) : item === "" ? (
                                        <Ionicons name="finger-print" size={dialPadSize / 2} color="black" />
                                    ) : (
                                        <Text style={{
                                            fontSize: dialPadSize / 2,
                                            color: "black"
                                        }}>
                                            {item}
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        );
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 45,
                textAlign: "center",
                color: "black",
            }}>เข้าสู่ระบบด้วย PIN 6 หลัก</Text>

            <View style={{
                flexDirection: "row",
                gap: 20,
                marginBottom: 40,
                height: 30,
                alignItems: "flex-end",
            }}>
                {
                    [...Array(pinLength).keys()].map((index) => {

                        const isSelected = !!pincode[index];

                        return (
                            <View
                                key={index}
                                style={{
                                    width: 22,
                                    height: isSelected ? 22 : 2,
                                    borderRadius: 22,
                                    backgroundColor: "black",
                                }}
                            />
                        );
                    })
                }
            </View>

            <DialPad 
                onPress={(item) => {
                        if (item === "del") {
                    setPinCode((prevCode) => prevCode.slice(0,prevCode.length-1));
                } 
                        else if (typeof item === "number") {
                    setPinCode((prevCode) => [...prevCode, item]);
                }
            }} />
        </View>
    );
};

export default Passcode;
