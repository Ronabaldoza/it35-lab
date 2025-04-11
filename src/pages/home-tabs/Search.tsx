import React from 'react';
import { 
  IonButtons,
  IonAccordion, 
  IonAccordionGroup, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="dark">
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Daily Reflections</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundColor: '#eafaf1' }}>
        <IonAccordionGroup>
          {/* Motivation Accordion */}
          <IonAccordion value="motivation">
            <IonItem slot="header" color="tertiary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Embrace the Day
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                Every sunrise brings a new chance to pursue your dreams with passion and courage.  
                Believe in yourself and face the day with strength.
              </p>
            </div>
          </IonAccordion>
          
          {/* Inspiration Accordion */}
          <IonAccordion value="inspiration">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Inspire and Be Inspired
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                Let every moment remind you that you are surrounded by purpose and grace. 
                Keep your heart open and your spirit high.
              </p>
            </div>
          </IonAccordion>
          
          {/* Bible Verse Accordion */}
          <IonAccordion value="bibleVerse">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Spiritual Guidance
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                <strong>Jeremiah 29:11:</strong> "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, 
                plans to give you hope and a future."
              </p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Search;
