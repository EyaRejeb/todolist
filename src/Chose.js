// une chose
export class Chose {
  constructor(id, texte, fait = false) {
    this._texte = texte;
    this._fait = fait;
    this._id = id;
  }
  // ---- getters
  get texte() {
    return this._texte;
  }
  get id() {
    return this._id;
  }
  get fait() {
    return this._fait;
  }
  // ---- setters
  faire() {
    this._fait = !this._fait; // modifier fait / pas fait
  }
  // modifier le texte
  set texte(texte) {
    this._texte = texte;
  }
  // -- toString
  toString() {
    return `--> ${this._texte} (${this._fait ? "fait" : "à faire"})`;
  }
}
