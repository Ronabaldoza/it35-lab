import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons
} from '@ionic/react';
import FeedContainer from '../../components/FeedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <FeedContainer />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
