import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
    <IonCardHeader>
      <IonCardTitle>Cute Birds</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>
  <IonCard>
    <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D" />
    <IonCardHeader>
      <IonCardTitle>Blue Kingfisher</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>
  <IonCard>
    <img alt="Silhouette of mountains" src="https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D" />
    <IonCardHeader>
      <IonCardTitle>Orange Vcut Bird</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>
  <IonCard>
    <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D" />
    <IonCardHeader>
      <IonCardTitle>Green Bird</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>
  <IonCard>
    <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1555169062-013468b47731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D" />
    <IonCardHeader>
      <IonCardTitle>Orange Bird</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>
  <IonCard>
    <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpcmR8ZW58MHx8MHx8fDA%3D" />
    <IonCardHeader>
      <IonCardTitle>Flamingo</IonCardTitle>
      <IonCardSubtitle></IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent></IonCardContent>
  </IonCard>


      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;