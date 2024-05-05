import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Maps({ navigation }) {

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
    }
    
    const goToQRcode = () => {
        navigation.navigate('QRcode'); // Navigate to QRcode screen
    }

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.row}>
                <View style={styles.container1}>
                    {/* Image inside the container */}
                    <Image
                        source={require('../../assets/maps.png')}
                        style={{ width: '100%', height: '100%', resizeMode: 'cover' }} 
                        height to fill the container
                    />
                </View>
            </View>
            {/* Second Container */}
            <View style={styles.container2}>
                <TextInput
                    style={styles.input}
                    editable={false}
                    placeholder="from: Marikina Station"
                    placeholderTextColor="white"
                            />
                <TextInput
                    style={[styles.input, { marginTop: 10 }]} 
                    editable={false}
                    placeholder="to: Gilmore Station"
                    placeholderTextColor="white"
                />
                <View style={styles.innerRow}>
                </View>
                <Text style={styles.label}>Outbound: Mon, May 6</Text>
                <View style={styles.innerRow}>
                <Text style={styles.label}>Payment: GCash               AMOUNT: ₱25</Text>
                </View>
                {/* Button */}
                <TouchableOpacity style={styles.button} onPress={goToQRcode}>
                    <Text style={[styles.buttonText, { color: 'white' }]}>Show QR code/Receipt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    innerRow: {
        marginTop: 10,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    container1: {
        backgroundColor: '#365486',
        padding: 20,
        borderRadius: 20, 
        height: 400, 
        width: 370, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, 
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 1, 
    },
    container2: {
        backgroundColor: '#365486',
        padding: 18,
        borderRadius: 20, 
        height: 278, 
        width: 370, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
    },
    row: {
        marginBottom: 15,
     
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
        width: '100%',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: 'black',
    },
    buttonText: {
        fontSize: 20,
        marginLeft: 4,
        color: 'white', 
    },
    input: {
    height: 40,
    width: '100%',
    borderColor: '#2B436C',
    borderWidth: 1,
    backgroundColor: '#2B436C', 
    borderRadius: 8,
    paddingLeft: 10,
    color: 'white', 
    fontSize: 18, 
        
    },
    label: {
        color: 'white',
        fontSize: 18,
        marginTop: 8, 
        textAlign: 'left', 
        
    },
    button: {
        backgroundColor: '#376FCC', 
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'center', 
    },
});
