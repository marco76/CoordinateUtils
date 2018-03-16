# CoordinateUtils

Library that helps the development of applications that use Map libraries (e.g. Google Maps) and GPS coordinates.

## Usage

### TypeScript

Get KM per Degree
```typescript
import {CoordinatesUtils} from "./CoordinateUtils";


describe('KM per Degree', () => {

    it('should return 111', () => {
        const result = CoordinateUtils.getKMperDegree();
        expect(result).closeTo(111, 1);
    })}
);
```

#####Get new random coordinate. Generate a new coordinate with a maximal latitude / longitude distance of 50 km from Zurich.
```typescript
import {RandomCoordinateUtils} from "./RandomCoordinateUtils";
import {LatLng} from "./LatLng";

const ZURICH = new LatLng(47.22, 8.33);
const result = RandomCoordinateUtils.randomCoordinateFromPosition(ZURICH, 50);

```

#####Explicit declaration of the coordinates and 0.1 max distance

```typescript
const alternativeResult = RandomCoordinateUtils.randomCoordinateFromPositionWithExplicitLatLng(47.22, 8.33, 0.1)
```