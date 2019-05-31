import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { marca: string; }

@Component({
  selector: 'app-subida',
  templateUrl: './subida.component.html',
  styleUrls: ['./subida.component.css']
})
export class SubidaComponent implements OnInit {
  binding: Item = {marca: ''};
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  cargarDatos() {
    this.itemsCollection.add(this.binding);
  }
  ngOnInit() {
  }

}
