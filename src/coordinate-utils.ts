const EARTH_RADIUS = 6378;

export namespace CoordinateUtils {

    export function addKMToLatitude(latitude : number, kilometers : number) : number {
        return latitude + (kilometers / EARTH_RADIUS) * (180 / Math.PI);
    }

    export function addKMToLongitude(latitude : number, longitude : number, kilometers : number) : number {
        return longitude + (kilometers / EARTH_RADIUS) * (180 / Math.PI) / Math.cos(latitude * Math.PI / 180);
    }

    export function  getKMperDegree() {
        return (2*Math.PI / 360) * EARTH_RADIUS;
    }
}

