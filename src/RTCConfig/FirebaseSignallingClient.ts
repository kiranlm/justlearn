import firebase from 'firebase/app';
import 'firebase/database';

export default class FirebaseSignallingClient {
  database: any;

  localPeerName: string;

  remotePeerName: string;

  constructor() {
    const firebaseConfig = {};
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.localPeerName = '';
    this.remotePeerName = '';
  }

  setPeerNames(localPeerName: string, remotePeerName: string) {
    this.localPeerName = localPeerName;
    this.remotePeerName = remotePeerName;
  }

  get targetRef() {
    return this.database.ref(this.remotePeerName);
  }

  async sendOffer(sessionDescription: any) {
    await this.targetRef.set({
      type: 'offer',
      sender: this.localPeerName,
      sessionDescription,
    });
  }

  async sendAnswer(sessionDescription: any) {
    await this.targetRef.set({
      type: 'answer',
      sender: this.localPeerName,
      sessionDescription,
    });
  }

  async remove(path: string) {
    await this.database.ref(path).remove();
  }
}
