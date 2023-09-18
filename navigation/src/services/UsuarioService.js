import AsyncStorage from '@react-native-async-storage/async-storage';

constUSERNAME_KEY='LOGIN_username';
constPASSWORD_KEY='LOGIN_password';

class UsuarioService {
  static login = async (userName, password) => {
    // Obtener las credenciales almacenadas e intentar iniciar sesión.creedenciales
    const creedenciales = await UsuarioService.obtenerCredenciales();
    if (creedenciales && creedenciales.userName === userName && creedenciales.password === password) {
      return true; // Credenciales válidas, el inicio de sesión es exitoso.
    } else {
      return false; // Credenciales inválidas, el inicio de sesión falla.
    }
  }

  static automaticLogin = async () => {
    // Obtener las credenciales almacenadas e intentar iniciar sesión automáticamente.
    const savedUserName = await AsyncStorage.getItem("LOGIN_username");
    const savedUserPassword = await AsyncStorage.getItem("LOGIN_password");
    if ((savedUserName!="") && (savedUserPassword!="")) {
      return true; 
    }
    else{
        return false; 
    }
 
  }

  // Eliminar las credenciales almacenadas al cerrar sesión.
  static eliminarCredenciales = async () => {
    await AsyncStorage.removeItem(USERNAME_KEY);
    await AsyncStorage.removeItem(PASSWORD_KEY);
  }

  static almacenarCredenciales = async (userName, password) => {
    // Almacena las credenciales en AsyncStorage (para leerlas al iniciar la próxima vez).
    await AsyncStorage.setItem(USERNAME_KEY, userName);
    await AsyncStorage.setItem(PASSWORD_KEY, password);
  }

  static obtenerCredenciales = async () => {
    // Obtener las credenciales almacenadas desde AsyncStorage.
    const storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
    const storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
    const returnValue = { 'userName': storedUserName, 'password': storedPassword };
    return returnValue;
  }
}

export default UsuarioService;
