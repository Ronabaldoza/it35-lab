import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Notification"
    message={message}
    buttons={['OK']}
  />
);

const Login: React.FC = () => {
   const navigation = useIonRouter();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [alertMessage, setAlertMessage] = useState('');
   const [showAlert, setShowAlert] = useState(false);
   const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 1000);
  };

  return (
    <IonPage>
      <IonContent className='ion-padding' style={{ backgroundImage: 'url(/assets/background.jpg)', backgroundSize: 'cover', height: '100vh' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderRadius: '15px', 
            padding: '30px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            width: '90%',
            maxWidth: '400px',
            textAlign: 'center',
          }}>
            <IonAvatar style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '110px',
              height: '110px',
              overflow: 'hidden',
              marginBottom: '20px',
              marginLeft: 'auto', // Center the avatar horizontally
              marginRight: 'auto', // Center the avatar horizontally
            }}>
              <IonIcon 
                icon={logoIonic}
                style={{ fontSize: '100px', color: '#33f508' }}
              />
            </IonAvatar>

            <h1 style={{
              fontWeight: 'bold',
              fontSize: '24px',
              marginBottom: '30px',
              color: '#333',
            }}>
              USER LOGIN
            </h1>

            <IonInput
              style={{ marginBottom: '15px', width: '100%', borderRadius: '20px' }}
              fill="outline"
              type="email"
              placeholder="Register Email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
            />

            <IonInput
              style={{ marginBottom: '20px', width: '100%', borderRadius: '20px' }}
              fill="outline"
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            
            <IonButton
              onClick={doLogin}
              shape="round"
              style={{
                display: 'block',
                margin: '20px auto',
                width: '80%',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #007bff, #00c6ff)',
                boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
              }}
            >
              Login
            </IonButton>

            <IonButton
              routerLink="/it35-lab/Register"
              fill="clear"
              shape="round"
              style={{
                display: 'block',
                margin: '20px auto',
                width: '80%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#007bff',
                border: '1.5px solid #007bff',
                borderRadius: '25px',
                backgroundColor: 'transparent',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 6px rgba(0, 123, 255, 0.15)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#007bff';
              }}
            >
              Don't have an account? Register here
            </IonButton>
          </div>

          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
