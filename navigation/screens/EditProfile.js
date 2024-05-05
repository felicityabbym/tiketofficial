import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supernam from '../../assets/supernam.jpg';
import flag from '../../assets/pelepens.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';

export default function EditProfile() {
    const navigation = useNavigation(); // Initialize navigation

    const [name, setName] = React.useState('Rafael Quimson');
    const [email, setEmail] = React.useState('manofsteel@gmail.com');
    const [phoneNumber, setPhoneNumber] = React.useState('+639 123 4567 89');
    const [address, setAddress] = React.useState('#69 Kryptonite Street');
    const [month, setMonth] = React.useState('January');
    const [day, setDay] = React.useState('3');
    const [year, setYear] = React.useState('2003');
    const [region, setRegion] = React.useState('Metro Manila');

    const months = [
        { label: 'January', value: 'January' },
        { label: 'February', value: 'February' },
        { label: 'March', value: 'March' },
        // Add other months here...
    ];

    const days = Array.from({ length: 31 }, (_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`,
    }));

    const years = Array.from({ length: 65 }, (_, i) => ({
        label: `${1960 + i}`,
        value: `${1960 + i}`,
    }));

    const regionOptions = [
        { label: 'Metro Manila', value: 'Metro Manila' },
    ];

    // Handle edit icon click
    const handleEditIconClick = () => {
        Alert.alert("No available photos", "", [{ text: "OK" }]);
    };

    // Handle save button click
    const handleSaveButtonClick = () => {
        Alert.alert("Changes cannot be saved", "[database not found]", [{ text: "OK" }]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container0}>
                <View style={styles.imageContainer}>
                    <Image source={supernam} style={styles.image} />
                    <TouchableOpacity style={styles.editIcon} onPress={handleEditIconClick}>
                        <Ionicons name="create-outline" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer0}>
                    <Text style={styles.bigText0}>{name}</Text>
                </View>
            </View>

            <View style={styles.editableContainer}>
                <Text style={styles.labelText}>Name</Text>
                <TextInput
                    style={styles.editableText}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.editableContainer1}>
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                    style={styles.editableText}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.phoneContainer}>
                <View style={styles.iconLabelContainer}>
                    <Image source={flag} style={styles.flagIcon} />
                    <Text style={styles.labelText}>Phone Number</Text>
                </View>
                <TextInput
                    style={styles.editableText}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            <View style={styles.editableContainer2}>
                <Text style={styles.labelText}>Address</Text>
                <TextInput
                    style={styles.editableText}
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            <View style={styles.dobContainer}>
                <Text style={styles.labelText}>Date of Birth</Text>
                <View style={styles.dobDropdownsContainer}>
                    <Dropdown
                        style={styles.dropdown}
                        data={months}
                        value={month}
                        onChange={setMonth}
                        labelField="label"
                        valueField="value"
                        placeholder="Month"
                        containerStyle={styles.dropdownItem}
                    />
                    <Dropdown
                        style={styles.dropdownDay}
                        data={days}
                        value={day}
                        onChange={setDay}
                        labelField="label"
                        valueField="value"
                        placeholder="Day"
                        containerStyle={styles.dropdownItem}
                    />
                    <Dropdown
                        style={styles.dropdownYear}
                        data={years}
                        value={year}
                        onChange={setYear}
                        labelField="label"
                        valueField="value"
                        placeholder="Year"
                        containerStyle={styles.dropdownItem}
                    />
                </View>
            </View>

            <View style={styles.regionCountryContainer}>
                <View style={styles.regionContainer}>
                    <Text style={styles.labelText}>Region</Text>
                    <Dropdown
                        style={styles.regionDropdown}
                        data={regionOptions}
                        value={region}
                        onChange={setRegion}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Region"
                        containerStyle={styles.dropdownItem}
                    />
                </View>

                <View style={styles.countryContainer}>
                    <Text style={styles.labelText}>Country</Text>
                    <Text style={styles.constantText}>Philippines</Text>
                </View>
            </View>

            <View style={styles.buttonsContainer1}>
                <TouchableOpacity style={styles.button1} onPress={handleSaveButtonClick}>
                    <Text style={styles.buttonText1}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: "center",
    },
    container0: {
        position: 'absolute',
        backgroundColor: '#2B436C',
        paddingTop: 20,
        height: 150,
        width: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
        borderRadius: 12, 
        padding: 5,
        paddingHorizontal: 8,
    },
    textContainer0: {
        flex: 1,
        alignItems: 'center',
    },
    bigText0: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 8,
    },
    editableContainer: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 170,
        width: '80%',
        borderRadius: 10,
        height: 50,
    },
    labelText: {
        color: 'gray',
        fontSize: 14,
        marginBottom: 1,
    },
    editableText: {
        fontSize: 16,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
    },
    editableContainer1: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 10,
        width: '80%',
        borderRadius: 10,
        height: 50,
    },
    editableContainer2: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 10,
        width: '80%',
        borderRadius: 10,
        height: 50,
    },
    phoneContainer: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 10,
        width: '80%',
        borderRadius: 10,
        height: 50,
    },
    iconLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
    },
    flagIcon: {
        width: 24,
        height: 16,
        marginRight: 5,
    },
    dobContainer: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 10,
        width: '80%',
        borderRadius: 10,
        height: 65,
    },
    dobDropdownsContainer: {
        flexDirection: 'row',
        marginBottom: 90,
    },
    dropdown: {
        width: '35%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    dropdownDay: {
        width: '23%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginLeft: 2,
        marginRight: 2,
    },
    dropdownYear: {
        width: '30%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    dropdownItem: {
        height: 35,
        width: '27%',
    },
    regionCountryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Change to distribute space evenly
        width: '80%',
        alignSelf: 'center',
    },
    regionContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: 60,
        marginRight: 5,
    },
    regionDropdown: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        height: 25,
    },
    countryContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderTopWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: 60,
        marginLeft: 5,
    },
    constantText: {
        fontSize: 16,
        color: 'black',
    },
    buttonsContainer1: {
        marginTop: 'auto',
        width: '90%',
        justifyContent: 'center', // Center the Save button horizontally
    },
    button1: {
        backgroundColor: '#2B436C',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        borderColor: '#2B436C',
        borderWidth: 2,
        width: '100%', // Make the Save button take full width of the container
    },
    buttonText1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
