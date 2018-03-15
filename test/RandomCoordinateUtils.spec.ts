import {RandomCoordinateUtils} from "../src/random-coordinate-utils";
import {expect} from "chai";
import {LatLng} from "../src/LatLng";

const ZURICH = new LatLng(47.22, 8.33);
describe('Random values', () => {

    it('should return the same coordinates with 0 random distance', () => {
        const result = RandomCoordinateUtils.randomCoordinateFromPosition(ZURICH, 0);
        expect(result).deep.eq(ZURICH);
    })}
);