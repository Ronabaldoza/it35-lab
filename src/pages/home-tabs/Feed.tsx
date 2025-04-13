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
  const birdData = [
    {
      title: 'Cute Birds',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Small, colorful, and adorable'
    },
    {
      title: 'Blue Kingfisher',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Sharp-beaked fisher of the rivers'
    },
    {
      title: 'Orange Vcut Bird',
      image: 'https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Vivid feathers with sharp eyes'
    },
    {
      title: 'Green Bird',
      image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Calm and nature-blended'
    },
    {
      title: 'Orange Bird',
      image: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Bright and chirpy'
    },
    {
      title: 'Flamingo',
      image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&auto=format&fit=crop&q=60',
      subtitle: 'Elegant wader in pink'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Birds Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
 
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#f0f4f7' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {birdData.map((bird, index) => (
            <IonCard key={index} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '16px' }}>
              <img
                src={bird.image}
                alt={bird.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
              />
              <IonCardHeader>
                <IonCardTitle>{bird.title}</IonCardTitle>
                <IonCardSubtitle>{bird.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Explore the beauty of nature through this amazing bird species. Admire their colors, charm, and uniqueness.</p>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
