import {CoordinateUtils} from "../src/coordinate-utils";
import { expect } from 'chai';
import 'mocha';

const ZURICH_LATITUDE = 47.36667;
const BERN_LATITUDE = 46.94809;

describe('KM per Degree', () => {

    it('should return 111', () => {
        const result = CoordinateUtils.getKMperDegree();
        expect(result).closeTo(111, 1);
    })}
);

describe('Change langitude', () => {
    it('should return 111', () => {
        const result = CoordinateUtils.addKMToLatitude(ZURICH_LATITUDE, 125);
        expect(result).closeTo(46.94,1.7);
    })
});