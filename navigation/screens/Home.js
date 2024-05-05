import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Chip } from 'react-native-elements';
import Modal from 'react-native-modal';


export default function Home({ navigation }) {
    const [selected, setSelected] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPaymentSuccessModalVisible, setIsPaymentSuccessModalVisible] = useState(false);


    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("  Maya");
    const [amount, setAmount] = useState(0);
    const handleTodayPress = () => {
          setSelectedDate(new Date());
        };
      
    const handleTomorrowPress = () => {
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          setSelectedDate(tomorrow);
        };

    const handlePaymentMethod = (method) => {
            setSelectedPaymentMethod(method);
        }
    
        const computeAmount = (origin, destination) => {
            const fares = {
                'recto-legarda': 15,
                'recto-pureza': 20,
                'recto-vmapa': 20,
                'recto-jruiz': 20,
                'recto-gilmore': 25,
                'recto-bettygo': 25,
                'recto-cubao': 25,
                'recto-anonas': 25,
                'recto-katipunan': 30,
                'recto-santolan': 30,
                'recto-marikina': 35,
                'recto-antipolo': 35,
                'legarda-recto': 15,
                'legarda-pureza': 15,
                'legarda-vmapa': 20,
                'legarda-jruiz': 20,
                'legarda-gilmore': 20,
                'legarda-bettygo': 25,
                'legarda-cubao': 25,
                'legarda-anonas': 25,
                'legarda-katipunan': 25,
                'legarda-santolan': 30,
                'legarda-marikina': 30,
                'legarda-antipolo': 35,
                'pureza-recto': 20,
                'pureza-legarda': 15,
                'pureza-vmapa': 15,
                'pureza-jruiz': 20,
                'pureza-gilmore': 20,
                'pureza-bettygo': 20,
                'pureza-cubao': 20,
                'pureza-anonas': 25,
                'pureza-katipunan': 25,
                'pureza-santolan': 30,
                'pureza-marikina': 30,
                'pureza-antipolo': 30,
                // Add more fares as needed
            };
    
            const key = `${origin}-${destination}`;
            return fares[key] || 0; // Return 0 if fare not found
        };
    
        const handleCompute = () => {
        const fareChoices = [25];
        const randomIndex = Math.floor(Math.random() * fareChoices.length);
        const randomFare = fareChoices[randomIndex];

        setAmount(randomFare);
    
    };

    const handlePayButtonPress = () => {
        setIsModalVisible(true);
        setTimeout(() => {
            setIsModalVisible(false);
            setIsPaymentSuccessModalVisible(true); // Show payment success modal
            setTimeout(() => {
                setIsPaymentSuccessModalVisible(false);
                navigation.navigate('QRpayment');
            }, 3000); // Navigate after 3 seconds
        }, 5000);
    };

    return (
        <View style={styles.container}>
            {/* First Row */}
            <View style={[styles.row, { flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Good Morning</Text>
                    <Text style={[styles.text, styles.bold]}>Book Single Journey</Text>
                    <Text style={[styles.text, styles.bold]}>Ticket</Text>
                </View>
                <Image source={require('../../assets/blueTextLogo.png')} style={styles.logo} />
            </View>

            {/* Second Row */}
            <View style={styles.row}>
                <OperatorComponent />
            </View>

            {/* Third Row */}
            <View style={styles.row}>
                <Text style={[styles.text, { width: '100%', marginTop: 10 }]}>Create a route</Text>
            </View>

            {/* Fourth Row */}
                
                <View style={styles.row}>

                <View style={styles.container1}>
                        {/* First Inner Row */}
                        <View style={styles.cardRow}>
                        <OriginComponent handleCompute={handleCompute} />
                        <DestinationComponent handleCompute={handleCompute}/>
                        </View>

                        {/* Second Inner Row */}
                        <View style={[styles.innerRow, { backgroundColor: '#365486', bottom: 15 }]}>
                        {/* Column 1 */}
                        <Text style={[styles.text, {marginLeft: '3%', marginRight: '1%', color: 'white'}]}>via:</Text>
                        {/* Column 2 */}
                        <Chip title="LRT 2" containerStyle={styles.chip} />
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                        <Button
                            title="Compute"
                            color="#2B436C"
                            onPress={handleCompute}
                            /></View>
                        
                        
                        </View>
                        

                        {/* Third Inner Row */}
                        <View style={styles.innerRow}>
                        {/* Column 1 */}
                        <Text style={styles.text}>Date: </Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, {marginRight: '7%'}]}>{selectedDate.toDateString()}</Text>
                        {/* Column 3 */}
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                        <Button
                            title="Today"
                            color="#2B436C"
                            onPress={handleTodayPress}                        /></View>
                        {/* Column 4 */}
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                        <Button
                            title="Tomorrow"
                            color="#2B436C"
                            onPress={handleTomorrowPress}
                            /></View>
                        
                        </View>

                        {/* Fourth Inner Row */}
                        <View style={styles.innerRow}>
                        {/* Column 1 */}
                        <Text style={styles.text}>Payment:</Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, {marginRight: '30%'}]}>{selectedPaymentMethod}</Text>
                        {/* Column 3 */}
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                        <Button
                            title="Maya"
                            color="#2B436C"
                            onPress={() => handlePaymentMethod('    Maya')}                        /></View>
                        {/* Column 4 */}
                        <View style={{ borderRadius: 6, overflow: 'hidden' }}>
                        <Button
                            title="GCash"
                            color="#2B436C"
                            onPress={() => handlePaymentMethod('  GCash')}
                            /></View>
                        
                        </View>

                        {/* Fifth Row */}
                        <View style={styles.innerRow}>
                        {/* Column 1 */}
                        <Text style={styles.amountText}>AMOUNT:  ₱</Text>
                        {/* Column 2 */}
                        <Text style={[styles.text, { padding: 5 }]}>{amount}</Text>
                        </View>

                        {/* Sixth Row */}
                        <View style={[styles.payButton, { overflow: 'hidden'}]}>
                        <Button
                            title="PAY"
                            color="#365486"
                            onPress={handlePayButtonPress}
                        />
                        </View>
                        {/* First Modal */}
                        <Modal isVisible={isModalVisible}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalText}>
                                    We're processing your payment...
                                </Text>
                            </View>
                        </Modal>

                        {/* Second Modal (Payment Success) */}
                        <Modal isVisible={isPaymentSuccessModalVisible}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalText}>
                                    Payment successful, generating QR...
                                </Text>
                            </View>
                        </Modal>
                    </View>

                </View>

                
        </View>
    );
}

