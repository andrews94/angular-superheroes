let superheroData = [
  { name: 'Batman', phone_number: "703-232-4556", comic: "DC", image_url: "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"},
  { name: 'Superman', phone_number: "703-941-0459", comic: "marvel", image_url: "http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125"},
  { name: 'Spiderman', phone_number: "703-929-8687", comic: "DC", image_url: "http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-Download-PNG.png"},
  { name: 'Wolverine', phone_number: "703-542-8506", comic: "marvel", image_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Wolverine_AKA_James_%22Logan%22_Howlett.png"},
  { name: 'Flash', phone_number: "703-871-6720", comic: "marvel", image_url: "http://www.drodd.com/images14/the-flash6.png"}
]



angular
  .module("superhero", [])
  .controller("superheroCtrl", [superheroController])

  function superheroController () {
    this.superhero = superheroData;

    this.addSuperhero = function(){
      let superhero = {name: this.newSuperheroname, phone_number: this.newSuperherophone, comic: this.newSuperherocomic, image_url: this.newSuperheroimage, completed: false};
      this.superhero.push(superhero);


    }
  }
