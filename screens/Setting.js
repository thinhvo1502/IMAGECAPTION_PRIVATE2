import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";

function Option(props) {
    const navigation = useNavigation();
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // Mặc định chọn tiếng Anh

    const toggleSound = () => {
        setIsSoundEnabled(!isSoundEnabled);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
    };

    // Tạo biến languageText để lưu trữ các chuỗi văn bản cho ngôn ngữ được chọn
    let languageText = {
        en: {
            backButtonText: "Back",
            languageButtonEN: "English",
            languageButtonVI: "Vietnamese",
            soundLabel: "Language",
            soundButtonText: "Sound",

        },
        vi: {
            backButtonText: "Quay lại",
            languageButtonEN: "Tiếng Anh",
            languageButtonVI: "Tiếng Việt",
            soundLabel: "Ngôn ngữ ",
            soundButtonText: "Âm thanh",
        },
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>{languageText[selectedLanguage].backButtonText}</Text>
            </TouchableOpacity>

            <Text style={styles.label}>{languageText[selectedLanguage].soundLabel}</Text>
            <View style={styles.languageContainer}>
                <TouchableOpacity
                    style={[
                        styles.languageButton,
                        selectedLanguage === "en" ? styles.selectedLanguage : null,
                    ]}
                    onPress={() => selectLanguage("en")}
                >
                    <Text style={styles.buttonText}>{languageText[selectedLanguage].languageButtonEN}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.languageButton,
                        selectedLanguage === "vi" ? styles.selectedLanguage : null,
                    ]}
                    onPress={() => selectLanguage("vi")}
                >
                    <Text style={styles.buttonText}>{languageText[selectedLanguage].languageButtonVI}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>{languageText[selectedLanguage].soundButtonText}</Text>
            <TouchableOpacity
                style={[
                    styles.soundButton,
                    isSoundEnabled && styles.soundEnabled,
                ]}
                onPress={toggleSound}
            >
                <Text style={styles.buttonText}>{languageText[selectedLanguage].soundButtonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    backButton: {
        backgroundColor: '#1e1e1e',
        width: 250,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },

    label: {
        fontSize: 30,
        margin: 10,
        color: 'white',
        fontWeight: "bold",
        marginTop: 30

    },
    languageContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    languageButton: {
        backgroundColor: "grey",
        width: 160,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 5
    },
    selectedLanguage: {
        backgroundColor: "blue", // Màu xanh khi nút được chọn
    },
    soundButton: {
        backgroundColor: "grey",
        width: 200,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    soundEnabled: {
        backgroundColor: "blue",
    },
});

export default Option;
