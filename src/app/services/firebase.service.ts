import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = '/items';

  constructor(private db: AngularFireDatabase) {}

  createItem(item: any): void {
    this.db.object(`${this.dbPath}/tank1`).set(item);
  }

  getItems(): Observable<any[]> {
    return this.db.list(this.dbPath).valueChanges();
  }
}