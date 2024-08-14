import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',

    backgroundColor: "#333333",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    backgroundColor: "#4D4D4D",
    flexDirection: 'column',
    borderColor: '#FFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 20,
    
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems:'center',

    borderRadius:5,    
  }
  
 
});