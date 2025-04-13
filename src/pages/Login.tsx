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

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

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
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f8f9fa'
          }}
        >
          <div
            style={{
              width: '90%',
              maxWidth: '400px',
              padding: '30px 20px',
              backgroundColor: '#fff',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <IonAvatar style={{ margin: '0 auto', width: '80px', height: '80px' }}>
              <IonIcon icon={logoIonic} style={{ fontSize: '80px', color: '#33f508' }} />
            </IonAvatar>

            <h2 style={{ margin: '20px 0 10px', fontWeight: 'bold' }}>User Login</h2>

            <IonInput
              fill="outline"
              placeholder="Email"
              type="email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              style={{ marginTop: '20px' }}
            />

            <IonInput
              fill="outline"
              placeholder="Password"
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton
              expand="block"
              shape="round"
              style={{ marginTop: '25px', fontWeight: 'bold' }}
              onClick={doLogin}
            >
              Login
            </IonButton>

            <IonButton
              routerLink="/it35-lab/Register"
              fill="clear"
              shape="round"
              style={{
                marginTop: '10px',
                color: '#007bff',
                textDecoration: 'underline',
                fontSize: '15px'
              }}
            >
              Don't have an account? Register here
            </IonButton>
          </div>
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
      </IonContent>
    </IonPage>
  );
};

export default Login;
