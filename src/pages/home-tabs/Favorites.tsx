import React from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from '@ionic/react';

function Favorites() {
  return (
    <IonAccordionGroup>

      <IonAccordion value="focus">
        <IonItem slot="header" color="primary">
          <IonLabel><strong>Focus</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Eliminate distractions and give your full attention to your goals. Small efforts consistently applied lead to big results.
        </div>
      </IonAccordion>

      <IonAccordion value="discipline">
        <IonItem slot="header" color="tertiary">
          <IonLabel><strong>Discipline</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Success doesn't come from motivation alone—it’s built on daily habits and self-discipline.
        </div>
      </IonAccordion>

      <IonAccordion value="resilience">
        <IonItem slot="header" color="success">
          <IonLabel><strong>Resilience</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Setbacks don’t define you. What matters is how you rise, learn, and keep going.
        </div>
      </IonAccordion>

      <IonAccordion value="consistency">
        <IonItem slot="header" color="warning">
          <IonLabel><strong>Consistency</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Keep showing up. Even on tough days, progress is made one step at a time.
        </div>
      </IonAccordion>

      <IonAccordion value="growth">
        <IonItem slot="header" color="danger">
          <IonLabel><strong>Growth Mindset</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Every challenge is an opportunity to grow. Embrace learning, not just grades.
        </div>
      </IonAccordion>

      <IonAccordion value="purpose">
        <IonItem slot="header" color="medium">
          <IonLabel><strong>Purpose</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Remember why you started. Your purpose is bigger than temporary stress.
        </div>
      </IonAccordion>

      <IonAccordion value="patience">
        <IonItem slot="header" color="light">
          <IonLabel><strong>Patience</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Great things take time. Trust the process and honor your own pace.
        </div>
      </IonAccordion>

      <IonAccordion value="belief">
        <IonItem slot="header" color="secondary">
          <IonLabel><strong>Self-Belief</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          You are capable of more than you know. Don’t doubt yourself—just begin.
        </div>
      </IonAccordion>

      <IonAccordion value="balance">
        <IonItem slot="header" color="warning">
          <IonLabel><strong>Balance</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Take care of your mind and body. Rest is part of productivity, not the opposite of it.
        </div>
      </IonAccordion>

      <IonAccordion value="courage">
        <IonItem slot="header" color="danger">
          <IonLabel><strong>Courage</strong></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Keep pushing forward, even when it's scary. Bravery is built in moments of doubt.
        </div>
      </IonAccordion>

    </IonAccordionGroup>
  );
}

export default Favorites;
