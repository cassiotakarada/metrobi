/**
 * TWO EGGS PROBLEM - 100 FLOORS
 * 
 * Find the highest floor from which an egg can be dropped without breaking,
 * using only 2 eggs and minimizing the number of attempts in the worst case.
 * 
 * Optimized Strategy:
 * - First egg: non-uniform jumps starting from floor sqrt(2n) ≈ 14
 * - Second egg: linear search from the last safe floor
 */

/**
 * Solution 1: Optimized Mathematical Approach
 * Time: O(sqrt n), Space: O(1)
 */
function findCriticalFloorOptimal(floors = 100) {
    console.log(`SOLVING THE TWO EGGS PROBLEM - ${floors} FLOORS\n`);
    
    // Calculate the optimized initial step: sqrt(2n)
    const optimalStep = Math.ceil(Math.sqrt(2 * floors));
    
    console.log(`Initial step calculated: ${optimalStep}`);
    console.log(`Maximum number of attempts in worst case: ${optimalStep * 2 - 1}\n`);
    
    /**
     * Simulates the search for the critical floor
     * @param {number} criticalFloor - The actual floor where the egg breaks (for simulation)
     */
    function simulate(criticalFloor) {
        console.log(`SIMULATING: Real critical floor is ${criticalFloor}`);
        
        let drops = 0;
        let currentFloor = optimalStep;
        let lastSafeFloor = 0;
        let egg1Broken = false;
        
        console.log(`\nPHASE 1: Using first egg with jumps of ${optimalStep}`);
        
        // Phase 1: First egg with large jumps
        while (currentFloor <= floors && !egg1Broken) {
            drops++;
            console.log(`   Attempt ${drops}: Dropping egg from floor ${currentFloor}`);
            
            if (currentFloor >= criticalFloor) {
                console.log(`   EGG BROKE! Critical floor is between ${lastSafeFloor + 1} and ${currentFloor}`);
                egg1Broken = true;
            } else {
                console.log(`   Egg survived`);
                lastSafeFloor = currentFloor;
                currentFloor += optimalStep;
            }
        }
        
        if (!egg1Broken) {
            console.log(`   First egg didn't break up to floor ${floors}`);
            console.log(`   RESULT: Critical floor is ${floors} (or doesn't exist)`);
            return { criticalFloor: floors, totalDrops: drops };
        }
        
        console.log(`\nPHASE 2: Using second egg - linear search`);
        
        // Phase 2: Second egg with linear search
        for (let floor = lastSafeFloor + 1; floor < currentFloor; floor++) {
            drops++;
            console.log(`   Attempt ${drops}: Dropping second egg from floor ${floor}`);
            
            if (floor >= criticalFloor) {
                console.log(`   SECOND EGG BROKE!`);
                console.log(`   RESULT: Critical floor found is ${floor - 1}`);
                return { criticalFloor: floor - 1, totalDrops: drops };
            } else {
                console.log(`   Second egg survived`);
            }
        }
        
        // If we get here, the critical floor is the last tested
        console.log(`   RESULT: Critical floor is ${currentFloor - 1}`);
        return { criticalFloor: currentFloor - 1, totalDrops: drops };
    }
    
    return { simulate, optimalStep };
}

/**
 * Solution 2: Dynamic Programming (complete approach)
 * Time: O(n*k), Space: O(n*k) where k = number of eggs
 */
