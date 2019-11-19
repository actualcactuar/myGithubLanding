export class TemplateRendererEngine {
  repeat(string, data) {
    const repeatMatch = /<(repeat).*?>(.|[\n\r](?!(<repeat)))*<\/(repeat)>/g;
    const repeats = string.match(repeatMatch);
    let output = string;
    if (repeats) {
      repeats.forEach(repeat => {
        const startTagMatch = /<(repeat).*?>/;
        const asMatch = /as=".*?"/;
        const dataMatch = /data=".*?"/;
        const startTag = repeat.match(startTagMatch)[0];
        const asValue = startTag.match(asMatch)[0].slice(4, -1);
        const dataValue = startTag.match(dataMatch)[0].slice(6, -1);
        let repeatArr = [];

        if (Array.isArray(data[dataValue])) {
          repeatArr = data[dataValue].map(row => {
            let result = this.constructor.evaluate(repeat, row);
            const tags = result.match(/repeat/g);
            tags.forEach(tag => {
              result = result.replace(tag, asValue);
            });
            return result;
          });
        }

        output = output.replace(repeat, repeatArr.join(''));
      });
    }

    return output;
  }

  static evaluate(string, data) {
    const target = /\{\{.*?\}\}/g;
    const matches = string.match(target);
    let output = string;

    if (matches) {
      matches.forEach(match => {
        const key = match.slice(2, -2);
        output = output.replace(match, data[key]);
      });
    }

    return output;
  }

  render(string, data) {
    let output = string;
    output = this.repeat(output, data);
    output = this.constructor.evaluate(output, data);
    return output;
  }
}
