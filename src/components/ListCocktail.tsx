import {
  IonApp,
  IonIcon,
  IonFab,
  IonLabel,
  IonFabButton,
  useIonModal
} from '@ionic/react';
import { add } from 'ionicons/icons';

import Cocktail from './Cocktail'

interface Props{
  cocktails: Array<{
    title: string,
    ingredients: Array<string>,
    etapes: Array<string>
  }>
}
const ListCocktail: React.FC<Props> = (props) => {

  const showCocktail = (cocktail) => {
    const handleDismiss = () => {
      dismiss();
    };
  
    /**
     * First parameter is the component to show, second is the props to pass
     */
    const [present, dismiss] = useIonModal(Cocktail, {
      title: cocktail.title,
      ingredients: cocktail.ingredients,
      etapes: cocktail.ingredients,
      onDismiss: handleDismiss,
    });
    present();
  }

  const addCocktail = () => {
    const handleDismiss = () => {
      dismiss();
    };
  
    /**
     * First parameter is the component to show, second is the props to pass
     */
    const [present, dismiss] = useIonModal(Cocktail, {
      title: '',
      ingredients: '',
      etapes: '',
      onDismiss: handleDismiss,
    });
    present();
  }
  return (
  <IonApp>
    {props.cocktails.map(cocktail => (
      <IonLabel>{cocktail.title}</IonLabel>
    ))}
    <IonFab vertical="bottom" horizontal="start" slot="fixed">
      <IonFabButton onClick={addCocktail}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  </IonApp>
  );
}

export default ListCocktail;