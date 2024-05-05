import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Menu() {
    const navigation = useNavigation();

    // This is a reusable button component that includes icons on both sides of the text
    const ButtonWithIcons = ({ leftIcon, text, rightIcon, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <View style={styles.leftContainer}>
                    <Ionicons name={leftIcon} size={24} style={styles.icon} />
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
                <Ionicons name={rightIcon} size={24} style={styles.icon} />
            </TouchableOpacity>
        );
    };

    // Navigation functions
    const goToAccount = () => {
        navigation.navigate('Account');
    };

    const goToRating = () => {
        navigation.navigate('Rating');
    };

    const goToTransactionHistory = () => {
        navigation.navigate('TransactionHistory');
    };

    const goToAboutUs = () => {
        navigation.navigate('Aboutus');
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.container1}>
                    {/* My Profile Button */}
                    <View style={[styles.innerRow, { marginTop: 20 }]}>
                        <ButtonWithIcons
                            leftIcon="person-circle-outline"
                            text="My Profile"
                            rightIcon="chevron-forward-outline"
                            onPress={goToAccount}
                        />
                    </View>

                    {/* Transaction History Button */}
                    <View style={styles.innerRow}>
                        <ButtonWithIcons
                            leftIcon="newspaper-outline"
                            text="Transaction History"
                            rightIcon="chevron-forward-outline"
                            onPress={goToTransactionHistory}
                        />
                    </View>

                    {/* Rate Us Button */}
                    <View style={styles.innerRow}>
                        <ButtonWithIcons
                            leftIcon="star-outline"
                            text="Rate Us!"
                            rightIcon="chevron-forward-outline"
                            onPress={goToRating}
                        />
                    </View>

                    {/* About Us Button */}
                    <View style={[styles.innerRow, { marginBottom: 50 }]}>
                        <ButtonWithIcons
                            leftIcon="information-circle-outline"
                            text="About Us"
                            rightIcon="chevron-forward-outline"
                            onPress={goToAboutUs}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    container1: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    row: {
        marginBottom: 20,
        width: '90%',
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: 'white',
        padding: 2,
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        width: '100%',
        marginBottom: 5,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: 'black',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
    },
});
