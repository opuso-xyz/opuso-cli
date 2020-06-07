class Utils {
  static validateEmail(email: string) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
  }

  static validateName(name: string) {
    return /^[a-zA-Z ]+$/.test(name);
  }

  static parseTags(commaSeperatedTags: string): string[] {
    return commaSeperatedTags.replace(/\s+/g, '').split(',');
  }

  static graphQlError(e: any): Error {
    return e.response.errors[0].message;
  }
}

export default Utils;
