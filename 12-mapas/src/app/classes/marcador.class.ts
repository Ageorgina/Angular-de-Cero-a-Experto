export class Marcador {
    public titulo = 'Sin titulo';
    public desc = 'Sin descripcion';
    public lat: number;
    public lng: number;
    constructor( lat: number , lng: number){
        this.lat = lat;
        this.lng = lng;

    }

}