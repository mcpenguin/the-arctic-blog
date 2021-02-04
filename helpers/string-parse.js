// stringParse(string): takes in a single "line" string, parses it; 
// ie includes \n characters every ~70 characters for brevity 
function stringParse(string) {
    let remainder = string;
    let result = "";
    let count = 0; // count: number of chars on the line
    
    while (true) {
        if (remainder === "") return result;

        if (count > 70 && remainder.charAt(0) === " ") {
            result += "\n";
            remainder = remainder.substr(1);
            count = 0;
        }

        result += remainder.charAt(0);
        remainder = remainder.substr(1);
        count++;
    }
}

console.log(stringParse("Cambridge International A Level Mathematics develops a set of transferable skills. These include the skill of working with mathematical information, as well as the ability to think logically and independently, consider accuracy, model situations mathematically, analyse results and reflect on findings. "))
