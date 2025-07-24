function isValidBrackets(str) {
    const stack = [];
    
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

const readline = require('readline');
const fs = require('fs');
const path = require('path');

function analyzeFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        console.log(`\nANALYZING FILE: ${filePath}`);
        console.log(`Total lines: ${lines.length}\n`);
        
        let hasErrors = false;
        
        lines.forEach((line, index) => {
            const lineNumber = index + 1;
            const isValid = isValidBrackets(line);
            
            if (!isValid) {
                console.log(`❌ LINE ${lineNumber}: Incorrect brackets`);
                console.log(`   Code: ${line.trim()}`);
                console.log(`   Problem: Brackets not balanced or in wrong order\n`);
                hasErrors = true;
            } else if (line.includes('(') || line.includes('[') || line.includes('{')) {
                console.log(`✅ LINE ${lineNumber}: Correct brackets`);
                console.log(`   Code: ${line.trim()}\n`);
            }
        });
        
        if (!hasErrors) {
            console.log("🎉 NO BRACKET ERRORS FOUND!");
        } else {
            console.log("⚠️ BRACKET ERRORS FOUND IN FILE!");
        }
        
    } catch (error) {
        console.log(`❌ Error reading file: ${error.message}`);
    }
}

function startInteractiveMode() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log("🧪 BRACKET TESTER");
    console.log("Which file do you want to test?");
    console.log("(Type the filename, e.g: test-brackets.js)");
    console.log("(Type 'exit' to quit)\n");
    
    rl.question('File name: ', (fileName) => {
        if (fileName.toLowerCase() === 'exit') {
            console.log("👋 Exiting...");
            rl.close();
            return;
        }
        
        const filePath = path.join(__dirname, fileName);
        
        if (fs.existsSync(filePath)) {
            analyzeFile(filePath);
        } else {
            console.log(`❌ File '${fileName}' not found in current directory.`);
        }
        
        rl.close();
    });
}

if (require.main === module) {
    startInteractiveMode();
}

module.exports = isValidBrackets;