const station = [
    { label: 'Recto', value: '1' },
    { label: 'Legarda', value: '2' },
    { label: 'Pureza', value: '3' },
    { label: 'V. Mapa', value: '4' },
    { label: 'J. Ruiz', value: '5' },
    { label: 'Gilmore', value: '6' },
    { label: 'Betty Go Belmonte', value: '7' },
    { label: 'Araneta-Cubao', value: '8' },
    { label: 'Anonas', value: '9' },
    { label: 'Katipunan', value: '10' },
    { label: 'Santolan', value: '11' },
    { label: 'Marikina', value: '12' },
    { label: 'Antipolo', value: '13' },
];

const operator = [
    { label: 'LRT Line 1 (Coming soon!)', value: '1', disabled: true },
    { label: 'LRT Line 2', value: '2' },
    { label: 'LRT 3 (Coming soon!)', value: '3', disabled: true },
    { label: 'MRT Line 3 (Coming soon!)', value: '4', disabled: true },
];

const OperatorComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderItem = (item) => {
        const isDisabled = item.disabled ? { opacity: 0.5 } : {};
        return (
            <View style={[styles.item, isDisabled]}>
                <Text style={[styles.textItem, isDisabled]}>{item.label}</Text>
                {item.value === value && (
                    <Ionicons
                        style={[styles.searchIcon, isDisabled]}
                        color={isDisabled ? 'gray' : 'black'}
                        name="checkmark"
                        size={18}
                    />
                )}
            </View>
        );
    };

    return (
        <Dropdown
            style={styles.operatordropdown}
            placeholderStyle={styles.placeholderSearch}
            selectedTextStyle={styles.selectedOperator}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={operator}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Search Operator"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
            }}
            renderLeftIcon={() => (
                <Ionicons
                    style={styles.searchIcon}
                    color={isFocus ? 'blue' : 'black'}
                    name="search"
                    size={18}
                />
            )}
            renderItem={renderItem}
        />
    );
}



const OriginComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const originDropdown = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'white' }]}>
                    From
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container1}>
            {originDropdown()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#2B436C' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={station}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Origin' : '...'}
                searchPlaceholder="Search"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Ionicons
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="radio-button-on" 
                    size={18}
                />
                )}
            />
            
            
        </View>

        
    );
}

const DestinationComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const destinationDropdown = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'white' }]}>
                    To
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container1}>
            {destinationDropdown()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#2B436C' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={station}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Destination' : '...'}
                searchPlaceholder="Search"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Ionicons
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="pin" 
                    size={18}
                />
                )}
            />
            
            
        </View>

        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    payButton: {
        backgroundColor: '#365486',
        width: '100%',
        
    },
    text: {
        fontSize: 20,
    },
    amountText: {
        fontSize: 20,
        marginLeft: '60%',
    },
    bold: {
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 10,
        width: '100%',
        height: 51,
        backgroundColor: 'white',
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
        color: '#2B436C',
    },
    input: {
        flex: 1,
        height: 40,
    },
    card: {
        height: 100,
        backgroundColor: '#eaeaea',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 65,
        height: 40,
        marginTop: 15,
        marginRight: 4,
    },
    dropdown: {
        height: 50,
        borderColor: '#2B436C',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%',
        color: 'white',
        backgroundColor: '#2B436C'
    },
    operatordropdown: {
        height: 50,
        borderColor: '#2B436C',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%',
        color: 'black',
        backgroundColor: 'white'
        
    },
    icon: {
        marginRight: 5,
        color: 'white',
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 0,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: 'white',

    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white',
    },
    placeholderSearch: {
        fontSize: 16,
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
    },
    selectedOperator: {
        fontSize: 16,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
        
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
    },
    button: {
        borderRadius: 6,
        color: 'white',
        textTransform: 'capitalize',
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: 'white',
        padding: 2,
    },
    text: {
        fontSize: 16,
    },
    chip: {
        margin: 2,
        marginRight: '43%'
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
    },

});
