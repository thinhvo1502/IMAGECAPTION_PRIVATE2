import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

function Welcome(props) {
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;

    return (
        <View style={styles.container}>

            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeTitle}>Image Caption</Text>
                <Text style={styles.welcomeSubtext}>Please select the option</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => {
                        navigate('CaptionGenerator');
                    }}
                >
                    <Text style={styles.optionButtonText}>Caption Generator</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => {
                        navigate('Setting');
                    }}
                >
                    <Text style={styles.optionButtonText}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.spacer} />

        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backgroundImage: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    welcomeMessage: {
        flex: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        marginBottom: 7,
        color: 'white',
        fontSize: 30,
    },
    welcomeTitle: {
        marginBottom: 7,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
    },
    welcomeSubtext: {
        marginBottom: 7,
        color: 'white',
        fontSize: 20,
    },
    options: {
        flex: 40,
    },
    optionButton: {
        borderColor: 'black',
        borderWidth: 1,
        height: 150,
        borderRadius: 20,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e'

    },
    optionButtonText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    spacer: {
        flex: 20,
    },
};

export default Welcome;
