import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

export default function QRcode() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <View style={styles.row}>
              <Text style={[styles.text, { marginTop: 5, textAlign: 'center', fontSize: 20, color: 'black' }]}>
                 QR-Code {'\n'} For Gcash Payment
              </Text>
          </View>

                    {/* QR Code Image */}
                    <View style={styles.qrCodeContainer}>
                        <QRCode value="Your QR Code Data Here" size={400} />
                    </View>

            <View style={styles.row}>
                <View style={styles.container1}>
                    {/* Ticket Information */}
                    <View style={styles.ticketInfoContainer}>
                        {/* First Inner Row */}
                        <View style={styles.cardRow}>
                            <View style={styles.row}>
                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>Reference Number:</Text>
                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>00213</Text>
                              <View style={styles.underline} />

                              <Text style={[styles.text, {  color: 'white',textAlign:'center' }]}>Date:</Text>
                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>05/06/2024</Text>
                              <View style={styles.underline} />                             

                              <Text style={[styles.text, {color: 'white',textAlign:'center' }]}>Expiry Time:</Text>
                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>05/07 2:232PM</Text>  
                              <View style={styles.underline} />                             

                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>Amount:</Text>
                              <Text style={[styles.text, { color: 'white',textAlign:'center' }]}>₱ 25</Text>  
                              <View style={styles.underline} />                                  
                            </View>
                        </View>

                        
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
    },
    container1: {
        backgroundColor: '#365486',
        padding: 1,
        borderRadius: 17,
        alignItems: 'center',
    },
    row: {
        marginBottom: 20,
        width: '70%',

    },
    qrCodeContainer: {
        marginVertical: 20,
        marginTop: -10,
    },
    ticketInfoContainer: {
        alignItems: 'center',
        marginTop: 5,
    },
    cardRow: {
        marginBottom: 10,
        width: '100%',
    },
    text: {
        fontSize: 15,
        color: 'white',
    },
    buttonContainer: {
        borderRadius: 6,
        overflow: 'hidden',
        width: '48%',
        marginBottom: 10,
        marginTop: -10,
    },
    underline: {
        height: 1,
        backgroundColor: 'white',
        width: 200, // Adjust this width as needed
        marginHorizontal: 5,
    },
});
