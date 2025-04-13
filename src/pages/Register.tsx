import React, { useState } from 'react';
import {
     IonButton,
     IonContent,
     IonPage,
     IonInput,
     IonInputPasswordToggle,
     IonModal,
     IonText,
     IonTitle,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [showVerificationModal, setShowVerificationModal] = useState(false);
     const [showSuccessModal, setShowSuccessModal] = useState(false);

     const handleOpenVerificationModal = () => {
         if (!email.endsWith('@nbsc.edu.ph') && !email.endsWith('@gmail.com')) {
            alert('Only @nbsc.edu.ph or @gmail.com emails are allowed.');
            return;
        }
         if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
         setShowVerificationModal(true);
    };

    const doRegister = async () => {
        setShowVerificationModal(false);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert('Account creation failed: ' + error.message);
            return;
        }

         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);
 
         const { error: insertError } = await supabase.from('users').insert([
            {
                 username,
                 user_email: email,
                 user_password: hashedPassword,
            },
        ]);

        if (insertError) {
            alert('Failed to save user data: ' + insertError.message);
            return;
        }

        setShowSuccessModal(true);
    };

    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding" style={{ background: '#f9f9f9' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    gap: '40px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {/* Left Side */}
                    <div style={{ flex: 1, padding: '40px' }}>
                        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2c3e50' }}>
                            Welcome to Our Platform
                        </h1>
                        <p style={{ fontSize: '18px', marginTop: '20px', color: '#7f8c8d' }}>
                            Register now to unlock exclusive features and stay connected.
                        </p>
                    </div>

                    {/* Right Side - Form */}
                    <div style={{
                        flex: 1,
                        padding: '40px',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}>
                        <IonTitle style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</IonTitle>

                        <IonInput
                            label="Username"
                            labelPlacement="stacked"
                            fill="outline"
                            value={username}
                            placeholder="Your username"
                            onIonChange={e => setUsername(e.detail.value!)}
                        />
                        <IonInput
                            label="Email"
                            labelPlacement="stacked"
                            fill="outline"
                            type="email"
                            value={email}
                            placeholder="gmail and school email."
                            onIonChange={e => setEmail(e.detail.value!)}
                            style={{ marginTop: '20px' }}
                        />
                        <IonInput
                            label="Password"
                            labelPlacement="stacked"
                            fill="outline"
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onIonChange={e => setPassword(e.detail.value!)}
                            style={{ marginTop: '20px' }}
                        >
                            <IonInputPasswordToggle slot="end" />
                        </IonInput>
                        <IonInput
                            label="Confirm Password"
                            labelPlacement="stacked"
                            fill="outline"
                            type="password"
                            value={confirmPassword}
                            placeholder="Repeat your password"
                            onIonChange={e => setConfirmPassword(e.detail.value!)}
                            style={{ marginTop: '20px' }}
                        >
                            <IonInputPasswordToggle slot="end" />
                        </IonInput>

                        <IonButton expand="block" onClick={handleOpenVerificationModal} style={{ marginTop: '30px' }}>
                            Register
                        </IonButton>
                        <IonButton fill="clear" routerLink="/it35-lab" style={{ color: '#007bff', marginTop: '10px' }}>
                            Already have an account? Sign in
                        </IonButton>
                    </div>
                </div>

                {/* Modals */}
                <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                    <IonContent className="ion-padding">
                        <IonTitle style={{ textAlign: 'center' }}>Confirm Your Info</IonTitle>
                        <IonText>
                            <p style={{ textAlign: 'center' }}><strong>Username:</strong> {username}</p>
                            <p style={{ textAlign: 'center' }}><strong>Email:</strong> {email}</p>
                        </IonText>
                        <IonButton expand="block" fill="clear" onClick={() => setShowVerificationModal(false)}>
                            Cancel
                        </IonButton>
                        <IonButton expand="block" onClick={doRegister}>
                            Confirm
                        </IonButton>
                    </IonContent>
                 </IonModal>

                 <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                        <IonTitle>Registration Successful 🎉</IonTitle>
                        <IonText>
                            <p>Your account was created.</p>
                            <p>Check your inbox for confirmation.</p>
                        </IonText>
                        <IonButton routerLink="/it35-lab" style={{ marginTop: '20px' }}>
                            Go to Login
                        </IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Register;
