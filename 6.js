class ZenosParadoxAnimation {
    constructor() {
        this.achillesSpeed = 10;
        this.tortoiseSpeed = 1;
        this.tortoiseHeadStart = 100;
        
        this.achillesPosition = 0;
        this.tortoisePosition = this.tortoiseHeadStart;
        
        this.step = 1;
        this.maxSteps = 10;
        this.animationSpeed = 1000;
        
        this.trackLength = 50;
    }

    calculateZenoStep() {
        console.log(`\n=== ZENO'S PARADOX STEP ${this.step} ===`);
        
        const currentAchillesPos = this.achillesPosition;
        const currentTortoisePos = this.tortoisePosition;
        
        console.log(`Initial positions:`);
        console.log(`  Achilles: ${currentAchillesPos.toFixed(2)} units`);
        console.log(`  Tortoise: ${currentTortoisePos.toFixed(2)} units`);
        console.log(`  Distance between: ${(currentTortoisePos - currentAchillesPos).toFixed(2)} units`);
        
        const timeToReachTortoise = (currentTortoisePos - currentAchillesPos) / this.achillesSpeed;
        
        console.log(`\nTime for Achilles to reach tortoise's current position: ${timeToReachTortoise.toFixed(3)} seconds`);
        
        this.achillesPosition = currentTortoisePos;
        this.tortoisePosition = currentTortoisePos + (this.tortoiseSpeed * timeToReachTortoise);
        
        console.log(`\nAfter ${timeToReachTortoise.toFixed(3)} seconds:`);
        console.log(`  Achilles: ${this.achillesPosition.toFixed(2)} units`);
        console.log(`  Tortoise: ${this.tortoisePosition.toFixed(2)} units`);
        console.log(`  New distance: ${(this.tortoisePosition - this.achillesPosition).toFixed(2)} units`);
        
        return timeToReachTortoise;
    }

    drawTrack() {
        const maxPosition = Math.max(this.achillesPosition, this.tortoisePosition) + 20;
        const scale = this.trackLength / maxPosition;
        
        const achillesPos = Math.floor(this.achillesPosition * scale);
        const tortoisePos = Math.floor(this.tortoisePosition * scale);
        
        let track = new Array(this.trackLength + 1).fill(' ');
        
        if (achillesPos === tortoisePos) {
            track[achillesPos] = '🏃🐢';
        } else {
            if (achillesPos < track.length) track[achillesPos] = '🏃';
            if (tortoisePos < track.length) track[tortoisePos] = '🐢';
        }
        
        console.log(`\nRace Track:`);
        console.log(`Start|${track.join('')}|Finish`);
        console.log(`     ${'0'.padEnd(this.trackLength/2)}${maxPosition.toFixed(0).padStart(this.trackLength/2)}`);
        
        console.log(`\n🏃 Achilles (${this.achillesPosition.toFixed(2)} units)`);
        console.log(`🐢 Tortoise (${this.tortoisePosition.toFixed(2)} units)`);
    }

    async runParadoxDemo() {
        console.log("🏛️  ZENO'S PARADOX: ACHILLES AND THE TORTOISE");
        console.log("=" .repeat(60));
        console.log(`Achilles speed: ${this.achillesSpeed} units/second`);
        console.log(`Tortoise speed: ${this.tortoiseSpeed} units/second`);
        console.log(`Tortoise head start: ${this.tortoiseHeadStart} units`);
        console.log("=" .repeat(60));
        
        this.drawTrack();
        
        let totalTime = 0;
        
        for (this.step = 1; this.step <= this.maxSteps; this.step++) {
            await this.sleep(this.animationSpeed);
            
            const stepTime = this.calculateZenoStep();
            totalTime += stepTime;
            
            this.drawTrack();
            
            console.log(`\nCumulative time: ${totalTime.toFixed(3)} seconds`);
            console.log(`Distance still to go: ${(this.tortoisePosition - this.achillesPosition).toFixed(6)} units`);
            
            if (this.tortoisePosition - this.achillesPosition < 0.001) {
                console.log("\n🎯 PRACTICALLY CAUGHT! (Distance < 0.001 units)");
                break;
            }
            
            console.log("-".repeat(60));
        }
        
        this.showMathematicalResolution(totalTime);
    }

    showMathematicalResolution(currentTime) {
        console.log("\n🔬 MATHEMATICAL RESOLUTION:");
        console.log("=" .repeat(60));
        
        const actualMeetingTime = this.tortoiseHeadStart / (this.achillesSpeed - this.tortoiseSpeed);
        const actualMeetingPoint = this.achillesSpeed * actualMeetingTime;
        
        console.log(`Mathematical solution:`);
        console.log(`  Meeting time: ${actualMeetingTime.toFixed(3)} seconds`);
        console.log(`  Meeting point: ${actualMeetingPoint.toFixed(2)} units`);
        console.log(`  Achilles travels: ${actualMeetingPoint.toFixed(2)} units`);
        console.log(`  Tortoise travels: ${(actualMeetingPoint - this.tortoiseHeadStart).toFixed(2)} units`);
        
        console.log(`\nParadox vs Reality:`);
        console.log(`  Zeno's steps completed: ${this.step - 1}`);
        console.log(`  Time in simulation: ${currentTime.toFixed(3)} seconds`);
        console.log(`  Actual meeting time: ${actualMeetingTime.toFixed(3)} seconds`);
        console.log(`  Difference: ${Math.abs(actualMeetingTime - currentTime).toFixed(6)} seconds`);
        
        console.log(`\n💡 EXPLANATION:`);
        console.log(`The paradox assumes infinite steps, but the sum of the infinite`);
        console.log(`geometric series converges to a finite value!`);
        console.log(`Each step takes less time, so infinite steps = finite time.`);
    }

    generateHTMLVisualization() {
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zeno's Paradox: Achilles and the Tortoise</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: rgba(0,0,0,0.3);
            border-radius: 10px;
            padding: 30px;
        }
        .title {
            text-align: center;
            font-size: 2em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .race-track {
            background: #8B4513;
            height: 80px;
            border-radius: 40px;
            position: relative;
            margin: 20px 0;
            border: 3px solid #654321;
        }
        .runner {
            position: absolute;
            font-size: 2em;
            top: 50%;
            transform: translateY(-50%);
            transition: left 1s ease-in-out;
        }
        .achilles { top: 20%; }
        .tortoise { top: 60%; }
        .info-panel {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        .info-box {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .controls {
            text-align: center;
            margin: 20px 0;
        }
        button {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 1em;
            cursor: pointer;
            margin: 0 10px;
            transition: all 0.3s;
        }
        button:hover {
            background: #ff5252;
            transform: translateY(-2px);
        }
        .step-info {
            background: rgba(0,0,0,0.5);
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 4px solid #4ecdc4;
        }
        .distance-bar {
            background: rgba(255,255,255,0.2);
            height: 20px;
            border-radius: 10px;
            overflow: hidden;
            margin: 10px 0;
        }
        .distance-fill {
            background: linear-gradient(90deg, #4ecdc4, #44a08d);
            height: 100%;
            transition: width 1s ease-in-out;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">🏛️ Zeno's Paradox: Achilles and the Tortoise</h1>
        
        <div class="info-panel">
            <div class="info-box">
                <h3>🏃 Achilles</h3>
                <p>Speed: <span id="achilles-speed">10</span> units/sec</p>
                <p>Position: <span id="achilles-pos">0</span> units</p>
            </div>
            <div class="info-box">
                <h3>🐢 Tortoise</h3>
                <p>Speed: <span id="tortoise-speed">1</span> units/sec</p>
                <p>Position: <span id="tortoise-pos">100</span> units</p>
            </div>
        </div>

        <div class="race-track">
            <div class="runner achilles" id="achilles">🏃</div>
            <div class="runner tortoise" id="tortoise">🐢</div>
        </div>

        <div class="info-box">
            <h3>Distance Between Them</h3>
            <div class="distance-bar">
                <div class="distance-fill" id="distance-bar"></div>
            </div>
            <p>Distance: <span id="distance">100</span> units</p>
        </div>

        <div class="controls">
            <button onclick="startDemo()">▶️ Start Demo</button>
            <button onclick="resetDemo()">🔄 Reset</button>
            <button onclick="showMath()">📊 Show Math</button>
        </div>

        <div id="step-info" class="step-info" style="display: none;">
            <h3>Step <span id="step-number">1</span></h3>
            <p>Time for this step: <span id="step-time">0</span> seconds</p>
            <p>Total time elapsed: <span id="total-time">0</span> seconds</p>
        </div>
    </div>

    <script>
        class ZenosParadoxWeb {
            constructor() {
                this.achillesSpeed = 10;
                this.tortoiseSpeed = 1;
                this.tortoiseHeadStart = 100;
                this.reset();
            }

            reset() {
                this.achillesPosition = 0;
                this.tortoisePosition = this.tortoiseHeadStart;
                this.step = 0;
                this.totalTime = 0;
                this.updateDisplay();
                document.getElementById('step-info').style.display = 'none';
            }

            updateDisplay() {
                const maxPos = Math.max(this.achillesPosition, this.tortoisePosition) + 50;
                const achillesPercent = (this.achillesPosition / maxPos) * 100;
                const tortoisePercent = (this.tortoisePosition / maxPos) * 100;

                document.getElementById('achilles').style.left = achillesPercent + '%';
                document.getElementById('tortoise').style.left = tortoisePercent + '%';

                document.getElementById('achilles-pos').textContent = this.achillesPosition.toFixed(2);
                document.getElementById('tortoise-pos').textContent = this.tortoisePosition.toFixed(2);
                
                const distance = this.tortoisePosition - this.achillesPosition;
                document.getElementById('distance').textContent = distance.toFixed(2);
                
                const distancePercent = Math.max(0, (distance / this.tortoiseHeadStart) * 100);
                document.getElementById('distance-bar').style.width = distancePercent + '%';
            }

            async runStep() {
                this.step++;
                const currentAchillesPos = this.achillesPosition;
                const currentTortoisePos = this.tortoisePosition;

                const timeToReachTortoise = (currentTortoisePos - currentAchillesPos) / this.achillesSpeed;
                
                this.achillesPosition = currentTortoisePos;
                this.tortoisePosition = currentTortoisePos + (this.tortoiseSpeed * timeToReachTortoise);
                this.totalTime += timeToReachTortoise;

                document.getElementById('step-info').style.display = 'block';
                document.getElementById('step-number').textContent = this.step;
                document.getElementById('step-time').textContent = timeToReachTortoise.toFixed(4);
                document.getElementById('total-time').textContent = this.totalTime.toFixed(4);

                this.updateDisplay();

                return this.tortoisePosition - this.achillesPosition;
            }

            async startDemo() {
                this.reset();
                
                for (let i = 0; i < 10; i++) {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    const distance = await this.runStep();
                    
                    if (distance < 0.01) {
                        alert('Practically caught! Distance < 0.01 units');
                        break;
                    }
                }
            }

            showMathematicalSolution() {
                const meetingTime = this.tortoiseHeadStart / (this.achillesSpeed - this.tortoiseSpeed);
                const meetingPoint = this.achillesSpeed * meetingTime;
                
                alert(\`Mathematical Solution:
Meeting Time: \${meetingTime.toFixed(3)} seconds
Meeting Point: \${meetingPoint.toFixed(2)} units

The paradox is resolved because the infinite series of time intervals converges to a finite sum!\`);
            }
        }

        const paradox = new ZenosParadoxWeb();

        function startDemo() {
            paradox.startDemo();
        }

        function resetDemo() {
            paradox.reset();
        }

        function showMath() {
            paradox.showMathematicalSolution();
        }
    </script>
</body>
</html>`;
        
        return html;
    }

    /**
     * Save HTML file for web visualization
     */
    saveHTMLFile() {
        const fs = require('fs');
        const html = this.generateHTMLVisualization();
        
        try {
            fs.writeFileSync('zenos-paradox.html', html);
            console.log('\n🌐 HTML visualization saved as "zenos-paradox.html"');
            console.log('Open this file in your web browser to see the interactive animation!');
        } catch (error) {
            console.log(`❌ Error saving HTML file: ${error.message}`);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

async function main() {
    const paradox = new ZenosParadoxAnimation();
    
    console.log("Choose animation type:");
    console.log("1. Terminal Animation (press Enter)");
    console.log("2. Generate HTML Web Animation (type 'web')");
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('\nYour choice: ', async (answer) => {
        if (answer.toLowerCase() === 'web') {
            paradox.saveHTMLFile();
        } else {
            await paradox.runParadoxDemo();
        }
        rl.close();
    });
}

// Export for module use
module.exports = ZenosParadoxAnimation;

// Run if executed directly
if (require.main === module) {
    main();
}