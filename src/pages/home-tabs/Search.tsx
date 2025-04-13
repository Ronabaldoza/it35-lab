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

          {/* FAITH */}
          <IonAccordion value="faith">
            <IonItem slot="header" color="light">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Faith in God
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>Hebrews 11:1</strong> – Now faith is confidence in what we hope for and assurance about what we do not see.</p>
              <p><strong>2 Corinthians 5:7</strong> – For we live by faith, not by sight.</p>
              <p><strong>Matthew 21:22</strong> – If you believe, you will receive whatever you ask for in prayer.</p>
            </div>
          </IonAccordion>

          {/* STRENGTH */}
          <IonAccordion value="strength">
            <IonItem slot="header" color="tertiary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Strength and Endurance
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>Philippians 4:13</strong> – I can do all this through Him who gives me strength.</p>
              <p><strong>Isaiah 40:31</strong> – But those who hope in the Lord will renew their strength.</p>
              <p><strong>Psalm 28:7</strong> – The Lord is my strength and my shield.</p>
            </div>
          </IonAccordion>

          {/* HOPE */}
          <IonAccordion value="hope">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Hope for Tomorrow
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>Romans 15:13</strong> – May the God of hope fill you with all joy and peace.</p>
              <p><strong>Jeremiah 29:11</strong> – "For I know the plans I have for you," declares the Lord.</p>
              <p><strong>Psalm 39:7</strong> – "But now, Lord, what do I look for? My hope is in you."</p>
            </div>
          </IonAccordion>

          {/* LOVE */}
          <IonAccordion value="love">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Love and Compassion
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>1 Corinthians 13:4-5</strong> – Love is patient, love is kind.</p>
              <p><strong>1 John 4:8</strong> – Whoever does not love does not know God, because God is love.</p>
              <p><strong>John 15:12</strong> – My command is this: Love each other as I have loved you.</p>
            </div>
          </IonAccordion>

          {/* PEACE */}
          <IonAccordion value="peace">
            <IonItem slot="header" color="medium">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Peace and Calm
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>John 14:27</strong> – Peace I leave with you; my peace I give you.</p>
              <p><strong>Philippians 4:7</strong> – And the peace of God, which transcends all understanding.</p>
              <p><strong>Psalm 4:8</strong> – In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.</p>
            </div>
          </IonAccordion>

          {/* GUIDANCE */}
          <IonAccordion value="guidance">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Guidance and Wisdom
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>Proverbs 3:5-6</strong> – Trust in the Lord with all your heart and lean not on your own understanding.</p>
              <p><strong>Psalm 32:8</strong> – I will instruct you and teach you in the way you should go.</p>
              <p><strong>James 1:5</strong> – If any of you lacks wisdom, you should ask God.</p>
            </div>
          </IonAccordion>

          {/* GRATITUDE */}
          <IonAccordion value="gratitude">
            <IonItem slot="header" color="secondary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Gratitude and Praise
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p><strong>1 Thessalonians 5:18</strong> – Give thanks in all circumstances; for this is God’s will for you.</p>
              <p><strong>Psalm 107:1</strong> – Give thanks to the Lord, for He is good; His love endures forever.</p>
              <p><strong>Colossians 3:17</strong> – Whatever you do, do it all in the name of the Lord Jesus, giving thanks to God.</p>
            </div>
          </IonAccordion>

        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Search;
