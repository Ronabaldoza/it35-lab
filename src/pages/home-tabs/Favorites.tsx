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
      <IonAccordion value="first">
        <IonItem slot="header" color="primary">
          <IonLabel>Faith</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <strong>Hebrews 11:1</strong> — Now faith is confidence in what we hope for and assurance about what we do not see.
        </div>
      </IonAccordion>

      <IonAccordion value="second">
        <IonItem slot="header" color="tertiary">
          <IonLabel>Love</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <strong>1 Corinthians 13:4-5</strong> — Love is patient, love is kind. It does not envy, it does not boast, it is not proud.
        </div>
      </IonAccordion>

      <IonAccordion value="third">
        <IonItem slot="header" color="success">
          <IonLabel>Strength</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <strong>Philippians 4:13</strong> — I can do all things through Christ who strengthens me.
        </div>
      </IonAccordion>

      <IonAccordion value="fourth">
        <IonItem slot="header" color="warning">
          <IonLabel>Guidance</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <strong>Proverbs 3:5-6</strong> — Trust in the Lord with all your heart and lean not on your own understanding.
        </div>
      </IonAccordion>

      <IonAccordion value="fifth">
        <IonItem slot="header" color="danger">
          <IonLabel>Peace</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <strong>John 14:27</strong> — Peace I leave with you; my peace I give you. I do not give to you as the world gives.
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}

export default Favorites;
