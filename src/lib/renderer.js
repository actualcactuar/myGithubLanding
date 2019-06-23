

export class TemplateRendererEngine {

    constructor(){

    }

    _repeat (string,data) {

        let repeatMatch = /\<(repeat).*?\>(.|[\n\r](?!(<repeat)))*\<\/(repeat)\>/g;
        let repeats = string.match(repeatMatch);
        let _output = string;
        if(repeats){
            repeats.forEach(repeat => {
                let startTagMatch = /\<(repeat).*?\>/;
                let asMatch = /as\=\".*?\"/;
                let dataMatch = /data\=\".*?\"/;
                let startTag = repeat.match(startTagMatch)[0];
                let asValue = startTag.match(asMatch)[0].slice(4,-1);
                let dataValue = startTag.match(dataMatch)[0].slice(6,-1);
                let repeatArr = [];
                
                if(Array.isArray(data[dataValue])){
                    repeatArr = data[dataValue].map(row => {
                        let result =  this._evaluate(repeat,row)
                        let tags = result.match(/repeat/g);
                        tags.forEach(tag => {
                            result = result.replace(tag,asValue);
                        })
                        return result;
                    })

                }

                _output = _output.replace(repeat, repeatArr.join(''));
            })
        }

        return _output;

    }

    _evaluate (string,data) {
        
        let target = /\{\{.*?\}\}/g;
        let matches = string.match(target);
        let _output = string

        if(matches){
            matches.forEach(match => {
                let key = match.slice(2,-2);
                _output = _output.replace(match, data[key]);
            })
        }

        return _output;

    }

    render (string,data){
        let _output = string;
        _output = this._repeat(_output,data);        
        _output = this._evaluate(_output,data);
        console.log(_output);
        return _output;
    } 

}

