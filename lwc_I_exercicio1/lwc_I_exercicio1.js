import { LightningElement } from 'lwc';

export default class Lwc_I_exercicio1 extends LightningElement {

visible = true;

mostraTudo() {
this.visible = !this.visible;
} 

}