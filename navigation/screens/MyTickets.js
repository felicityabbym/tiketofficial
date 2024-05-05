import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Chip } from 'react-native-elements';

const MyTickets = ({ navigation }) => {
    const goToMaps = () => {
        navigation.navigate('Maps'); // Navigate to Maps screen
    }

    const goToQRcode = () => {
        navigation.navigate('QRcode'); // Navigate to QRcode screen
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.text, { width: '100%', marginTop: 30, fontSize: 20 }]}>Paid Tickets</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.container1}>
                    {/* First Inner Row */}
                    <View style={styles.cardRow}>
                        <View style={styles.innerRowTextField}>
                            <Text style={[styles.text, { color: 'white', marginLeft: '4%' }]}> from: </Text>
                            <TextInput
                                style={styles.input}
                                editable={false}
                                placeholder=" Marikina Station"
                                placeholderTextColor="white"
                            />
                        </View>
                        <View style={styles.innerRowTextField}>
                            <Text style={[styles.textFIeld, { color: 'white', marginLeft: '4%' }]}> to: </Text>
                            <TextInput
                                style={styles.input}
                                color
                                editable={false}
                                placeholder=" Gilmore Station"
                                placeholderTextColor="white"
                            />
                        </View>
                    </View>

                    {/* Second Inner Row */}
                    <View style={styles.innerRow}>
                        {/* Column 1 */}
                        <Text style={[styles.text, { color: 'white' }]}>Date: </Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, { marginRight: '7%', color: 'white' }]}>05/06/24</Text>
                        {/* Column 3 */}
                        <Chip title="LRT 2" containerStyle={styles.chip} />
                    </View>

                    {/* Third Inner Row */}
                    <View style={styles.innerRow}>
                        {/* Column 1 */}
                        <Text style={[styles.text, { color: 'white' }]}>Payment: </Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, { marginRight: '20%', color: 'white' }]}>GCash</Text>
                        <Text style={[styles.amountText, { color: 'white' }]}>AMOUNT: ₱</Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, { padding: 5, color: 'white' }]}>25</Text>

                    </View>

                    {/* Fourth Row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>

                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                            <Button
                                title="Show QR Code / Receipt"
                                color="#376FCC"
                                onPress={goToQRcode}
                            />
                        </View>
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                            <Button
                                title="Show on Maps"
                                color="#376FCC"
                                onPress={goToMaps}
                            />
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
        padding: 8,
        borderRadius: 17,
    },
    row: {
        marginBottom: 20,
        width: '90%',
    },
    cardRow: {
        marginBottom: 10,
        width: '100%',
    },
    amountText: {
        fontSize: 20,
        marginLeft: '3%',
    },
    input: {
        flex: 1,
        height: 40,
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: '#365486',
        padding: 2,
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    innerRowTextField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: 'white',
        padding: 2,
        backgroundColor: "#2B436C",
        borderRadius: 6,
        color: "white",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
    },
    chip: {
        margin: 2,
        marginLeft: '45%'
    },
    textFIeld: {
        borderRadius: 6,
        backgroundColor: "#2B436C",

    },
});

export default MyTickets;
