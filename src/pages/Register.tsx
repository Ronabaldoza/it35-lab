import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonTitle,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAlert,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const NotificationBanner: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Heads up!"
      message={message}
      buttons={['Got it!']}
    />
  );
};

const SignUpPortal: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const handleVerificationOpen = () => {
    if (!email.endsWith("@nbsc.edu.ph")) {
      setAlertText("Registration is restricted to @nbsc.edu.ph emails only.");
      setAlertVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertText("Oops! Your passwords don’t match.");
      setAlertVisible(true);
      return;
    }

    setShowVerifyModal(true);
  };

  const performRegistration = async () => {
    setShowVerifyModal(false);

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error("Signup failed: " + error.message);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const { error: dbError } = await supabase.from("users").insert([{
        username,
        user_email: email,
        user_firstname: firstName,
        user_lastname: lastName,
        user_password: hashedPassword,
      }]);

      if (dbError) throw new Error("Failed to save to database: " + dbError.message);

      setShowCongratsModal(true);
    } catch (err) {
      setAlertText(err instanceof Error ? err.message : "Unexpected error occurred.");
      setAlertVisible(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            backgroundImage: 'url("https://149366088.v2.pressablecdn.com/wp-content/uploads/2023/05/360_F_524278838_KRh51xBzj8UWZFu0ex9nPMIYeTC70e9N.jpg")',
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
            backgroundColor: 'rgba(18, 18, 18, 0.9)',
            borderRadius: '15px',
            padding: '30px',
            width: '100%',
            maxWidth: '420px',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <img
              src="https://www.gifservice.fr/img/gif-vignette-large/e422f5d08d2be71e02176a2643f09428/281711-spotify-computer-internet-multi-media.gif"
              alt="Spotify Logo"
              style={{
                width: '140px',
                height: '140px',
                margin: '0 auto 20px',
                display: 'block',
              }}
            />

            <h2 style={{
              color: '#1DB954',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '30px',
              textAlign: 'center',
            }}>
              Get Started – Create Profile
            </h2>

            <IonInput
              label="User Handle"
              labelPlacement="floating"
              fill="outline"
              type="text"
              placeholder="Pick a unique handle"
              value={username}
              onIonInput={(e) => setUsername(e.detail.value!)}
              style={{ marginBottom: '15px' }}
            />
            <IonInput
              label="Given Name"
              labelPlacement="floating"
              fill="outline"
              type="text"
              placeholder="Your first name"
              value={firstName}
              onIonInput={(e) => setFirstName(e.detail.value!)}
              style={{ marginBottom: '15px' }}
            />
            <IonInput
              label="Family Name"
              labelPlacement="floating"
              fill="outline"
              type="text"
              placeholder="Your last name"
              value={lastName}
              onIonInput={(e) => setLastName(e.detail.value!)}
              style={{ marginBottom: '15px' }}
            />
            <IonInput
              label="Institutional Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="you@nbsc.edu.ph"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
              style={{ marginBottom: '15px' }}
            />
            <IonInput
              label="Set Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Choose a secure password"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
              style={{ marginBottom: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput
              label="Repeat Password"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onIonInput={(e) => setConfirmPassword(e.detail.value!)}
              style={{ marginBottom: '20px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton
              expand="block"
              style={{
                backgroundColor: '#1DB954',
                color: '#ffffff',
                fontWeight: 'bold',
                borderRadius: '10px',
                marginBottom: '10px',
              }}
              onClick={handleVerificationOpen}
            >
              Complete Sign Up
            </IonButton>

            <IonButton
              routerLink="/it35-lab"
              expand="block"
              fill="clear"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '14px',
              }}
            >
              Already registered? Log in instead
            </IonButton>
          </div>
        </div>

        <IonModal isOpen={showVerifyModal} onDidDismiss={() => setShowVerifyModal(false)}>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '25%' }}>
              <IonCardHeader>
                <IonCardTitle>Review Your Info</IonCardTitle>
                <IonCardSubtitle>Before we proceed, take a final look:</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <strong>Handle:</strong> {username}<br />
                <strong>Email:</strong> {email}<br />
                <strong>Name:</strong> {firstName} {lastName}
              </IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <IonButton fill="clear" onClick={() => setShowVerifyModal(false)}>Cancel</IonButton>
                <IonButton color="primary" onClick={performRegistration}>Proceed</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        <IonModal isOpen={showCongratsModal} onDidDismiss={() => setShowCongratsModal(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center', marginTop: '30%' }}>
            <IonTitle>You're All Set! 🎉</IonTitle>
            <IonText>
              <p>Your profile has been successfully created.</p>
              <p>Make sure to verify your email address.</p>
            </IonText>
            <IonButton routerLink="/it35-lab" color="primary">
              Go to Login Page
            </IonButton>
          </IonContent>
        </IonModal>

        <NotificationBanner message={alertText} isOpen={alertVisible} onClose={() => setAlertVisible(false)} />
      </IonContent>
    </IonPage>
  );
};

export default SignUpPortal;
