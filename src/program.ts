import dotenv from 'dotenv';
import { Challenge1 } from "./challenge1";
import { Challenge2 } from './challenge2';


class Program {

    public challenge1: Challenge1 = new Challenge1();
    public challenge2: Challenge2 = new Challenge2();


    constructor() {
        dotenv.config();
        if (Number(process.env.CHALLENGE) == 1) {
            this.execChallenge1();
        } else {
            this.execChallenge2();

        }

    }

    execChallenge1() {
        this.challenge1.exec(100);
    }

    execChallenge2() {
        this.challenge2.exec();
    }


}

export default new Program();