import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#282828',
  },
  headerBar: {
    height: 20,
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686868',
  },
  footer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686868',
  },
  profiles: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  picture: {
    margin: 20,
    padding: 2,
    width: 50,
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F8F8F8',
  },
  instructions: {
    textAlign: 'center',
    color: '#D3D3D3',
    marginBottom: 5,
  },
  hero: {
    textAlign: 'center',
    color: '#D3D3D3',
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#F8F8F8',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  searchInputBox: {
    borderRadius: 8,
    backgroundColor: 'whitesmoke',
    borderColor: '#F8F8F8',
    height: 40,
    width: 220,
    textAlign: 'center',
  },
  inputBox: {
    backgroundColor: 'whitesmoke',
    borderColor: '#F8F8F8',
    height: 40,
    width: 220,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
  },
  button: {
    backgroundColor: '#585858',
    margin: 2,
    padding: 10,
    borderRadius: 100,
  },
  login: {
    height: 250,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 20,
  },
  loginButton: {
    backgroundColor: '#585858',
    marginTop: 40,
    padding: 5,
    borderRadius: 100,
    width: 100,
    minHeight: 30,
    marginLeft: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  webview: {
    backgroundColor: '#282828',
    height: 80,
  },
  message: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  messageBox: {
    minHeight: 50,
    marginBottom: 60,
    margin: 10,
    padding: 10,
    backgroundColor: '#AF0000',
    borderRadius: 5,
    zIndex: 1,
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  loadingSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  picker: {
    width: '100%',
  },
  pickerView: {
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    height: 100,
    backgroundColor: '#282828',
  },
  background: {
    flex: 1,
    minHeight: 500,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  playlistBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
  },
});
