import {
  IonAlert,
  IonButton,
  IonContent,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const NotificationBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Heads up!"
      message={message}
      buttons={['Close']}
    />
  );
};

const AccessPortal: React.FC = () => {
  const router = useIonRouter();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [notice, setNotice] = useState('');
  const [showNotice, setShowNotice] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      setNotice(error.message);
      setShowNotice(true);
      return;
    }

    setToastVisible(true);
    setTimeout(() => {
      router.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            backgroundImage: 'url("https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Generic-FTR-headers_V10.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Spotify-like dark theme
            borderRadius: '15px',
            padding: '30px',
            width: '100%',
            maxWidth: '420px',
            backdropFilter: 'blur(8px)', // Frosted glass effect
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <img
              src="https://www.gifservice.fr/img/gif-vignette-large/e422f5d08d2be71e02176a2643f09428/281711-spotify-computer-internet-multi-media.gif"
              alt="Spotify Logo"
              style={{
                width: '140px',
                height: '140px',
                margin: '0 auto 20px',
                display: 'block'
              }}
            />

            <h2 style={{
              color: '#1DB954',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              textAlign: 'center',
            }}>
              Log in to Your Spotify Portal
            </h2>

            {/* Email Input */}
            <div style={{ position: 'relative', marginBottom: '15px' }}>
              <input
                type="email"
                placeholder=" "
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#282828',
                  border: '1px solid #1DB954',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '12px 10px',
                  fontSize: '16px',
                  transition: 'box-shadow 0.3s ease',
                }}
              />
              {userEmail.length === 0 && (
                <label style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  color: '#1DB954',
                  fontSize: '16px',
                  pointerEvents: 'none',
                  transform: 'translateY(-50%)',
                  transition: '0.2s ease all',
                }}>
                  Email
                </label>
              )}
            </div>

            {/* Password Input */}
            <div style={{ position: 'relative', marginBottom: '25px' }}>
              <input
                type="password"
                placeholder=" "
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#282828',
                  border: '1px solid #1DB954',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '12px 10px',
                  fontSize: '16px',
                  transition: 'box-shadow 0.3s ease',
                }}
              />
              {userPassword.length === 0 && (
                <label style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  color: '#1DB954',
                  fontSize: '16px',
                  pointerEvents: 'none',
                  transform: 'translateY(-50%)',
                  transition: '0.2s ease all',
                }}>
                  Password
                </label>
              )}
            </div>

            {/* Login Button */}
            <IonButton
              expand="block"
              style={{
                backgroundColor: '#1DB954',
                color: '#ffffff',
                fontWeight: 'bold',
                borderRadius: '10px',
                marginBottom: '10px',
                transition: 'background-color 0.4s ease, box-shadow 0.3s ease',
              }}
              onClick={handleLogin}
            >
              Log In
            </IonButton>

            {/* Register Link */}
            <IonButton
              routerLink="/it35-lab/Register"
              expand="block"
              fill="clear"
              style={{
                color: '#1DB954',
                textDecoration: 'underline',
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
            >
              Need an account? Register here
            </IonButton>
          </div>
        </div>

        <NotificationBox message={notice} isOpen={showNotice} onClose={() => setShowNotice(false)} />

        <IonToast
          isOpen={toastVisible}
          onDidDismiss={() => setToastVisible(false)}
          message="Welcome! Redirecting to your dashboard..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default AccessPortal;
