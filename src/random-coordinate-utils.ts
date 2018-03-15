import {LatLng} from "./LatLng";
import {CoordinateUtils} from "./coordinate-utils";

export namespace RandomCoordinateUtils {

    /**
     * randomCoordinateFromPosition generates new coordinates adding/subtracting an equivalent random amount of
     * kilometers to the original coordinates.
     *
     * A random number is generated separately for Latitude and Longitude
     *
     *
     * @param coordinate  Original coordinate
     * @param maxRandomRangeKM Number of Km to be added or subtracted from the latitude / longitude
     * @returns New coordinate
     */

    export function randomCoordinateFromPosition(coordinate : LatLng, maxRandomRangeKM : number) : LatLng {
        let latitude = CoordinateUtils.addKMToLatitude(coordinate.latitude, getRandomValueInRange(maxRandomRangeKM * -1, maxRandomRangeKM));
        let longitude = CoordinateUtils.addKMToLongitude(coordinate.latitude, coordinate.longitude, getRandomValueInRange(maxRandomRangeKM * -1, maxRandomRangeKM));
        return new LatLng(latitude, longitude);
    }

    export function randomCoordinateFromPositionWithExplicitLatLng( latitude: number, longitude: number, maxRandomRangeKM : number) : LatLng {
        return randomCoordinateFromPosition( new LatLng(latitude, longitude), maxRandomRangeKM);
    }

    export function getRandomValueInRange(min: number, max: number) : number {
        return Math.random() * (max - min) + min;
    }
}