import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

export default function QRcode() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 5, textAlign: 'center', fontSize: 20, color: 'black' }]}>
                QR-Code {'\n'} For Gcash Payment
            </Text>

            <View style={styles.qrCodeContainer}>
                {/* QR Code Image */}
                <QRCode value="Your QR Code Data Here" size={300} />
            </View>

            <View style={styles.ticketInfoContainer}>
                {/* Ticket Information */}
                <View style={styles.cardRow}>
                    <Text style={[styles.text, { fontSize: 18, marginLeft: '5%', color: 'white' }]}>Reference Number: 00213</Text>
                    <View style={styles.underline} />
                    <Text style={[styles.text, { fontSize: 18, marginLeft: '11%', color: 'white' }]}>{'\n'} Date: 05/06/2024</Text>
                    <View style={styles.underline} />
                    <Text style={[styles.text, { fontSize: 18, color: 'white' }]}>{'\n'}Expiry Time: 05/07 2:32PM</Text>
                    <View style={styles.underline} />
                    <View style={styles.innerRowTextField}>
                        <Text style={[styles.text, { color: 'white', textAlign: 'center', width: '50%' }]}>From:</Text>
                        <TextInput
                            style={[styles.input, { width: '80%' }]}
                            editable={false}
                            placeholder="Marikina Station"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.innerRowTextField}>
                        <Text style={[styles.text, { color: 'white', textAlign: 'center', width: '50%' }]}>To:</Text>
                        <TextInput
                            style={[styles.input, { width: '80%' }]}
                            editable={false}
                            placeholder="Gilmore Station"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.innerRowTextField}>
                        <Text style={[styles.text, { color: 'white', textAlign: 'center', width: '50%' }]}>Amount:</Text>
                        <TextInput
                            style={[styles.input, { width: '80%' }]}
                            editable={false}
                            placeholder="₱ 25"
                            placeholderTextColor="white"
                        />
                    </View>
                </View>

                {/* QR Code Button */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="QR-CODE"
                        color="#376FCC"
                        onPress={() => navigation.navigate('QRpage')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    qrCodeContainer: {
        marginVertical: 20,
        backgroundColor: '#365486',
        padding: 12,
        borderRadius: 17,
    },
    ticketInfoContainer: {
        backgroundColor: '#365486',
        padding: 8,
        borderRadius: 17,
        alignItems: 'center',
    },
    cardRow: {
        marginBottom: 10,
        width: '100%',
    },
    input: {
        flex: 1,
        height: 40,
    },
    innerRowTextField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: '#2B436C',
        borderRadius: 6,
        color: 'white',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
    buttonContainer: {
        borderRadius: 6,
        overflow: 'hidden',
        width: '48%',
    },
    underline: {
        height: 1,
        backgroundColor: 'white',
        width: 230, // Adjust this width as needed
        marginHorizontal: 5,
    },
});
