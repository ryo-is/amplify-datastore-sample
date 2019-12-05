import AbstractModel from "./abstract_model"

type UserData = {
  id: string
  name: string
  age: number
}

export default class SampleAPI extends AbstractModel {
  constructor() {
    super("rest-api")
  }

  public async getData(): Promise<UserData> {
    return await this.get<UserData>("/get")
  }

  public postData(body: UserData) {
    this.post<UserData>("/post", body)
  }
}
