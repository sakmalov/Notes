const Note = function(text){
    this.text = text;
}
  
Note.prototype.htmlToDisplay = function() {
    var div = document.createElement('div');
    var abbreviated_text = this._shorten(this.text)
    div.innerText = abbreviated_text;
    return div;
}
  
Note.prototype._shorten = function(text) {
    return text.substring(0,20)
}