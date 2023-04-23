import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
      textAlign: 'center',
    },
    subheading: {
      fontSize: 20,
      marginBottom: 20,
      color: '#666666',
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      margin: 10,
      borderRadius: 20,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      marginLeft: 5,
    },
  });
  
  export { styles };
  