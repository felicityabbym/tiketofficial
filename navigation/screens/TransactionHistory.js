import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.row}>
                <Text style={styles.textAboveContainer}>Today:</Text>
                <View style={styles.container1}>
                    <Text style={styles.containerText}>from: Marikina Station                     payment: Paypal</Text>
                    <Text style={styles.containerText}>to: Gilmore Station                             amount: 25</Text>
                    <View style={styles.timeViaContainer}>
                        <Text style={styles.containerText}> via: </Text>
                        <Text style={styles.containerTextWithYellowBackground}>   LRT2  </Text>
                        <Text style={styles.containerText}>                                       time: 2:32pm</Text>
                    </View>
                </View>
                <Text style={styles.textBelowContainer}>Yesterday, May 5</Text>
            </View>

            {/* Second Container */}
            <View style={styles.container2}>
                <Text style={styles.containerText}>from: Gilmore Station                        payment: Paypal</Text>
                <Text style={styles.containerText}>to: Marikina Station                            amount: 25</Text>
                <View style={styles.timeViaContainer}>
                    <Text style={styles.containerText}> via: </Text>
                        <Text style={styles.containerTextWithYellowBackground}>   LRT2  </Text>
                    <Text style={styles.containerText}>                                        time: 7:48pm</Text>
                </View>
            </View>

            {/* Third Container */}
            <View style={styles.container3}>
                <Text style={styles.containerText}>from: Marikina Station                      payment: Paypal</Text>
                <Text style={styles.containerText}>to: Gilmore Station                              amount: 25</Text>
                <View style={styles.timeViaContainer}>
                    <Text style={styles.containerText}> via: </Text>
                        <Text style={styles.containerTextWithYellowBackground}>   LRT2  </Text>
                    <Text style={styles.containerText}>                                        time: 9:51am</Text>

                    
                
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
        paddingTop: 30,
    },
    backText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#365486',
        marginBottom: 10,
        width: '100%',
        height: 60,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightHeader: {
        flex: 1,
        alignItems: 'flex-end',
    },
    headerImage: {
        width: 50,
        height: 30,
    },
    container1: {
        backgroundColor: '#DADADA',
        padding: 20,
        borderRadius: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    container2: {
        backgroundColor: '#DADADA',
        padding: 20,
        borderRadius: 20,
        height: 110,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    container3: {
        backgroundColor: '#DADADA',
        padding: 20,
        borderRadius: 20,
        height: 110,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    row: {
        marginBottom: 10,
        width: '90%',
    },
    icon: {
        color: 'white',
        marginRight: 5,
    },
    textAboveContainer: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black', // Changed color to black
    },
    textBelowContainer: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
    },
    containerText: {
        fontSize: 15,
        color: 'black',
    },
    containerTextWithYellowBackground: {
        fontSize: 18,
        color: 'black',
        backgroundColor: 'yellow',
    },
    timeViaContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    containerTextWithYellowBackground: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'yellow',
    width: '20%',
    borderRadius: 10, // Change the background color to orange
},
 text: {
         marginTop: 5, 
         textAlign: 'center', 
         fontSize: 20, 
         color: 'black'
         
        
    },

});
