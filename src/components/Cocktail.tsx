import {
  IonButton
} from '@ionic/react';

interface Props{
  cocktails: Array<{
    title: string,
    ingredients: Array<string>,
    etapes: Array<string>
  }>
}

interface Props{
  title: string,
  ingredients: Array<string>,
  etapes: Array<string>,
  onDismiss: () => void
}
const Cocktail: React.FC<Props> = (props) => (
  <div>
    {props.title}
    <IonButton expand="block" onClick={() => props.onDismiss()}>
      Close
    </IonButton>
  </div>
);

export default Cocktail;
