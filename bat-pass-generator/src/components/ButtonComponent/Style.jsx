import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 6,
    lineHeight: 21,
    color: '#E5BF3C'
  },
  buttonDefault: {
    backgroundColor: 'black',
    
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E5BF3C',
    
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 32,
    elevation: 3,
    
  },
  buttonPressed: {
    backgroundColor: 'black',
    
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 32,
    elevation: 3,    
    
  }
});