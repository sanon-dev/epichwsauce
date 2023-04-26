import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    ...this.centerContainer,
  },
  loginRegisterContainer: {
    ...this.centerContainer,
  },  
  scanUploadContainer: {
    ...this.centerContainer,
    backgroundColor: DefaultTheme.colors.background,
  },
  savedScansContainer: {
    flex: 1,
    marginTop: 40,
    backgroundColor: DefaultTheme.colors.background,
    padding: 10,
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemContent: {
    marginLeft: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemResponse: {
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#666666',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  formContainer: {
    // styles for the login form fields
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
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
