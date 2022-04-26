import Axios from "../config/axios";

import ApiPrefix from "../config/prefix";
import { HttpPromise } from "@/@types/index";
const EDUCATION_URL = ApiPrefix.EDUCATION;

interface timeAllocationResponse {}

export class moduleLoginServices {
  static getList(): HttpPromise<timeAllocationResponse[]> {
    return Axios(`${EDUCATION_URL}/base/time/allocation`, {
      method: "get",
    });
  }
}

export class moduleUserServices {
  static getList(): HttpPromise<timeAllocationResponse[]> {
    return Axios(`${EDUCATION_URL}/base/time/getUser`, {
      method: "get",
    });
  }
}
