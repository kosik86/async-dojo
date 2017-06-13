import * as Promise from "bluebird";

export class ThirdParty {

    public getNumber(index: number): Promise<number> {

        const value = (1 / Math.sqrt(5)) * Math.pow((1 + Math.sqrt(5)) / 2, index);

        return Promise.delay(100).then(() => Math.round(value));

    }


}