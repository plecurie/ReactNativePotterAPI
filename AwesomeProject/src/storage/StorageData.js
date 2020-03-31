import AsyncStorage from '@react-native-community/async-storage';


export default function StorageData() {

    let STORAGE_KEY = '$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi';

    const getData = async () => {
        try {
            AsyncStorage.setItem('@APIKey', key, () => {
                AsyncStorage.getItem('@APIKey', (err, result) => {
                    console.log(result)
                });
            })
        } catch (e) {
            console.error(e)
        }
    };

}

