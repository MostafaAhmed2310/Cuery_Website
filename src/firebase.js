import firebase from "firebase";

class _Firebase {
    fcmToken = null;
  
    constructor() {
        let config = {
            apiKey: "AIzaSyDJ0g1KcuhW172Ju9bpg3yfGYU40f1vgT0",
            authDomain: "curey-9ac82.firebaseapp.com",
            databaseURL: "https://curey-9ac82-default-rtdb.firebaseio.com",
            projectId: "curey-9ac82",
            storageBucket: "curey-9ac82.appspot.com",
            messagingSenderId: "487851879496",
            appId: "1:487851879496:web:1cc31b68fa5c38d1133c7d",
            measurementId: "G-FHP2HN62YQ"
        };

        if (firebase.apps.length === 0) {
            firebase.initializeApp(config);
        }
        this.auth = firebase.auth();

        if (firebase.messaging.isSupported()) {
            this.messaging = firebase.messaging();
        } else {
            this.isMessagingSupported = false;
        }
    }

    getDataFromRealtimeDatabase(userId){
        var userId = userId;
        var starCountRef = firebase.database().ref('notifications/users/'+userId+'/unseen_count');
        return starCountRef;
    }
  
    setReCAPTCHA(id) {
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
            size: "invisible",
        });
    }
  
    async registerSW() {
        const regists = await navigator.serviceWorker
        .getRegistrations()
        .catch((err) => {
            console.log("[REGISTER SW ERROR]: ", err)
            return err
        });
        if (!Array.isArray(regists)) {
            console.log("[ERROR REGISERING SW]: ", regists);
        }
    
        if (regists.length > 0) {
            [this.registration] = regists;
            return this.registration;
        }
        console.log(`resgists length: `, regists.length > 0, "will register new one ...")
        try {
            const regis = await navigator.serviceWorker.register(
                "/firebase-message-sw.js"
            );
        
            this.registration = regis;
            return this.registration;
        } catch(err) {
            console.log("[NAVIGATOR SERVICE WORKER]: ", err)
            return null
        }
    }
  
    async getFCMToken() {
        if (this.fcmToken) return this.fcmToken;
        try {
            const token = await this.messaging.getToken({
                serviceWorkerRegistration: this.registration,
            });
            this.fcmToken = token;
            return this.fcmToken;
        } catch (error) {
            console.error("[FIREBASE ERROR]: ", error);
            this.fcmToken = null;
            return null;
        }
    }
  
    getIdFromConfirmation = (confirmationResult, code) => {
        return this.constructor._getIdFromConfirmation(confirmationResult, code);
    };
  
    static async _getIdFromConfirmation(confirmationResult, code) {
        try {
            const { user } = await confirmationResult.confirm(code);
            return await user.getIdToken();
        } catch (error) {
            console.log("[getIdFromConfirmation error]: ", error);
            return error;
        }
    };

}
export default new _Firebase()
