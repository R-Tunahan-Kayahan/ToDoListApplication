import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxU47JFlVnPcO9INPZ-9PrfVMf-3oph9o",

  authDomain: "taskflow-5ebb0.firebaseapp.com",

  projectId: "taskflow-5ebb0",

  storageBucket: "taskflow-5ebb0.firebasestorage.app",

  messagingSenderId: "18019126539",

  appId: "1:18019126539:web:cadfe1026d661ed7bce60e",
};

// burada firebase uygulamasını başlatıyoruz ve auth nesnesini alıyoruz
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//google provider tam olarak google ile giriş yapmamızı sağlıyor
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  //sayfa açılınca google giriş penceresi açılıyor
  prompt: "select_account",
});

//firebase ile google giriş yapmamızı sağlayan fonksiyon
async function firebaseGoogleLogin() {
  try {
    console.log("[Firebase] Google popup açılıyor...");

    // Google popup ile giriş yapıyoruz ve sonucu alıyoruz pop ile
    const result = await signInWithPopup(auth, googleProvider);

    const firebaseUser = result.user;

    if (!firebaseUser) {
      throw new Error("Firebase kullanıcı bilgisi alınamadı.");
    }

    // Firebase ID Token
    const firebaseToken = await firebaseUser.getIdToken();

    console.log("[Firebase] Kullanıcı doğrulandı:", {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName,
    });

    if (!firebaseToken) {
      throw new Error("Firebase ID token alınamadı.");
    }

    // burada Node-RED sunucusuna Firebase token ile giriş yapıyoruz ve uygulama token ve kullanıcı bilgilerini alıyoruz
    const response = await fetch("/api/firebaseauth", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        credential: firebaseToken,
      }),
    });

    // Response JSON
    const data = await response.json().catch(() => null);

    console.log("[Node-RED] Firebase Auth cevabı:", {
      status: response.status,

      data: data,
    });

    //hata olursa
    if (!response.ok) {
      return {
        success: false,

        message: data?.message || `Sunucu HTTP ${response.status} döndürdü.`,

        error: data?.error || null,
      };
    }

    if (!data) {
      return {
        success: false,

        message: "Sunucudan geçerli cevap alınamadı.",
      };
    }

    //node veri girmezse

    if (!data.success) {
      return {
        success: false,

        message: data.message || "Google ile giriş başarısız.",

        error: data.error || null,
      };
    }

    if (!data.token || !data.user) {
      return {
        success: false,

        message: "Sunucu token veya kullanıcı bilgisi döndürmedi.",
      };
    }

    console.log("[Google] Uygulama oturumu oluşturuldu.");

    return {
      success: true,

      token: data.token,

      user: data.user,
    };
  } catch (error) {
    console.error("[Firebase] Google Login Hatası:", error);

    const messages = {
      "auth/popup-closed-by-user": "Google giriş penceresi kapatıldı.",

      "auth/popup-blocked": "Tarayıcı Google giriş penceresini engelledi.",

      "auth/unauthorized-domain":
        "Bu alan adı Firebase Authentication içinde yetkili değil.",

      "auth/account-exists-with-different-credential":
        "Bu e-posta başka bir giriş yöntemiyle kayıtlı.",

      "auth/cancelled-popup-request": "Google giriş isteği iptal edildi.",

      "auth/network-request-failed": "Firebase bağlantısı kurulamadı.",
    };

    return {
      success: false,

      code: error.code || "unknown",

      message:
        messages[error.code] ||
        error.message ||
        "Google ile giriş sırasında hata oluştu.",
    };
  }
}

// firebaseGoogleLogin fonksiyonunu global olarak erişilebilir hale getiriyoruz yoksa tokenla kendini resetler

window.firebaseGoogleLogin = firebaseGoogleLogin;

console.log("[Firebase] Google Authentication hazır.");