function findCriticalFloorDP(floors = 100, eggs = 2) {
    console.log(`\nDYNAMIC PROGRAMMING SOLUTION`);
    console.log(`Floors: ${floors}, Eggs: ${eggs}\n`);
    
    // dp[i][j] = minimum number of attempts for i floors with j eggs
    const dp = Array(floors + 1).fill().map(() => Array(eggs + 1).fill(0));
    
    // Base cases
    for (let i = 1; i <= floors; i++) {
        dp[i][1] = i; // With 1 egg, need to test linearly
    }
    
    for (let j = 1; j <= eggs; j++) {
        dp[1][j] = 1; // With 1 floor, need only 1 attempt
    }
    
    // Fill the DP table
    for (let i = 2; i <= floors; i++) {
        for (let j = 2; j <= eggs; j++) {
            dp[i][j] = Infinity;
            
            // Test dropping egg from each floor k
            for (let k = 1; k <= i; k++) {
                // Worst case: max(egg breaks, egg doesn't break) + 1 current attempt
                const worst = Math.max(
                    dp[k - 1][j - 1],  // Egg breaks: k-1 floors, j-1 eggs
                    dp[i - k][j]       // Egg doesn't break: i-k floors, j eggs
                );
                
                dp[i][j] = Math.min(dp[i][j], worst + 1);
            }
        }
    }
    
    console.log(`Minimum number of attempts in worst case: ${dp[floors][eggs]}`);
    
    // Reconstructs the optimized strategy
    function reconstructStrategy() {
        const strategy = [];
        let remainingFloors = floors;
        let remainingEggs = eggs;
        
        while (remainingFloors > 0 && remainingEggs > 1) {
            let bestFloor = 1;
            let minWorst = Infinity;
            
            for (let k = 1; k <= remainingFloors; k++) {
                const worst = Math.max(
                    dp[k - 1][remainingEggs - 1],
                    dp[remainingFloors - k][remainingEggs]
                );
                
                if (worst < minWorst) {
                    minWorst = worst;
                    bestFloor = k;
                }
            }
            
            strategy.push(bestFloor);
            remainingFloors -= bestFloor;
            
            if (dp[bestFloor - 1][remainingEggs - 1] > dp[remainingFloors][remainingEggs]) {
                remainingEggs--;
            }
        }
        
        return strategy;
    }
    
    return {
        minDrops: dp[floors][eggs],
        strategy: reconstructStrategy(),
        dpTable: dp
    };
}

/**
 * Main function to demonstrate the solutions
 */
function demonstrateEggProblem() {
    console.log("TWO EGGS PROBLEM - OPTIMIZED SOLUTIONS\n");
    console.log("=".repeat(60));
    
    // Solution 1: Mathematical Approach
    const optimal = findCriticalFloorOptimal(100);
    
    // Test some cases
    console.log("\n" + "=".repeat(60));
    console.log("TESTING DIFFERENT SCENARIOS:\n");
    
    const testCases = [25, 50, 75, 99];
    
    testCases.forEach(criticalFloor => {
        console.log(`\n${"-".repeat(40)}`);
        const result = optimal.simulate(criticalFloor);
        console.log(`Summary: ${result.totalDrops} attempts to find floor ${result.criticalFloor}`);
    });
    
    // Solution 2: Dynamic Programming
    console.log("\n" + "=".repeat(60));
    const dpResult = findCriticalFloorDP(100, 2);
    
    console.log(`\nCOMPARISON OF APPROACHES:`);
    console.log(`• Mathematical Approach: ~${optimal.optimalStep * 2 - 1} maximum attempts`);
    console.log(`• Dynamic Programming: ${dpResult.minDrops} maximum attempts`);
    console.log(`• DP Strategy: First test on floor ${dpResult.strategy[0] || 'N/A'}`);
    
    return {
        optimal: optimal.optimalStep * 2 - 1,
        dp: dpResult.minDrops,
        isOptimal: Math.abs((optimal.optimalStep * 2 - 1) - dpResult.minDrops) <= 1
    };
}

// Executes the demonstration when the file is run directly
if (require.main === module) {
    const results = demonstrateEggProblem();
    
    console.log(`\nCONCLUSION:`);
    console.log(`The solution requires at most ${results.dp} attempts in the worst case.`);
    console.log(`The two approaches are ${results.isOptimal ? 'equivalent' : 'different'}.`);
}

// Exports the functions for use in other modules
module.exports = {
    findCriticalFloorOptimal,
    findCriticalFloorDP,
    demonstrateEggProblem
};